<?php

namespace App\Http\Controllers;

use App\Analyses;
use App\Patient;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AnalysesController extends Controller
{
    //

    public function index()
    {
        $analysesWithPatient = Analyses::with('patient')->get();

        return response()->json($analysesWithPatient);

     }

    public function store(Request $request)
    {

        $patient =   $request->get('patient');
        $anlayses =   $request->get('anlayses');


        $validator = Validator::make(array_merge($patient,$anlayses), [
            'cin' => 'required',
            'name' => 'required',
            'status' => 'required',
            'price' => 'required',
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
         if($request->post("birth_date"))
        {
            $patient["birth_date"] = Carbon::parse($patient['birth_date']);
        }

        $patient_object = new Patient();

        if(@$patient['id'])
        {
            $patient_object = Patient::where("id" ,$patient['id'])->where('cin',$patient['cin'])->first();
             if($patient_object)
            {
                $patient_object->update($patient);
            }
            else
            {
                $patient_object = Patient::create($anlayses);
            }
        }else
        {
            $patient_object = Patient::create($patient);
        }

         $anlayses['patient_id'] = $patient_object->id;
        $Analyses_object = Analyses::create($anlayses);

        return response()->json($Analyses_object, 201);
    }

    public function show($id)
    {

        $analysisWithPatient = Analyses::with('patient')->find($id);

        return response()->json($analysisWithPatient);

    }



    public function update(Request $request,   $id)
    {

        $patient =   $request->get('patient');
        $anlayses =   $request->get('anlayses');


        $validator = Validator::make(array_merge($patient,$anlayses), [
            'cin' => 'required',
            'name' => 'required',
            'status' => 'required',
            'price' => 'required',
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
        if($request->post("birth_date"))
        {
            $patient["birth_date"] = Carbon::parse($patient['birth_date']);
        }

        $patient_object = new Patient();

        if(@$patient['id'])
        {
            $patient_object = Patient::where("id" ,$patient['id'])->where('cin',$patient['cin'])->first();
            if($patient_object)
            {
                $patient_object->update($patient);
            }
            else
            {
                $patient_object = Patient::create($anlayses);
            }
        }else
        {
            $patient_object = Patient::create($patient);
        }

        $anlayses['patient_id'] = $patient_object->id;


        $Analyses_object =Analyses::find($id)->update($anlayses);

        return response()->json($Analyses_object, 201);
    }

    public function destroy(Analyses $Analyses)
    {
        $Analyses->delete();

        return response()->json(null, 204);
    }
}
