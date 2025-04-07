<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Step2Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'application_id', 'name', 'address', 'nationality', 'designation',
        'education', 'appointment_date', 'experience', 'nid', 'passport'
    ];

    public function application()
    {
        return $this->belongsTo(TourOperatorApplication::class, 'application_id');
    }
}

