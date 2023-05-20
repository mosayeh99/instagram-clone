<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class VerifyEmailController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = User::find($request->route('id'));

        if ($user->hasVerifiedEmail()) {
            return redirect('http://localhost:4200/login'); // Redirect to Front_APP
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        return view('emailVerified');
    }
}
