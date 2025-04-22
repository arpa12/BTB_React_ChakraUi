<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TourOperatorMaster;
use App\Models\Step1;
use App\Models\Step2;
use App\Models\Step3;
use App\Models\Step4;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class TourOperatorController extends Controller
{
    public function saveOrSubmit(Request $request)
    {
        try {
            DB::beginTransaction();

            $userId = Auth::id();
            $isDraft = $request->status === 'draft';

            $file1 = $request->hasFile('file_1') ? $request->file('file_1')->store('uploads/files') : null;
            $file2 = $request->hasFile('file_2') ? $request->file('file_2')->store('uploads/files') : null;
            $file3 = $request->hasFile('file_3') ? $request->file('file_3')->store('uploads/files') : null;

            $master = TourOperatorMaster::updateOrCreate(
                ['user_id' => $userId, 'id' => $request->id],
                [
                    'applicant_name_bn' => $request->applicant_name_bn,
                    'applicant_name_en' => $request->applicant_name_en,
                    'applicant_father_name' => $request->applicant_father_name,
                    'applicant_mother_name' => $request->applicant_mother_name,
                    'applicant_gender' => $request->applicant_gender,
                    'applicant_designation' => $request->applicant_designation,
                    'applicant_mobile' => $request->applicant_mobile,
                    'applicant_phone' => $request->applicant_phone,
                    'applicant_email' => $request->applicant_email,
                    'emp_name' => $request->emp_name,
                    'emp_address' => $request->emp_address,
                    'emp_gender' => $request->emp_gender,
                    'emp_designation' => $request->emp_designation,
                    'emp_education' => $request->emp_education,
                    'emp_appointment_date' => $request->emp_appointment_date,
                    'emp_experience' => $request->emp_experience,
                    'emp_passport' => $request->emp_passport,
                    'file_1' => $file1 ?: $request->existing_file_1,
                    'file_2' => $file2 ?: $request->existing_file_2,
                    'file_3' => $file3 ?: $request->existing_file_3,
                    'method' => $request->method,
                    'transaction_id' => $request->transaction_id,
                    'amount' => $request->amount,
                    'status' => $isDraft ? 'draft' : 'submitted',
                ]
            );

            Step1::updateOrCreate(
                ['tour_operator_master_id' => $master->id],
                [
                    'user_id' => $userId,
                    'tour_operator_master_id' => $master->id,
                    'applicant_name_bn' => $request->applicant_name_bn,
                    'applicant_name_en' => $request->applicant_name_en,
                    'applicant_father_name' => $request->applicant_father_name,
                    'applicant_mother_name' => $request->applicant_mother_name,
                    'applicant_gender' => $request->applicant_gender,
                    'applicant_designation' => $request->applicant_designation,
                    'applicant_mobile' => $request->applicant_mobile,
                    'applicant_phone' => $request->applicant_phone,
                    'applicant_email' => $request->applicant_email,
                ]
            );

            Step2::updateOrCreate(
                ['tour_operator_master_id' => $master->id],
                [
                    'user_id' => $userId,
                    'tour_operator_master_id' => $master->id,
                    'emp_name' => $request->emp_name,
                    'emp_address' => $request->emp_address,
                    'emp_gender' => $request->emp_gender,
                    'emp_designation' => $request->emp_designation,
                    'emp_education' => $request->emp_education,
                    'emp_appointment_date' => $request->emp_appointment_date,
                    'emp_experience' => $request->emp_experience,
                    'emp_passport' => $request->emp_passport,
                ]
            );

            Step3::updateOrCreate(
                ['tour_operator_master_id' => $master->id],
                [
                    'user_id' => $userId,
                    'tour_operator_master_id' => $master->id,
                    'file_1' => $file1,
                    'file_2' => $file2,
                    'file_3' => $file3,
                ]
            );

            Step4::updateOrCreate(
                ['tour_operator_master_id' => $master->id],
                [
                    'user_id' => $userId,
                    'tour_operator_master_id' => $master->id,
                    'method' => $request->method,
                    'transaction_id' => $request->transaction_id,
                    'amount' => $request->amount,
                ]
            );

            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => $isDraft ? 'Draft saved successfully.' : 'Form submitted successfully.',
                'id' => $master->id,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }



    public function list()
    {
        $userId = Auth::id();
        \Log::info('Fetching applications for user ID: ' . $userId);

        $applications = TourOperatorMaster::where('user_id', $userId)->get();

        \Log::info('Applications: ' . $applications->toJson());

        return response()->json($applications);
    }


}
