<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Notifications\PostNotificationResource;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function getLastMonthNotification()
    {
        $user = User::findOrFail(auth('api')->user()->id);
        if ($user->notifications->count()) {
            foreach ($user->notifications->where('created_at', '>', now()->subMonth()) as $notification) {
                if ($notification->type === 'App\Notifications\PostCreated') {
                    $post = Post::findOrFail($notification->data['post_id']);
                    $note = new PostNotificationResource($post);
                }
                $thisMonthNotification[] = $note;
            }
            return response($thisMonthNotification, 200);
        }
        return response([], 204);
    }

    public function isThereUnreadNotification()
    {
        $user = User::findOrFail(auth('api')->user()->id);
        if ($user->unreadNotifications->count() > 0){
            return response()->json(["hasNewNote"=>true]);
        }
        return response()->json(["hasNewNote"=>false]);
    }

    public function markAllNotificationAsRead()
    {
        $user = User::findOrFail(auth('api')->user()->id);
        $user->unreadNotifications->markAsRead();
    }
}
