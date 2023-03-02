<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'reelCreator' => new UserResource($this->user),
            'reelNum' => $this->id,
            'caption' => $this->caption,
            'reelSrc' => asset($this->reel_src),
            'likesCount' => $this->likes()->count(),
            'commentsCount' => $this->comments()->count(),
            'likeStatus' => $this->likes->where('user_id', auth('api')->user()->id)->count(),
            'saveStatus' => $this->saves->where('user_id', auth('api')->user()->id)->count(),
            'createdSince' => Carbon::parse($this->created_at)->shortAbsoluteDiffForHumans(),
        ];
    }
}
