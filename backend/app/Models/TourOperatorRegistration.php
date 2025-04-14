<?php

// app/Models/TourOperatorRegistration.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourOperatorRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'applicant',
        'organization',
        'business_address',
        'employees',
        'attachments',
        'payment_method',
        'transaction_id',
        'amount',
        'is_draft',
    ];

    protected $casts = [
        'applicant' => 'array',
        'organization' => 'array',
        'business_address' => 'array',
        'employees' => 'array',
        'attachments' => 'array',
    ];
}

