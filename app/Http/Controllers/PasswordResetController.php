<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PasswordResetController extends Controller
{
    public function sendEmail(Request $request){
        if(!validateEmail($request->email)){
            return response()->json(
                ['error' => 'Email not Registered!!'], Response::HTTPNOTFOUND
            );
        }
    }

    public function validateEmail($email){
        return !!User::where('email', $email)->first();
    }
}
