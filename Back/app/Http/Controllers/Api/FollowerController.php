<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FollowerResource;
use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class FollowerController extends Controller
{
    public function followerstore( $id){
        $history =Follower::Create([
            'user_id_self' => auth('api')->user()->id ,
            'user_id_other' => $id ,
        ]);
        return response($history,200);
    }

    public function followernumber(){
        $followersNumber =Follower::Select(Follower::raw('COUNT(user_id_other) as count'))->Where('user_id_other','=',auth('api')->user()->id)->groupBy('user_id_other')->get();
        return response($followersNumber,200 );
    }

    public function followingnumber(){
        $followingsNumber =Follower::Select(Follower::raw('COUNT(user_id_self) as count'))->Where('user_id_self','=',auth('api')->user()->id)->groupBy('user_id_self')->get();
        return response($followingsNumber,200 );
    }

    public function unfollow($id){
         Follower::where('user_id_other', '=', $id)->delete();        
        return response("deleted successfully" );
    }

    public function userFollowers(){
        // $id=auth('api')->user()->id;
        $followers= Follower::select('user_id_self')->where('user_id_other', '=', auth('api')->user()->id)->get(); 
        $names=array();
        foreach($followers as $follower){
            $name=$follower->user;
            $names[]=$name;
        }
        return response($names,200);
    }

    public function userFollowings(){
        // $id=auth('api')->user()->id;
        $followings= Follower::select('user_id_other')->where('user_id_self', '=', auth('api')->user()->id)->get(); 
        $names=array();
        foreach($followings as $following){
            $name=$following->user;
            $names[]=$name;
        }

        return response($names,200);
    }
}