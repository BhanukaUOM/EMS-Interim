<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;

class PasswordResetController extends Controller
{
    public function sendEmail(Request $request){
        if(User::where('email', $email)->first()==0){
            return response()->json(
                ['error' => 'Email not Registered!!'], Response::HTTPNOTFOUND
            );
        }
    }
}
