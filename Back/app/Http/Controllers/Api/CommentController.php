<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Reel;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function allPostComments($id)
    {
        $post = Post::findOrFail($id);
        foreach ($post->comments as $comment){
            $comments[] = new CommentResource($comment);
        }
        return response($comments, 200);
    }

    public function storePostComment(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $post->comments()->create([
            'body' => $request->body,
            'user_id' => '1'
        ]);
        return back();
    }

    public function allReelComments($id)
    {
        $reel = Reel::findOrFail($id);
        foreach ($reel->comments as $comment){
            $comments[] = new CommentResource($comment);
        }
        return response($comments, 200);
    }

    public function storeReelComment(Request $request, $id)
    {
        $reel = Reel::findOrFail($id);
        $reel->comments()->create([
            'body' => $request->body,
            'user_id' => '3'
        ]);
        return back();
    }


}
