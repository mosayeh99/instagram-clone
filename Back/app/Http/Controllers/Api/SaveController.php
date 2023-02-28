<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Http\Resources\ReelResource;
use App\Models\Post;
use App\Models\Reel;
use App\Models\User;

class SaveController extends Controller
{
    public function addPostToSaved($id)
    {
        $post = Post::findOrFail($id);
        $post->saves()->create(['user_id' => '3']);
        return response('Post Added To Saved', 201);
    }

    public function removePostFromSaved($id)
    {
        $post = Post::findOrFail($id);
        $post->saves()->where('user_id', '1')->delete();
        return response('Post Removed From Saved', 200);
    }

    public function savedPosts($id)
    {
        $user = User::findOrFail($id);
        foreach ($user->saves->where('saveable_type','App\Models\Post') as $save){
            $posts[] = new PostResource($save->saveable);
        }
        return response($posts, 200);
    }

    public function addReelToSaved($id)
    {
        $reel = Reel::findOrFail($id);
        $reel->saves()->create(['user_id' => '3']);
        return response('Reel Added To Saved', 201);
    }

    public function removeReelFromSaved($id)
    {
        $reel = Reel::findOrFail($id);
        $reel->saves()->where('user_id', '1')->delete();
        return response('Reel Removed From Saved', 200);
    }
    public function savedReels($id)
    {
        $user = User::findOrFail($id);
        foreach ($user->saves->where('saveable_type','App\Models\Reel') as $save){
            $reels[] = new ReelResource($save->saveable);
        }
        return response($reels, 200);
    }
}
