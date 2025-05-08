<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    use HasFactory;

    // Mass assignable fields
    protected $fillable = [
        'name',
        'category',
        'price',
        'description'
    ];

    // A service can have many bookings
    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
