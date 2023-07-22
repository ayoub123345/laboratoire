<?php

namespace App\Http\Controllers;

use App\Patient;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use mPDF;

class PatientController extends Controller
{
    public function index()
    {
        $patients = Patient::all();
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

    public function show($id)
    {
        $P  = Patient::with('analyses')->findOrFail($id);

        return response()->json($P);
    }

    public function getPatienByCin($cin)
    {
        $patient = Patient::where('cin',$cin)->firstOrFail();
        return response()->json($patient);
    }


    public function downloadPdf($id)
    {
        $emp  = Patient::with('analyses')->findOrFail($id);
        $lab = (object)[
          "taxes_number"=>'21564',
          "address"=>'wifak 2 rue 43 nr 17 oulfa casablanca',
          "name"=>'name_lab',
          "phone"=>'0619688778',
        ];
         $pdf =  mPDF::loadView('pdfs.patient_file',compact('emp','lab'));
        return $pdf->download('invoice_#'.$emp->cin.'.pdf');
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
