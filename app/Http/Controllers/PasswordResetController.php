<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;

class PasswordResetController extends Controller
{
    public function sendEmail(Request $request){
        if(!User::where('email', $request->email)->first()){
            return response()->json(
                ['error' => 'Email not Registered!!'], Response::HTTP_NOT_FOUND
            );
        } else {
            Mail::to($request->email)->send(new ResetPasswordMail);
            return response()->json(
                ['data' => 'Reset email sent sucessfully!! \nPlease check mail inbox.'], Response::HTTP_OK
            );
        }
    }
}
