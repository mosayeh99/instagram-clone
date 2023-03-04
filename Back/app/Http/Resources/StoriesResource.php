<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StoriesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'storyCreator' => new UserResource($this->user),
            'storySrc' => asset($this->story_img),
            'storyNum' => $this->id,
            'createdSince' => Carbon::parse($this->created_at)->shortAbsoluteDiffForHumans(),
        ];
    }
}
