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
    //--------------------Post Comments---------------------
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
        $comment = $post->comments()->create([
            'user_id' => auth('api')->user()->id,
            'body' => $request->body,
            'replied_comment_id' => $request->repliedCommentId,
        ]);
        return response(new CommentResource($comment), 201);
    }

    public function postCommentsReplies($id)
    {   $post = Post::findOrFail($id);
        $replies = $post->comments()->whereNotNull('replied_comment_id')->get();
        foreach ($replies as $reply){
            $commentReplies[] = new CommentResource($reply);
        }
        return response($commentReplies, 200);
    }

    //--------------------Reel Comments---------------------
    public function allReelComments($id)
    {
        $reel = Reel::findOrFail($id);
        foreach ($reel->comments->whereNull('replied_comment_id') as $comment){
            $comments[] = new CommentResource($comment);
        }
        return response($comments, 200);
    }

    public function storeReelComment(Request $request, $id)
    {
        $reel = Reel::findOrFail($id);
        $comment = $reel->comments()->create([
            'user_id' => auth('api')->user()->id,
            'body' => $request->body,
            'replied_comment_id' => $request->repliedCommentId,
        ]);
        return response(new CommentResource($comment), 201);
    }

        public function reelCommentsReplies($id)
    {
        $reel = Reel::findOrFail($id);
        $replies = $reel->comments()->whereNotNull('replied_comment_id')->get();
        foreach ($replies as $reply){
            $commentReplies[] = new CommentResource($reply);
        }
        return response($commentReplies, 200);
    }
}
