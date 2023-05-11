<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request) {
        $email = $request->email;
        $password = $request->password;

        if ($email == 'admin@com' && $password == '1234') {
            return response()->json([
                'email' => $email,
                'password' => $request->password,
                'token' => 'asdf'
            ], 200);
        }

        return response()->json([
            'message' => 'Unauthorzed'
        ], 401);
    }
}
