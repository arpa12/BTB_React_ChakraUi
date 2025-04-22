<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Step3 extends Model
{
    use HasFactory;

    protected $table = 'step3';
    protected $fillable = [
        'user_id',
        'tour_operator_master_id',
        'file_1',
        'file_2',
        'file_3',
    ];
}
