<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notice;
use App\readstatus;
use App\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;

class NoticeController extends Controller
{
    public function getNotice(Request $request){
        $token = $request->access_token;
        $email = $request->email;
        if((json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/login') || (json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/signup')){
            $user = User::where('email', $email)->first();
            return $user->role;
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
