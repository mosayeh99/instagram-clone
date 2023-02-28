<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Post;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return ("Hello From user controller") ;
    }

    public function store($request)
    {
        $data = $request->all();

        $title = $data['title'];
        $description = $data['description'];
        $userId = $data['post_creator'];

        //store the form data inside the database
        $post = Post::create([
            'title' => $title,
            'description' => $description,
            'user_id' => $userId,
        ]);

        return $post;
    }

}
