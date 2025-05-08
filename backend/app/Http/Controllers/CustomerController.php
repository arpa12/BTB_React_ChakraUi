<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Booking;

class CustomerController extends Controller
{
    // 1. List Services
    public function listServices(Request $request)
    {
        $services = Service::paginate(10);
        return response()->json($services, 200);
    }

    // 2. Book a Service
    public function bookService(Request $request)
    {
        $request->validate([
            'customer_name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'service_id' => 'required|exists:services,id',
            'scheduled_at' => 'nullable|date'
        ]);

        $booking = Booking::create([
            'customer_name' => $request->customer_name,
            'phone' => $request->phone,
            'service_id' => $request->service_id,
            'scheduled_at' => $request->scheduled_at
        ]);

        return response()->json([
            'message' => 'Service booked successfully',
            'booking_id' => $booking->id,
            'status' => $booking->status
        ], 201);
    }

    // 3. Booking Status
    public function bookingStatus($id)
    {
        $booking = Booking::with('service')->find($id);

        if (!$booking) {
            return response()->json(['error' => 'Booking not found'], 404);
        }

        return response()->json([
            'booking_id' => $booking->id,
            'customer_name' => $booking->customer_name,
            'status' => $booking->status,
            'service' => $booking->service->name,
            'scheduled_at' => $booking->scheduled_at
        ], 200);
    }
}



