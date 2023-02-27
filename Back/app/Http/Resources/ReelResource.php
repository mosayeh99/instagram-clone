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
            'caption' => $this->caption,
            'reel' => asset($this->reel_src),
            'likesCount' => $this->likes()->count(),
            'commentsCount' => $this->comments()->count(),
            'createdSince' => Carbon::parse($this->created_at)->shortAbsoluteDiffForHumans(),
        ];
    }
}
