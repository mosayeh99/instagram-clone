<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\StoriesResource;
use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function StoryIndex(){        
        $AllStories = Story::all();
        foreach ($AllStories as $story){
            $stories[] = new StoriesResource($story);
        }
        return response($stories , 200);
    }
    
    public function StoryStore(Request $request){
        $story = new Story;
        $story->user_id = $request->input('user_id');
        if($request->hasfile('story_img')){
            $file = $request->file('story_img');
            $extention = $file->getClientOriginalExtension();
            $file_name = time().'.'.$extention;
            $file->move('imagesDisk',$file_name);
            $story->story_img = $file_name;
        }
        $story->save();
        // Story::create([
        //         'user_id' => '35',
        //         'story_img' => "images/$file",
        //     ]);      
        // return redirect()->back()->with('status','Shared Successfull ');

        // $file = $request->file('story_img');
        // $path = $file->store('Stories', 'imagesDisk');
        // Story::create([
        //     'user_id' => '35',
        //     'story_img' => "images/$path",
        // ]);


        // $file = $request->file('story_img');
        // foreach ($file as $story){
        //     $path = $story->store('posts', 'imagesDisk');
        //     $images[] = "images/$path";
        // }
        // Story::create([
        //     'user_id' => '35',
        //     'img_src' => $images
        // ]);
        
        return response('Story Done Created successfully',201);

    }
    public function StoryDestroy ($id) {
        $story = Story::find($id);
        $story->delete();
        return redirect()->back()->with('status','Deleted Successfull ');
        // return view('storiesTesting',[
        //     'storyyyyyy' => $story             
        // ]);
    }

}
