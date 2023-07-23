<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('user-profile', 'AuthController@userProfile');

});


Route::group(['middleware' => ['auth_jwt', 'api']], function () {
    Route::resource('patients', PatientController::class);
    Route::get('patients/cin/{id}', "PatientController@getPatienByCin");

    Route::get('statistiques', "StatistiquesController@index");

    Route::resource('users', UserController::class);
    Route::resource('analyses', AnalysesController::class);
});

Route::get('patients/pdf/{id}', "PatientController@downloadPdf");
