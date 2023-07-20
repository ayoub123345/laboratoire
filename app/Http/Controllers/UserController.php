<?php

namespace App\Http\Controllers;

use App\Patient;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //

    public function index()
    {
        $patients = User::all();
        return response()->json($patients);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cin' => 'required',
            'firstname' => 'required',
            'lastname' => 'required',
            'birth_date' => 'required|date',
            'adresse' => 'required',
            'sexe' => 'required',
            'phone' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = $request->all();
        if($request->post("birth_date"))
        {
            $data["birth_date"] = Carbon::parse($data['birth_date']);
        }

        $patient = Patient::create($data);

        return response()->json($patient, 201);
    }

    public function show(Patient $patient)
    {
        return response()->json($patient);
    }

    public function update(Request $request, Patient $patient)
    {

        $validator = Validator::make($request->all(), [
            'cin' => 'required',
            'firstname' => 'required',
            'lastname' => 'required',
            'birth_date' => 'required|date',
            'adresse' => 'required',
            'sexe' => 'required',
            'phone' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $patient->update($request->all());

        return response()->json($patient);
    }

    public function destroy(Patient $patient)
    {
        $patient->delete();

        return response()->json(null, 204);
    }
}
