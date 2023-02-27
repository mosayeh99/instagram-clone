<?php

use App\Http\Controllers\Api\StoryController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});




























Route::get('/Stories_testing',[StoryController::class, 'StoryIndex']);
Route::get('/add_story',[StoryController::class, 'StoryCreate']);
Route::post('/add_story',[StoryController::class, 'StoryStore']);
Route::delete('/Stories_testing/delete_story/{id}',[StoryController::class, 'StoryDestroy']);