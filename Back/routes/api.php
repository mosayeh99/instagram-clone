<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('fetch', [App\Http\Controllers\ChatsController::class, 'fetchMessages']);

Route::post('send', [App\Http\Controllers\ChatsController::class, 'sendMessage']);
Route::post('recive', [App\Http\Controllers\ChatsController::class, 'reciveMessage']);
Route::get('users', [App\Http\Controllers\ChatsController::class, 'getUsers']);
