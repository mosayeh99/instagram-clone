<?php

use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\LikeController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\ReelController;
use App\Http\Controllers\Api\SaveController;
use App\Http\Controllers\Api\StoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FollowerController;


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


//---------------------Posts------------------------------
Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
Route::get('/posts/{id}', [PostController::class, 'show'])->name('posts.show');
Route::DELETE('/posts/{id}', [PostController::class, 'destroy'])->name('posts.destroy');


Route::get('/likes/{id}', [LikeController::class, 'addPostLike'])->name('likes.add');
Route::get('/likes/{id}/delete', [LikeController::class, 'removePostLike'])->name('likes.remove');
Route::get('/likes/post/{id}', [LikeController::class, 'usersLikes']);


Route::get('/saves/post/{id}', [SaveController::class, 'addPostToSaved'])->name('saves.add');
Route::get('/saves/{id}/delete', [SaveController::class, 'removePostFromSaved'])->name('saves.remove');
Route::get('/saves/{id}', [SaveController::class, 'savedPosts']);


Route::get('/comments/{id}', [CommentController::class, 'allPostComments'])->name('comments.index');
Route::post('/comments/{id}', [CommentController::class, 'storePostComment'])->name('comments.store');

//----------------------Reels------------------------
Route::post('/reels',[ReelController::class, 'store'])->name('reels.store');
Route::get('/reels/{id}',[ReelController::class, 'show'])->name('reels.show');


Route::get('/likes/reels/{id}', [LikeController::class, 'addReelLike'])->name('likes.reel.add');
Route::get('/likes/reels/{id}/delete', [LikeController::class, 'removeReelLike'])->name('likes.reel.remove');
Route::get('/likes/reels/post/{id}', [LikeController::class, 'ReelUsersLikes']);


Route::get('/comments/reels/{id}', [CommentController::class, 'allReelComments'])->name('comments.reel.index');
Route::post('/comments/reels/{id}', [CommentController::class, 'storeReelComment'])->name('comments.reel.store');


Route::get('/saves/reels/{id}', [SaveController::class, 'addReelToSaved'])->name('saves.reel.add');
Route::get('/saves/reels/{id}/delete', [SaveController::class, 'removeReelFromSaved'])->name('saves.reel.remove');
Route::get('/saves/reels/{id}', [SaveController::class, 'savedReels']);



// ------------------Stories------------------------
Route::get('/Stories_testing',[StoryController::class, 'StoryIndex']);
Route::get('/add_story',[StoryController::class, 'StoryCreate']);
Route::post('/add_story',[StoryController::class, 'StoryStore']);
Route::delete('/Stories_testing/delete_story/{id}',[StoryController::class, 'StoryDestroy']);
