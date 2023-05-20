<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostWithCommentsResource;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->get();
        return response()->json(PostResource::collection($posts));
    }

    public function getUserPosts($id)
    {
        $user = User::findOrFail($id);
        return response()->json(PostResource::collection($user->posts));
    }

    public function store(Request $request)
    {
        $file = $request->file('images');
        foreach ($file as $image){
            $path = $image->store('posts', 'imagesDisk');
            $images[] = "images/$path";
        }
        $post = Post::create([
            'user_id' => auth('api')->user()->id,
            'caption' => $request->caption,
            'img_src' => $images
        ]);
//        Mail::to(auth('api')->user())->send(new PostCreated($post));
        $followers = auth('api')->user()->followers;
        foreach($followers as $follower) {
            $user = $follower->user;
            $usersToNotified[] = $user;
        }
        Notification::send($usersToNotified, new \App\Notifications\PostCreated($post));
        return response()->json(["msg"=>'Post Created successfully'], 201);
    }

    public function show($id)
    {
        $post = Post::findOrFail($id);
        return response()->json(new PostWithCommentsResource($post));
    }

//    public function edit($id)
//    {
//        $post = Post::findOrFail($id);
//        return response(new PostResource($post), 200);
//    }

    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $post->update([
            'caption' => $request->caption,
        ]);
        return response()->json(["msg"=>'Post Updated']);
    }

    public function destroy($id)
    {
        Post::destroy($id);
        return response()->json(["msg"=>'Post Deleted'],202);
    }
}
