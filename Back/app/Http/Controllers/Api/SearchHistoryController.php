<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SearchHistoryResource;
use App\Models\SearchHistory;
use App\Models\User;
use Illuminate\Http\Request;

class SearchHistoryController extends Controller
{
    public function store($id){
        $history =SearchHistory::Create([
            'user_id_self' => '1' ,
            'user_id_other' => $id ,
        ]);
        return response($history,200);
            
    }

    public function search($name){
        $users= User::where("username","like","%".$name."%")->get();
        if(!$name){
            $users='';
        }
        foreach($users as $user){
            $searchedUser[]=new SearchHistoryResource($user);
        }
        return response($searchedUser,200);
    }

    public function searchHistory($id){
        $historyUsers= SearchHistory::select('user_id_other')->where('user_id_self', '=', $id)->get(); 
        $names=array();
        foreach($historyUsers as $historyUser){
            $name=$historyUser->user;
            $names[]=$name;
        }
              return response($names,200);
    }



    public function deleteHistory($id){
        SearchHistory::where('user_id_other', '=', $id)->delete();
        return response("History Deleted Successfully");
    }


    public function deleteAllHistory(){
        SearchHistory::truncate();
        return response(" All History Deleted Successfully");
    }
}
