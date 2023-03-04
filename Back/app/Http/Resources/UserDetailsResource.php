<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'userNum' => $this->id,
            'name' => $this->name,
            'username' => $this->username,
            'imageSrc' => asset($this->profile_img),
            'posts' => PostResource::collection($this->posts()->orderBy('id', 'desc')->get()),
            'reels' => ReelResource::collection($this->reels()->orderBy('id', 'desc')->get()),
            'saves' => $this->saves()->orderBy('id', 'desc')->get(),
        ];
    }
}
