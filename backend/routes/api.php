<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CustomerController;

// Auth Routes
Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);
Route::post('/logout', [UsersController::class, 'logout'])->middleware('auth:api');

// Customer Features
Route::get('/services', [CustomerController::class, 'listServices']);
Route::post('/book', [CustomerController::class, 'bookService']);
Route::get('/booking/{id}', [CustomerController::class, 'bookingStatus']);
