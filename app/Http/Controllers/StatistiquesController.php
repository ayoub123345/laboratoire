<?php

namespace App\Http\Controllers;

use App\Analyses;
use App\Patient;
use App\User;
use Carbon\Carbon;

class StatistiquesController extends Controller
    {
    public function index () {

        $statistiques = (object)[
            "patients"=>Patient::count(),
            "revenus"=>Analyses::sum("price"),
            "emploiyes"=>User::count(),
            "analyses"=>Analyses::count()
        ];

        $months = [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
        ];

        $currentYear = Carbon::now()->year;

        $valus = [
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 1)
                ->sum('price'),
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 2)
                ->sum('price'),
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 3)
                ->sum('price'),
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 4)
                ->sum('price'),
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 5)
                ->sum('price'),
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 6)
                ->sum('price'),
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 7)
                ->sum('price'),
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 8)
                ->sum('price'),
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 9)
                ->sum('price'),
             Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 10)
                ->sum('price'),
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 11)
                ->sum('price'),
            Analyses::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', 12)
                ->sum('price'),
        ];
        $statistiques->months =$months;
        $statistiques-> valus =$valus;

        return response()->json($statistiques);
    }

}
