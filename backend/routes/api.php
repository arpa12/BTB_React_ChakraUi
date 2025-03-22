<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

// Public Routes (No Authentication Required)
Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);

// Protected Routes (Authentication Required)
Route::middleware(['auth:api'])->group(function () {
    Route::get('/dashboard', [UsersController::class, 'dashboard']);
    Route::post('/logout', [UsersController::class, 'logout']);
});
