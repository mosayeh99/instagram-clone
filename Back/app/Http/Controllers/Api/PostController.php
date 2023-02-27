<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\PostImage;
use App\Models\Reel;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        $reels = Reel::all();
        return view('index', compact('posts', 'reels'));
    }

    public function store(Request $request)
    {
        $file = $request->file('images');
        foreach ($file as $image){
            $path = $image->store('posts', 'imagesDisk');
            $images[] = "images/$path";
        }
        Post::create([
            'user_id' => '1',
            'caption' => $request->caption,
            'img_src' => $images
        ]);
        return response('Post Created successfully',201);
    }

    public function show($id)
    {
        $post = Post::findOrFail($id);
        return response(new PostResource($post), 200);
    }

    public function edit($id)
    {
        $post = Post::findOrFail($id);
        return response(new PostResource($post), 200);
    }

    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $post->update([
            'caption' => $request->caption,
        ]);
        return response('Post Updated',200);
    }

    public function destroy($id)
    {
        Post::destroy($id);
        return response('Post Deleted',200);
    }
}
