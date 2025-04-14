<?php

namespace App\Http\Controllers;

use App\Models\TourOperatorRegistration;
use Illuminate\Http\Request;

class TourOperatorRegistrationController extends Controller
{
    public function saveDraft(Request $request)
    {
        $request->validate([
            'step1' => 'required|array',
            'step2' => 'required|array',
            'step3' => 'nullable|array',
            'step4' => 'nullable|array',
        ]);

        $registration = new TourOperatorRegistration();
        $registration->applicant = json_encode($request->step1['applicant']);
        $registration->organization = json_encode($request->step1['organization']);
        $registration->business_address = json_encode($request->step1['business_address']);
        $registration->employees = json_encode($request->step2);
        $registration->attachments = json_encode($request->step3);
        $registration->payment_method = $request->step4['method'] ?? null;
        $registration->transaction_id = $request->step4['transaction_id'] ?? null;
        $registration->amount = $request->step4['amount'] ?? null;
        $registration->is_draft = true;
        $registration->save();

        return response()->json([
            'message' => 'Draft saved successfully',
            'data' => $registration,
        ]);
    }

    public function submit(Request $request)
    {
        $request->validate([
            'step1' => 'required|array',
            'step2' => 'required|array',
            'step3' => 'nullable|array',
            'step4' => 'nullable|array',
        ]);

        $registration = new TourOperatorRegistration();
        $registration->applicant = json_encode($request->step1['applicant']);
        $registration->organization = json_encode($request->step1['organization']);
        $registration->business_address = json_encode($request->step1['business_address']);
        $registration->employees = json_encode($request->step2);
        $registration->attachments = json_encode($request->step3);
        $registration->payment_method = $request->step4['method'] ?? null;
        $registration->transaction_id = $request->step4['transaction_id'] ?? null;
        $registration->amount = $request->step4['amount'] ?? null;
        $registration->is_draft = false;
        $registration->save();

        return response()->json([
            'message' => 'Registration submitted successfully',
            'data' => $registration,
        ]);
    }
}
