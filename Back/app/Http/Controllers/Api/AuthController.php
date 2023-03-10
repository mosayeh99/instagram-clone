<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
        public function register(Request $request){
                $data = $request->validate([
                    'email' => 'required|email',
                    'name' => 'required',
                    'username'=>'required',
                    'password' => 'required',
                ]);

                $user = User::create([
                    'email' => $data['email'],
                    'name' => $data['name'],
                    'username' => $data['username'],
                    'password' => bcrypt($data['password'])
                ]);

                $token = $user->createToken('apiToken')->plainTextToken;

                $res = [
                    'user' => $user,
                    'token' => $token
                ];
                return response($res, 201);
        }


        public function login(Request $request)
        {
                $data = $request->validate([
                    'email' => 'required|string',
                    'password' => 'required|string'
                ]);

                $user = User::where('email', $data['email'])->first();

                if (!$user || !Hash::check($data['password'], $user->password)) {
                    return response([
                        'msg' => 'incorrect username or password'
                    ], 401);
                }

                $token = $user->createToken('apiToken')->plainTextToken;

                $res = [
                    'user' => $user,
                    'token' => $token
                ];

                return response($res, 201);
        }

        public function logout(Request $request)
        {
                auth()->user()->tokens()->delete();
                return [
                    'message' => 'user logged out'
                ];
        }


//        public function refresh(){
//            return $this->CreateNewToken(auth()->refresh()) ;
//        }

        public function torres(){
            return "Hello torres" ;
        }
    }
