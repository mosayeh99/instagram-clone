<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function StoryIndex(){
        $story = Story::all();
        return view('storiesTesting',[
            'storyyyyyy' => $story             
        ]);
    }
    public function StoryCreate(){
        return view('storiesTesting');
    }
    public function StoryStore(Request $request){
        $story = new Story;
        $story->user_id = $request->input('user_id');
        if($request->hasfile('story_img')){
            $file = $request->file('story_img');
            $extention = $file->getClientOriginalExtension();
            $file_name = time().'.'.$extention;
            $file->move('StoryUploaded',$file_name);
            $story->story_img = $file_name;
        }
        $story->save();        
        return redirect()->back()->with('status','Shared Successfull ');
    }
    public function StoryDestroy ($id) {
        $story = Story::find($id);
        $story->delete();
        // return redirect()->back()->with('status','Shared Successfull ');
        return view('storiesTesting');
    }

}
