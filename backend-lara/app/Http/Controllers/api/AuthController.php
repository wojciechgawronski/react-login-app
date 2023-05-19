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
use App\Http\Resources\UserShowResource;

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
            $user = User::where('email', $request->email)->first();

            $authToken = $user->createToken('auth-token')->plainTextToken;

            return response([
                'token' => $authToken,
                'user' =>  UserShowResource::make($user),
            ], Response::HTTP_OK);
        }

        return response()->json([
            "message" => "The given data is invalid.",
            "errors" => [
                "message" => [
                    "Invalid credentials (password or email)."
                ],
            ],
        ], 401);
    }

    public function userProfile(Request $request) {

    }

    public function logout() {

    }

    public function allUsers() {

    }
}
