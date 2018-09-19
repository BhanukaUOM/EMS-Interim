<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\signUpRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'signup', 'responsePasswordReset', 'sendPasswordReset', 'get', 'delete']]);
    }

    public function signup(signUpRequest $request)
    {
        User::create($request->all());
        return $this->login($request);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Username or Password is Invalid!'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }

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
            if($role=='CompanyAdmin')
                return json_encode(DB::select('select * from users where (role=="CompanyAdmin" || role=="SchoolAdmin")'));
            else if($role=='SchoolAdmin')
                return json_encode(DB::select('select * from users where role!="CompanyAdmin"'));
            return response()->json(['error' => 'No Access!'],Response::HTTP_UNPROCESSABLE_ENTITY);
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
        if((json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/login') || (json_decode(base64_decode(explode('.', $token)[1]))->iss=='https://ems.aladinlabs.com/api/signup')){
            $user = User::where('email', $email)->first();
            if($user==null)
                return response()->json(['error' => 'Email incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
            $role = $user->role;
            $id = $user->id;
            //return DB::select('select * from notice, readstatus  where readstatus.userId = ?', $id);
            if($role=='CompanyAdmin'){
                $user = User::find($request -> id);
                if(User::where('role', 'CompanyAdmin')->count()<2 && $user -> role == "CompanyAdmin")
                    return response()->json(['error' => 'Need least one Admin!'],Response::HTTP_UNPROCESSABLE_ENTITY);
                $user->delete();

                return response()->json(['data' => 'Successfully Deleted']);
            }
            else
                return response()->json(['error' => 'No Access!'],Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            return response()->json(['error' => 'Token incorrect'],Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}