<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TourOperatorApplication;
use App\Models\Step1ApplicantInfo;
use App\Models\Step2Employee;
use App\Models\Step3Document;
use App\Models\Step4Payment;

class TourOperatorController extends Controller
{
    // Function for Step 1
    public function saveStep1(Request $request)
    {
        try {
            $user = auth()->user();  // Check if user is authenticated
            if (!$user) {
                return response()->json(['error' => 'Unauthorized'], 401);  // Unauthorized error if no user is found
            }

            // Create or get the application
            $application = TourOperatorApplication::firstOrCreate(
                ['user_id' => $user->id, 'status' => 'draft']
            );

            // Validate incoming request
            $data = $request->validate([
                'name_bn' => 'required|string',
                'name_en' => 'required|string',
                'designation' => 'required|string',
                'mobile' => 'required|string|regex:/^[0-9]{11}$/',
                'email' => 'required|email',
                'org_name_bn' => 'required|string',
                'org_name_en' => 'required|string',
                'tour_operator_type' => 'required|string',
                'org_type' => 'required|string',
                'website' => 'nullable|string',
                'location' => 'required|string',
                'division' => 'required|string',
                'district' => 'required|string',
                'upazila' => 'required|string',
                'post_code' => 'required|string',
                'address_bn' => 'required|string',
                'address_en' => 'required|string',
                'business_phone' => 'nullable|string',
                'business_mobile' => 'nullable|string',
                'business_email' => 'nullable|email',
                'owner_name' => 'required|string',
                'owner_father_name' => 'required|string',
                'owner_mother_name' => 'required|string',
                'nationality' => 'required|string',
                'nid' => 'required|string',
                'dob' => 'required|date',
                'owner_designation' => 'required|string',
                'owner_email' => 'required|email',
                'owner_mobile' => 'required|string',
                'permanent_division' => 'required|string',
                'permanent_district' => 'required|string',
                'permanent_upazila' => 'required|string',
                'permanent_post_code' => 'required|string',
                'permanent_address' => 'required|string',
                'current_division' => 'required|string',
                'current_district' => 'required|string',
                'current_upazila' => 'required|string',
                'current_post_code' => 'required|string',
                'current_address' => 'required|string',
                'inbound_count' => 'required|numeric',
                'outbound_count' => 'required|numeric',
                'domestic_count' => 'required|numeric',
                'certificate_number' => 'required|string',
                'issue_date' => 'required|date',
                'fiscal_year' => 'required|string',
                'tax_issue_date' => 'required|date',
                'tax_fiscal_year' => 'required|string',
                'e_tin' => 'required|string',
            ]);

            // Associate the data with the application
            $data['application_id'] = $application->id;

            // Store or update the data in Step1ApplicantInfo table
            Step1ApplicantInfo::updateOrCreate(
                ['application_id' => $application->id],
                $data
            );

            return response()->json(['message' => 'Step 1 saved successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to save Step 1', 'details' => $e->getMessage()], 500);
        }
    }

    // Function for Step 2
    public function saveStep2(Request $request)
    {
        try {
            $user = auth()->user();
            if (!$user) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }

            $application = TourOperatorApplication::firstOrCreate(
                ['user_id' => $user->id, 'status' => 'draft']
            );

            $request->validate([
                'employees' => 'required|array|min:1',
                'employees.*.name' => 'required|string',
                'employees.*.nationality' => 'required|string',
                'employees.*.designation' => 'nullable|string',
                'employees.*.education' => 'nullable|string',
                'employees.*.appointmentDate' => 'nullable|date',
                'employees.*.experience' => 'nullable|string',
                'employees.*.nid' => 'nullable|string',
                'employees.*.passport' => 'nullable|string',
            ]);

            Step2Employee::where('application_id', $application->id)->delete();  // Delete old records

            // Save new employee data
            foreach ($request->employees as $employee) {
                Step2Employee::create([
                    'application_id' => $application->id,
                    'name' => $employee['name'],
                    'address' => $employee['address'] ?? null,
                    'nationality' => $employee['nationality'],
                    'designation' => $employee['designation'] ?? null,
                    'education' => $employee['education'] ?? null,
                    'appointment_date' => $employee['appointmentDate'] ?? null,
                    'experience' => $employee['experience'] ?? null,
                    'nid' => $employee['nid'] ?? null,
                    'passport' => $employee['passport'] ?? null,
                ]);
            }

            return response()->json(['message' => 'Step 2 saved successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to save Step 2', 'details' => $e->getMessage()], 500);
        }
    }

    // Function for Step 3
    public function saveStep3(Request $request)
    {
        try {
            $user = auth()->user();
            if (!$user) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }

            $application = TourOperatorApplication::firstOrCreate(
                ['user_id' => $user->id, 'status' => 'draft']
            );

            Step3Document::where('application_id', $application->id)->delete();  // Delete old documents

            // Validate each file individually
            foreach ($request->allFiles() as $key => $file) {
                $request->validate([
                    $key => 'file|mimes:pdf,jpg,jpeg,png|max:2048',
                ]);
            }

            // Store the documents
            foreach ($request->allFiles() as $key => $file) {
                $path = $file->store('documents', 'public');
                Step3Document::create([
                    'application_id' => $application->id,
                    'sl' => $key,
                    'label' => $request->input("label_$key", 'Document'),
                    'file_path' => $path,
                ]);
            }

            return response()->json(['message' => 'Documents uploaded successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to save Step 3', 'details' => $e->getMessage()], 500);
        }
    }

    // Function for Step 4 (Payment step)
    public function saveStep4(Request $request)
    {
        try {
            $user = auth()->user();
            if (!$user) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }

            $application = TourOperatorApplication::firstOrCreate(
                ['user_id' => $user->id, 'status' => 'draft']
            );

            $data = $request->validate([
                'method' => 'required|string',
                'transaction_id' => 'required|string',
                'amount' => 'required|numeric',
            ]);

            $data['application_id'] = $application->id;

            Step4Payment::updateOrCreate(
                ['application_id' => $application->id],
                $data
            );

            // Update the application status to 'submitted' after Step 4 is completed
            $application->update(['status' => 'submitted']);

            return response()->json(['message' => 'Payment saved and application submitted successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to save Step 4', 'details' => $e->getMessage()], 500);
        }
    }
}
