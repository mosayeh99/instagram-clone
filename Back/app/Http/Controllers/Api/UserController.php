<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserDetailsResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource ;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function getLoginUser()
    {
        $user = User::findOrFail(auth('api')->user()->id);
        return response(new UserResource($user), 200);
    }

    public function getUserDetailsByUsername($username)
    {
        $user = User::where('username', $username)->first();
        return response(new UserDetailsResource($user), 200);
    }

    public function getUserById($id)
    {
        $user = User::findOrFail($id);
        return response(new UserResource($user));
    }


}
