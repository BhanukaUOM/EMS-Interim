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
            if($role=='CompanyAdmin' || $role=='SchoolAdmin' || $role=='Teacher')
                return json_encode(DB::select('select * from notices'));
            else
                return json_encode(DB::select('select * from notices where (role= ? or role="Both") and active=1', [$role]));
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function byid(Request $request){
        $this->validate($request, [
            'access_token' => 'required',
            'email' => 'required',     
            'id' => 'required'
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
            if($role=='CompanyAdmin' || $role=='SchoolAdmin' || $role=='Teacher')
                return json_encode(DB::select('select * from notices where id = ?', [$request->id]));
            else
            return response()->json(['error' => 'No Permission to Edit Notice'],Response::HTTP_UNPROCESSABLE_ENTITY);
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
            if($role=='CompanyAdmin' || $role=='SchoolAdmin' || $role=='Teacher'){
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


    public function update(Request $request){
        $this->validate($request, [
            'access_token' => 'required',
            'email' => 'required',
            'id' => 'required',
            'notice'  => 'required',
            'role' => 'required'
        ]);

        $token = $request->access_token;
        $email = $request->email;
        $id = $request->id;
        if((json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/login') || (json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/signup')){
            $user = User::where('email', $email)->first();
            if($user==null)
                return response()->json(['error' => 'Email incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
            $role = $user->role;
            $id = $request->id;
            //return $role;
            //return DB::select('select * from notice, readstatus  where readstatus.userId = ?', $id);
            if($role=='CompanyAdmin' || $role=='SchoolAdmin' || $role=='Teacher'){
                $notice = Notice::find($id);
                return $id;
                $notice->notice = $request->notice;
                $notice->role = $request->role;
                $notice->save();

                return response()->json(['data' => 'Successfully Updated']);
            }
            else
                return response()->json(['error' => 'No Permission to update Notice'],Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function delete(Request $request){
        $this->validate($request, [
            'access_token' => 'required',
            'email' => 'required',
            'id' => 'required'
        ]);

        $token = $request->access_token;
        $email = $request->email;
        $id = $request->id;
        if((json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/login') || (json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/signup')){
            $user = User::where('email', $email)->first();
            if($user==null)
                return response()->json(['error' => 'Email incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
            $role = $user->role;
            $id = $request->id;
            //return $role;
            //return DB::select('select * from notice, readstatus  where readstatus.userId = ?', $id);
            if($role=='CompanyAdmin' || $role=='SchoolAdmin' || $role=='Teacher'){
                $notice = Notice::find($id);
                $notice->delete();

                return response()->json(['data' => 'Successfully Deleted']);
            }
            else
                return response()->json(['error' => 'No Permission to delete Notice'],Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function pause(Request $request){
        $this->validate($request, [
            'access_token' => 'required',
            'email' => 'required',
            'id' => 'required'
        ]);

        $token = $request->access_token;
        $email = $request->email;
        $id = $request->id;
        if((json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/login') || (json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/signup')){
            $user = User::where('email', $email)->first();
            if($user==null)
                return response()->json(['error' => 'Email incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
            $role = $user->role;
            $id = $request->id;
            //return $role;
            //return DB::select('select * from notice, readstatus  where readstatus.userId = ?', $id);
            if($role=='CompanyAdmin' || $role=='SchoolAdmin' || $role=='Teacher'){
                $notice = Notice::find($id);
                if($notice -> active == true){
                    $notice -> active = false;
                    $notice->save();
                    return response()->json(['data' => 'Successfully Paused']);
                } else {
                    $notice -> active = true;
                    $notice->save();
                    return response()->json(['data' => 'Successfully Activated']);
                }
            }
            else
                return response()->json(['error' => 'No Permission to delete Notice'],Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function read(Request $request){
        $this->validate($request, [
            'access_token' => 'required',
            'email' => 'required',
            'id' => 'required'
        ]);

        $token = $request->access_token;
        $email = $request->email;
        $id = $request->id;
        if((json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/login') || (json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/signup')){
            $user = User::where('email', $email)->first();
            if($user==null)
                return response()->json(['error' => 'Email incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
            $role = $user->role;
            $id = $request->id;
            //return $role;
            //return DB::select('select * from notice, readstatus  where readstatus.userId = ?', $id);
            if(!($role=='CompanyAdmin' || $role=='SchoolAdmin' || $role=='Teacher')){
                $readstatus = new readstatus;
                $readstatus->userId = $$user->id;
                $readstatus->noticeId = $id;
                $readstatus->save();
                
                return response()->json(['data' => 'Marked as read']);
            }
            else
                return response()->json(['error' => 'No Permission to read Notice'],Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function readStatus(Request $request){
        $this->validate($request, [
            'access_token' => 'required',
            'email' => 'required',
            'id' => 'required'
        ]);

        $token = $request->access_token;
        $email = $request->email;
        $id = $request->id;
        if((json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/login') || (json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/signup')){
            $user = User::where('email', $email)->first();
            if($user==null)
                return response()->json(['error' => 'Email incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
            $role = $user->role;
            $id = $request->id;
            //return $role;
            //return DB::select('select * from notice, readstatus  where readstatus.userId = ?', $id);
            if($role!='CompanyAdmin' || $role!='SchoolAdmin' || $role!='Teacher'){
                $readstatus = readstatus::where(['userId' => $user->id, 'noticeId' => $id])->count();
                if($readstatus>0)
                    return response()->json(['read' => 'true']);
                else
                    return response()->json(['read' => 'false']);
            }
            else
                return response()->json(['error' => 'No Permission to delete Notice'],Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
