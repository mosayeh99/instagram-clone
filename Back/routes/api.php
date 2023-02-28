<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PostController;
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

Route::middleware('auth:sanctum')->get('/user_profile', function (Request $request) {
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


// register and login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// public post routes
        //Route::get('/posts/search/{title}', [PostController::class, 'search']);

// public likes routes
    //your likes route

// private posts and authors routes
Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::get('/torres', [AuthController::class, 'torres']);

    // private post routes
           //Route::post('/posts', [PostController::class, 'store']);
           //Route::put('/posts/{id}', [PostController::class, 'update']);
           //Route::delete('/posts/{id}', [PostController::class, 'destroy']);

    // private author routes
           // Route::post('/authors', [AuthorController::class, 'store']);
           //  Route::put('/authors/{id}', [AuthorController::class, 'update']);
           //   Route::delete('/authors/{id}', [AuthorController::class, 'destroy']);

    // logout
        Route::post('/logout', [AuthController::class, 'logout']);
});

