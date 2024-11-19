<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::post('/register', 'App\Http\Controllers\AuthController@register');
Route::post('/login', 'App\Http\Controllers\AuthController@login');

Route::get('/posts', [PostController::class, 'index']);
