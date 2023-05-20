<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PasswordResetController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\LikeController;
use App\Http\Controllers\Api\ReelController;
use App\Http\Controllers\Api\SaveController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\VerifyEmailController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
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




Route::get('fetch', [App\Http\Controllers\ChatsController::class, 'fetchMessages']);

Route::post('send', [App\Http\Controllers\ChatsController::class, 'sendMessage']);
Route::post('recive', [App\Http\Controllers\ChatsController::class, 'reciveMessage']);
Route::get('users', [App\Http\Controllers\ChatsController::class, 'getUsers']);


// register and login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login'])->name('login');

// public post routes
        //Route::get('/posts/search/{title}', [PostController::class, 'search']);

// public likes routes





// private posts and authors routes
Route::group(['middleware' => ['auth:sanctum']], function () {

    // ------------------------Get Login User info--------------
    Route::get('users/{username}', [UserController::class, 'getUserDetailsByUsername']);
    Route::get('users/get/info', [UserController::class, 'getLoginUser']);
    Route::get('users/user/{id}', [UserController::class, 'getUserById']);

    //--------------------------Post------------------------------
    Route::controller(PostController::class)->group(function () {
        Route::get('posts', 'index');
        Route::get('posts/user/{id}', 'getUserPosts');
        Route::post('posts', 'store')->name('posts.store');
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
        Route::get('comments/post/replies/{id}', 'postCommentsReplies');
        // reel
        Route::get('comments/reel/{id}', 'allReelComments');
        Route::post('comments/reel/{id}', 'storeReelComment');
        Route::get('comments/reel/replies/{id}', 'reelCommentsReplies');
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

    // History routes
    Route::POST('/search/store/{id}',[SearchHistoryController::class,'store']);
    Route::GET('/search/{name}',[SearchHistoryController::class,'search']);
    Route::delete('/search/deleteHistory/{id}',[SearchHistoryController::class,'deleteHistory']);
    Route::delete('/search/deleteAllHistory',[SearchHistoryController::class,'deleteAllHistory']);
    Route::get('/search/History/{id}/users',[SearchHistoryController::class,'searchHistory']);

    // Followers and Followings routes
    Route::POST('/follow/followerStore/{id}',[FollowerController::class,'followerstore']);
    Route::get('/follow/followerNumber',[FollowerController::class,'followernumber']);
    Route::get('/follow/followingNumber',[FollowerController::class,'followingnumber']);
    Route::delete('/follow/unfollow/{id}',[FollowerController::class,'unfollow']);
    Route::get('/follow/user/followers',[FollowerController::class,'userFollowers'])->name('followers');
    Route::get('/follow/user/followings',[FollowerController::class,'userFollowings']);

    // ------------------Stories------------------------
    Route::get('stories', [StoryController::class, 'StoryIndex']);
    Route::post('stories/add_story',[StoryController::class, 'StoryStore']);
    Route::delete('stories/delete/{id}', [StoryController::class, 'StoryDestroy']);

    // ------------------Notification--------------------
    Route::controller(\App\Http\Controllers\Api\NotificationController::class)->group(function () {
       Route::get('/notifications', 'getLastMonthNotification');
       Route::get('/notifications/find', 'isThereUnreadNotification');
       Route::get('/notifications/mark-all-as-read', 'markAllNotificationAsRead');
    });
});

// Verify email
Route::get('/email/verify/{id}/{hash}', VerifyEmailController::class)
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');

// Forget password
Route::post('/forgot-password', [PasswordResetController::class, 'sendPasswordRestLink'])
    ->middleware('guest')->name('password.email');

// Reset Password
Route::get('/reset-password/{token}', function (string $token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');

Route::post('/reset-password', [PasswordResetController::class, 'updatePassword'])
    ->middleware('guest')->name('password.update');
