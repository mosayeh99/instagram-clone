<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\LikeController;
use App\Http\Controllers\Api\ReelController;
use App\Http\Controllers\Api\SaveController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SearchHistoryController;
use App\Http\Controllers\Api\FollowerController;
use App\Http\Controllers\Api\StoryController;

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

    //--------------------------Post------------------------------
    Route::controller(PostController::class)->group(function () {
        Route::get('posts', 'index');
        Route::get('posts/user/{id}', 'getUserPosts');
        Route::post('posts', 'store');
        Route::get('posts/{id}', 'show');
        Route::PUT('posts/{id}', 'update');
        Route::DELETE('posts/{id}', 'destroy');
    });

    //--------------------------Reel------------------------------
    Route::controller(ReelController::class)->group(function () {
        Route::get('reels', 'index');
        Route::get('reels/user/{id}', 'getUserReels');
        Route::post('reels', 'store');
        Route::get('reels/{id}', 'show');
        Route::PUT('reels/{id}', 'update');
        Route::DELETE('reels/{id}', 'destroy');
    });

    //--------------------------Comment------------------------------
    Route::controller(CommentController::class)->group(function () {
        // post
        Route::get('comments/post/{id}', 'allPostComments');
        Route::post('comments/post/{id}', 'storePostComment');
        // reel
        Route::get('comments/reel/{id}', 'allPostComments');
        Route::post('comments/reel/{id}', 'storePostComment');
        // post & reel
        Route::get('comments/{id}/reply', 'commentReplies');
    });

    //--------------------------Like------------------------------
    Route::controller(LikeController::class)->group(function () {
        // post
        Route::post('likes/post/{id}', 'addPostLike');
        Route::DELETE('likes/post/{id}', 'removePostLike');
        Route::get('likes/post/{id}', 'postUsersLikes');
        // reel
        Route::post('likes/reel/{id}', 'addReelLike');
        Route::DELETE('likes/reel/{id}', 'removeReelLike');
        Route::get('likes/reel/{id}', 'ReelUsersLikes');
        // comment
        Route::post('likes/comment/{id}', 'addCommentLike');
        Route::DELETE('likes/comment/{id}', 'removeCommentLike');
    });

    //--------------------------Saved------------------------------
    Route::controller(SaveController::class)->group(function () {
        // post
        Route::post('saves/post/{id}', 'addPostToSaved');
        Route::DELETE('saves/post/{id}/delete', 'removePostFromSaved');
        Route::get('saves/post/user/{id}', 'savedPosts');
        // reel
        Route::post('saves/reel/{id}', 'addReelToSaved');
        Route::DELETE('saves/reel/{id}/delete', 'removeReelFromSaved');
        Route::get('saves/reel/user/{id}', 'savedReels');
    });

    // private author routes
           // Route::post('/authors', [AuthorController::class, 'store']);
           //  Route::put('/authors/{id}', [AuthorController::class, 'update']);
           //   Route::delete('/authors/{id}', [AuthorController::class, 'destroy']);

    // logout
        Route::post('/logout', [AuthController::class, 'logout']);

    //History routes
    Route::POST('/store/{id}',[SearchHistoryController::class,'store']);
    Route::GET('/search/{name}',[SearchHistoryController::class,'search']);
    Route::delete('/deleteHistory/{id}',[SearchHistoryController::class,'deleteHistory']);
    Route::get('/History/{id}/users',[SearchHistoryController::class,'searchHistory']);

    //Followers and Followings routes
    Route::POST('/followerStore/{id}',[FollowerController::class,'followerstore']);
    Route::get('/followerNumber/{id}',[FollowerController::class,'followernumber']);
    Route::get('/followingNumber/{id}',[FollowerController::class,'followingnumber']);
    Route::delete('/unfollow/{id}',[FollowerController::class,'unfollow']);
    Route::get('/user/{id}/followers',[FollowerController::class,'userFollowers'])->name('followers');
    Route::get('/user/{id}/followings',[FollowerController::class,'userFollowings']);

    // ------------------Stories------------------------
    Route::get('/stories/Stories_testing',[StoryController::class, 'StoryIndex']);
    Route::get('/stories/add_story',[StoryController::class, 'StoryCreate']);
    Route::post('/stories/add_story',[StoryController::class, 'StoryStore']);
    Route::delete('/stories/Stories_testing/delete_story/{id}',[StoryController::class, 'StoryDestroy']);

});

