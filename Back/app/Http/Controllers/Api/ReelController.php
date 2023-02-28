<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ReelResource;
use App\Models\Reel;
use App\Models\User;
use Illuminate\Http\Request;

class ReelController extends Controller
{
    public function index($id)
    {
        $user = User::findOrFail($id);
        foreach ($user->reels as $reel){
            $reels[] = new ReelResource($reel);
        }
        return response($reels, 200);
    }

    public function store(Request $request)
    {
        $file = $request->file('reel');
        $path = $file->store('reels', 'reelsDisk');
        $reel = Reel::create([
            'user_id' => '1',
            'caption' => $request->caption,
            'reel_src' => "videos/$path",
        ]);
        return response('Reel Created successfully',201);
    }

    public function show($id)
    {
        $reel = Reel::findOrFail($id);
        return response(new ReelResource($reel), 200);
    }

//    public function edit($id)
//    {
//        $reel = Reel::findOrFail($id);
//        return response(new ReelResource($reel), 200);
//    }

    public function update(Request $request, $id)
    {
        $reel = Reel::findOrFail($id);
        $reel->update([
            'caption' => $request->caption,
        ]);
        return response('Reel Updated',200);
    }

    public function destroy($id)
    {
        Reel::destroy($id);
        return response('Reel Deleted',200);
    }
}
