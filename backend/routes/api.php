<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\TourOperatorController;

Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);

Route::middleware(['auth:api'])->group(function () {
    Route::get('/dashboard', [UsersController::class, 'dashboard']);
    Route::post('/logout', [UsersController::class, 'logout']);
});



Route::middleware('auth:api')->group(function () {
    Route::post('/tour-operator/save', [TourOperatorController::class, 'saveOrSubmit']);
    Route::get('/tour-operator/list', [TourOperatorController::class, 'list']);
    Route::get('/tour-operator/{id}', [TourOperatorController::class, 'getById']);
});

