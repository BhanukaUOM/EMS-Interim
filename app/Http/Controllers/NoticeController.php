<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notice;
use App\readstatus;
use App\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class NoticeController extends Controller
{
    public function getNotice(Request $request){
        $token = $request->access_token;
        $email = $request->email;
        if((json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/login') || (json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/signup')){
            $user = User::where('email', $email)->first();
            if($user==null)
                return response()->json(['error' => 'Email incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
            $role = $user->role;
            $id = $user->id;
            //return DB::select('select * from notice, readstatus  where readstatus.userId = ?', $id);
            return DB::select('select * from notice');
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
