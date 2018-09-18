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
    public function get(Request $request){
        $this->validate($request, [
            'access_token' => 'required',
            'email' => 'required'
        ]);

        $token = $request->access_token;
        $email = $request->email;
        if((json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/login') || (json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/signup')){
            $user = User::where('email', $email)->first();
            if($user==null)
                return response()->json(['error' => 'Email incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
            $role = $user->role;
            $id = $user->id;
            //return DB::select('select * from notice, readstatus  where readstatus.userId = ?', $id);
            if($role='SuperAdmin' || $role='SchoolAdmin' || $role='Teacher')
                return DB::select('select * from notices');
            else
                return DB::select('select * from notices where (role= ? or role="Both") and active=1', [$role]);
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function add(Request $request){
        $this->validate($request, [
            'access_token' => 'required',
            'email' => 'required',
            'notice'  => 'required',
            'role' => 'required'
        ]);

        $token = $request->access_token;
        $email = $request->email;
        if((json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/login') || (json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/signup')){
            $user = User::where('email', $email)->first();
            if($user==null)
                return response()->json(['error' => 'Email incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
            $role = $user->role;
            $id = $user->id;
            //return $role;
            //return DB::select('select * from notice, readstatus  where readstatus.userId = ?', $id);
            if($role='SuperAdmin' || $role='SchoolAdmin' || $role='Teacher'){
                $notice = new Notice;
                $notice->notice = $request->notice;
                $notice->role = $request->role;
                $notice->save();

                return response()->json(['data' => 'Successfully Added']);
            }
            else
                return response()->json(['error' => 'No Permission to Add Notice'],Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
