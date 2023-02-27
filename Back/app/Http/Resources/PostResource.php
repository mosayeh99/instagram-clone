<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
            'likesCount' => $this->likes()->count(),
            'commentsCount' => $this->comments()->count(),
            'createdSince' => Carbon::parse($this->created_at)->shortAbsoluteDiffForHumans(),
        ];
    }
}
