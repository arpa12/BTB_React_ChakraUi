<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TourOperatorApplication extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'status'];

    public function applicantInfo()
    {
        return $this->hasOne(Step1ApplicantInfo::class, 'application_id');
    }

    public function employees()
    {
        return $this->hasMany(Step2Employee::class, 'application_id');
    }

    public function documents()
    {
        return $this->hasMany(Step3Document::class, 'application_id');
    }

    public function payment()
    {
        return $this->hasOne(Step4Payment::class, 'application_id');
    }
}
