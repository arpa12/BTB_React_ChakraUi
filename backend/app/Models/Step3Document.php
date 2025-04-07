<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Step3Document extends Model
{
    use HasFactory;

    protected $fillable = ['application_id', 'sl', 'label', 'file_path'];

    public function application()
    {
        return $this->belongsTo(TourOperatorApplication::class, 'application_id');
    }
}

