<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
//        return parent::toArray($request);
        return [
            'commentCreator' => new UserResource($this->user),
            'comment' => $this->body,
            'likesCount' => $this->likes()->count(),
            'createdSince' => Carbon::parse($this->created_at)->shortAbsoluteDiffForHumans(),
        ];
    }
}
