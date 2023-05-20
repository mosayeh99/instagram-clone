<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ReelResource;
use App\Models\Reel;
use App\Models\User;
use Illuminate\Http\Request;

class ReelController extends Controller
{
    public function index()
    {
        $reels = Reel::latest()->get();
        return response()->json(ReelResource::collection($reels));
    }

    public function getUserReels($id)
    {
        $user = User::findOrFail($id);
        return response()->json(ReelResource::collection($user->reels));
    }

    public function store(Request $request)
    {
        $file = $request->file('reel');
        $path = $file->store('reels', 'reelsDisk');
        $reel = Reel::create([
            'user_id' => auth('api')->user()->id,
            'caption' => $request->caption,
            'reel_src' => "videos/$path",
        ]);
        return response()->json(["msg"=>'Reel Created successfully'],201);
    }

    public function show($id)
    {
        $reel = Reel::findOrFail($id);
        return response()->json(new ReelResource($reel));
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
        return response()->json(["msg"=>'Reel Updated']);
    }

    public function destroy($id)
    {
        Reel::destroy($id);
        return response()->json(["msg"=>'Reel Deleted'],202);
    }
}
