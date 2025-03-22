<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    // User Registration Method
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|max:12',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password), // Password is hashed
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'message' => 'User Registered Successfully',
            'user' => $user,
            'token' => $token,
        ], 201);
    }

    // User Login Method
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:8|max:12',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['error' => 'Invalid email'], 401);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Invalid password'], 401);
        }

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'message' => 'User Logged In Successfully',
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    // User Dashboard Method (Secured)
    public function dashboard(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            if (!$user) {
                return response()->json(['error' => 'User not found'], 404);
            }

            return response()->json([
                'message' => 'Welcome to your Dashboard',
                'user' => $user
            ], 200);

        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['error' => 'Token Expired, please login again.'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['error' => 'Token Invalid, please try again.'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['error' => 'Token Not Provided'], 401);
        }
    }

    // User Logout Method
    public function logout(Request $request)
    {
        try {
            JWTAuth::parseToken()->invalidate();

            return response()->json([
                'message' => 'User Logged Out Successfully'
            ], 200);

        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['error' => 'Invalid Token, unable to logout.'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['error' => 'Token Not Provided, logout failed.'], 401);
        }
    }
}
