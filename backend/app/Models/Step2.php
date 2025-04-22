<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Step2 extends Model
{
    use HasFactory;

    protected $table = 'step2';
    protected $fillable = [
        'user_id',
        'tour_operator_master_id',
        'emp_name',
        'emp_address',
        'emp_gender',
        'emp_designation',
        'emp_education',
        'emp_appointment_date',
        'emp_experience',
        'emp_passport',
    ];
}
