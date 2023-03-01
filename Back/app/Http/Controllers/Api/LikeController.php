<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Reel;

class LikeController extends Controller
{
    //-------------Post Likes---------------
    public function addPostLike($id)
    {
        $post = Post::findOrFail($id);
        $post->likes()->create(['user_id' => '1']);
        return response('Like Add Successfully', 201);
    }

    public function removePostLike($id)
    {
        $post = Post::findOrFail($id);
        $post->likes()->where('user_id','1')->delete();
        return response('Like Removed', 200);
    }

    public function postUsersLikes($id)
    {
        $post = Post::findOrFail($id);
        foreach ($post->likes as $like) {
            $users[] = new UserResource($like->user);
        }
        return response($users, 200);
    }

    //-------------Reel Likes---------------
    public function addReelLike($id)
    {
        $reel = Reel::findOrFail($id);
        $reel->likes()->create(['user_id' => '1']);
        return response('Like Add Successfully', 201);
    }

    public function removeReelLike($id)
    {
        $reel = Reel::findOrFail($id);
        $reel->likes()->where('user_id','1')->delete();
        return response('Like Removed', 200);
    }

    public function reelUsersLikes($id)
    {
        $reel = Reel::findOrFail($id);
        foreach ($reel->likes as $like) {
            $users[] = new UserResource($like->user);
        }
        return response($users, 200);
    }

    //-------------Comment Likes---------------
    public function addCommentLike($id)
    {
        $comment = Comment::findOrFail($id);
        $comment->likes()->create(['user_id' => '1']);
        return response('Like Add Successfully', 201);
    }

    public function removeCommentLike($id)
    {
        $comment = Comment::findOrFail($id);
        $comment->likes()->where('user_id','1')->delete();
        return response('Like Removed', 200);
    }
}
