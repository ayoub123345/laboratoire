<?php

namespace App\Http\Controllers;

use App\Patient;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //

    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'birth_date' => 'required|date',
            'sexe' => 'required',
            'phone' => 'required',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = $request->all();
        if($request->post("birth_date"))
        {
            $data["birth_date"] = Carbon::parse($data['birth_date']);
        }

         $data["password"] = Hash::make($request->input('password'));

        $user = User::create($data);

        return response()->json($user, 201);
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {

            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'birth_date' => 'required|date',
                'sexe' => 'required',
                'phone' => 'required',
                'email' => 'required|string|email|max:255|unique:users,email,'.$user->id,
                'password' => 'nullable|string|min:8|confirmed', // nullable means the field is optional

            ]);


            if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $request->all();
        if($request->post("birth_date"))
        {
            $data["birth_date"] = Carbon::parse($data['birth_date']);
        }

        $data["password"] = Hash::make($request->input('password'));
        $user->update($data);

        return response()->json($user);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response()->json(null, 204);
    }
}
