<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class PasswordResetController extends Controller
{
    public function sendEmail(Request $request){
        if(!User::where('email', $request->email)->first()){
            return response()->json(
                ['error' => 'Email not Registered!!'], Response::HTTP_NOT_FOUND
            );
        } else {
            if(DB::table('password_resets')->where('email', $request->email)->first())
                $token = DB::table('password_resets')->where('email', $request->email)->first()->token;
            else {
                $token = str_random(60);
                DB::table('password_resets')->insert([
                    'email' => $request->email,
                    'token' => $token,
                    'created_at' => Carbon::now()
                ]);
            }
            Mail::to($request->email)->send(new ResetPasswordMail($token));
            return response()->json(
                ['data' => 'Reset email sent sucessfully!! /nPlease check mail inbox.'], Response::HTTP_OK
            );
        }
    }
}
