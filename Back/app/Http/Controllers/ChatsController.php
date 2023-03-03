<?php

namespace App\Http\Controllers;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\MessageSent;


class ChatsController extends Controller
{
// app/Http/Controllers/ChatsController.php



public function __construct()
{
//   $this->middleware('auth');
}

/**
 * Show chats
 *
 * @return \Illuminate\Http\Response
 */
public function index()
{
  return view('welcome');
}

/**
 * Fetch all messages
 *
 * @return Message
 */
public function fetchMessages()
{
  return Message::with('user')->get();
}

/**
 * Persist message to database
 *
 * @param  Request $request
 * @return Response
 */
public function sendMessage(Request $request)
{
//   $user = User::find(1);
  $user = User::find($request->input('user_id'));
  $message = $user->messages()->create([
    'message' => $request->input('message')


  ]);
//   $user = User::find(1);
//   $message = Message::create([
//     'user_id' => $request->input('id'),
//     'message' => $request->input('message')


//   ]);
broadcast(new MessageSent($user, $message))->toOthers();

  return $message ;

  return ['status' => 'Message Sent!'];
}
public function reciveMessage(Request $request){
    $user = User::find($request->input('user_id'));

    return
    $user->messages()->where("created_at",">",$request->input('created_at'))->get();
}

public function getUsers(){
    return User::all();
}

}
