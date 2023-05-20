<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FollowerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'userNum' => $this->user->id,
            'name' => $this->user->name,
            'username' => $this->user->username,
            'imageSrc' => asset($this->user->profile_img)
        ];

    }
}
