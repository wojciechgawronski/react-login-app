<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\AuthLoginRequest;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\AuthRegisterPostRequest;

class AuthController extends Controller
{
    public function register(AuthRegisterPostRequest $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);


        return response()->json([
            'message' => 'register_ok'
        ], 200);
    }

    public function login(AuthLoginRequest $request) {

        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('cookie_token', $token, 60);
            return response(['token' => $token], Response::HTTP_OK)->withoutCookie($cookie);
        }

        return response(['message' => 'Credentials invalid'], Response::HTTP_UNAUTHORIZED);
    }

    public function userProfile(Request $request) {

    }

    public function logout() {

    }

    public function allUsers() {

    }
}
