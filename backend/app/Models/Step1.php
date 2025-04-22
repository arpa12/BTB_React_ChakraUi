<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Step1 extends Model
{
    use HasFactory;


    protected $table = 'step1';

    protected $fillable = [
        'user_id',
        'tour_operator_master_id',
        'applicant_name_bn',
        'applicant_name_en',
        'applicant_father_name',
        'applicant_mother_name',
        'applicant_gender',
        'applicant_designation',
        'applicant_mobile',
        'applicant_phone',
        'applicant_email',
    ];
}
