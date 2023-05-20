<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\StoriesResource;
use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function StoryIndex(){
        $stories = Story::latest()->get();
        return response()->json(StoriesResource::collection($stories), 200);
    }

    public function StoryStore(Request $request){
         $file = $request->file('storyImg');
         $path = $file->store('stories', 'imagesDisk');
         Story::create([
             'user_id' => auth('api')->user()->id,
             'story_img' => "images/$path"
         ]);
        return response()->json(["msg"=>'Story Created successfully'],201);
    }

    public function StoryDestroy ($id) {
        Story::destroy($id);
        return response()->json(["msg"=>'Story Deleted'],202);
    }

}
