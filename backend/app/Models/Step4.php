<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Step4 extends Model
{
    use HasFactory;

    protected $table = 'step4';
    protected $fillable = [
        'user_id',
        'tour_operator_master_id',
        'method',
        'transaction_id',
        'amount',
    ];
}
