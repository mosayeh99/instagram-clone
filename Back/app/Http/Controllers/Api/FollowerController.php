<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FollowerResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\UserResource;
use App\Models\Follower;
use App\Models\User;

class FollowerController extends Controller
{
    public function followerstore( $id){
        $history =Follower::Create([
            'user_id_self' => auth('api')->user()->id,
            'user_id_other' => $id ,
        ]);
        return response()->json($history,200);
    }

    public function followernumber(){
        $followersNumber = auth('api')->user()->followers()->count();
        return response()->json($followersNumber);
    }

    public function followingnumber(){
        $followingsNumber = auth('api')->user()->followings()->count();
        return response()->json($followingsNumber);
    }

    public function unfollow($id){
         Follower::where('user_id_other', $id)->delete();
        return response("deleted successfully" );
    }

    public function userFollowers()
    {
        $user = auth('api')->user();
        return response()->json(FollowerResource::collection($user->followers));
    }

    public function userFollowings()
    {
        $user = auth('api')->user();
        return response()->json(FollowerResource::collection($user->followings));
    }
}
