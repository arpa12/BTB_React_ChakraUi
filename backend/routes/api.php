<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\TourOperatorController;

// Public Routes (No Authentication Required)
Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);

// Protected Routes (Authentication Required)
Route::middleware(['auth:api'])->group(function () {
    Route::get('/dashboard', [UsersController::class, 'dashboard']);
    Route::post('/logout', [UsersController::class, 'logout']);
});

Route::middleware('auth:api')->prefix('tour-operator')->group(function () {
    Route::post('/step1', [TourOperatorController::class, 'saveStep1']);
    Route::post('/step2', [TourOperatorController::class, 'saveStep2']);
    Route::post('/step3', [TourOperatorController::class, 'saveStep3']);
    Route::post('/step4', [TourOperatorController::class, 'saveStep4']);
});


