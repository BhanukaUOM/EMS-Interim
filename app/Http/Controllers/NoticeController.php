<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notice;
use App\readstatus;
use App\User;
use Tymon\JWTAuth\Facades\JWTAuth;

class NoticeController extends Controller
{
    public function getNotice(Request $request){
        $token = $request->access_token;
        //$user = User::where('auth'. $token);
        return JWTAuth::decode($token);
    }
}
