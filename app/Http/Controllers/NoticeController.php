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
        return (Json.parse(base64_decode(explode('.', $token)[1]))->iss=='https:\/\/ems.aladinlabs.com\/api\/login')?true:false;
    }
}
