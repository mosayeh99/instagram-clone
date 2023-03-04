<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostWithCommentsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'postCreator' => new UserResource($this->user),
            'postNum' => $this->id,
            'caption' => $this->caption,
            'images' => $this->img_src,
            'comments' => CommentResource::collection($this->comments()->orderBy('id', 'desc')->where('replied_comment_id', null)->get()),
            'likesCount' => $this->likes()->count(),
            'likeStatus' => $this->likes->where('user_id', auth('api')->user()->id)->count(),
            'saveStatus' => $this->saves->where('user_id', auth('api')->user()->id)->count(),
            'createdSince' => Carbon::parse($this->created_at)->diffForHumans(),
        ];
    }
}
