<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
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

    public function login(Request $request) {

    }

    public function userProfile(Request $request) {

    }

    public function logout() {

    }

    public function allUsers() {

    }
}
