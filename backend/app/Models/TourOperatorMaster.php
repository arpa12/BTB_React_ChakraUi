<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourOperatorMaster extends Model
{
    use HasFactory;

    protected $table = 'tour_operator_master';

    protected $fillable = [
        'user_id',
        'applicant_name_bn',
        'applicant_name_en',
        'applicant_father_name',
        'applicant_mother_name',
        'applicant_gender',
        'applicant_designation',
        'applicant_mobile',
        'applicant_phone',
        'applicant_email',
        'emp_name',
        'emp_address',
        'emp_gender',
        'emp_designation',
        'emp_education',
        'emp_appointment_date',
        'emp_experience',
        'emp_passport',
        'file_1',
        'file_2',
        'file_3',
        'method',
        'transaction_id',
        'amount',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
