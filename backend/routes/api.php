<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);

Route::middleware(['auth:api'])->group(function () {
    Route::get('/dashboard', [UsersController::class, 'dashboard']);
    Route::post('/logout', [UsersController::class, 'logout']);
});

