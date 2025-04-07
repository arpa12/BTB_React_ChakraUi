<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Step4Payment extends Model
{
    use HasFactory;

    protected $fillable = ['application_id', 'method', 'transaction_id', 'amount'];

    public function application()
    {
        return $this->belongsTo(TourOperatorApplication::class, 'application_id');
    }
}


