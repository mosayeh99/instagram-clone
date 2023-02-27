<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Post;
use App\Models\Reel;

class LikeController extends Controller
{
    //-------------Post Requests---------------
    public function addPostLike($id)
    {
        $post = Post::findOrFail($id);
        $post->likes()->create(['user_id' => '1']);
        return back();
    }

    public function removePostLike($id)
    {
        $post = Post::findOrFail($id);
        $post->likes()->where('user_id','1')->delete();
        return back();
    }

    public function postUsersLikes($id)
    {
        $post = Post::findOrFail($id);
        foreach ($post->likes as $like) {
            $users[] = new UserResource($like->user);
        }
        return response($users, 200);
    }

    //-------------Reel Requests---------------
    public function addReelLike($id)
    {
        $reel = Reel::findOrFail($id);
        $reel->likes()->create(['user_id' => '3']);
        return back();
    }

    public function removeReelLike($id)
    {
        $reel = Reel::findOrFail($id);
        $reel->likes()->where('user_id','1')->delete();
        return back();
    }

    public function reelUsersLikes($id)
    {
        $reel = Reel::findOrFail($id);
        foreach ($reel->likes as $like) {
            $users[] = new UserResource($like->user);
        }
        return response($users, 200);
    }
}
