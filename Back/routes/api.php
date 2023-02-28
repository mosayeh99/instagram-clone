<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SearchHistoryController;
use App\Http\Controllers\Api\FollowerController;

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

Route::POST('/store/{id}',[SearchHistoryController::class,'store']);
Route::GET('/search/{name}',[SearchHistoryController::class,'search']);
Route::delete('/deleteHistory/{id}',[SearchHistoryController::class,'deleteHistory']);
Route::get('/History/{id}/users',[SearchHistoryController::class,'searchHistory']);



Route::POST('/followerStore/{id}',[FollowerController::class,'followerstore']);
Route::get('/followerNumber/{id}',[FollowerController::class,'followernumber']);
Route::get('/followingNumber/{id}',[FollowerController::class,'followingnumber']);
Route::delete('/unfollow/{id}',[FollowerController::class,'unfollow']);
Route::get('/user/{id}/followers',[FollowerController::class,'userFollowers'])->name('followers');
Route::get('/user/{id}/followings',[FollowerController::class,'userFollowings']);


Route::get('user',[UserController::class ,'index']) ;
//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/posts/{id}', [PostController::class, 'show'])->name('posts.show');
