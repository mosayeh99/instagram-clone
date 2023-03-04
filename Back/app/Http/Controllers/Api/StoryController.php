<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\StoriesResource;
use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function StoryIndex(){
        $AllStories = Story::orderBy('id', 'desc')->get();
        foreach ($AllStories as $story){
            $stories[] = new StoriesResource($story);
        }
        return response($stories , 200);
    }

    public function StoryStore(Request $request){
         $file = $request->file('storyImg');
         $path = $file->store('stories', 'imagesDisk');
         Story::create([
             'user_id' => auth('api')->user()->id,
             'story_img' => "images/$path"
         ]);
        return response(["msg"=>'Story Created successfully'],201);
    }

    public function StoryDestroy ($id) {
        $story = Story::destroy($id);
        return response(["msg"=>'Story Deleted'],200);
    }

}
