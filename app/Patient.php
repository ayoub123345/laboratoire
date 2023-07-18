<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    //
    protected $fillable = [
        'cin',
        'firstname',
        'lastname',
        'birth_date',
        'adresse',
        'sexe',
        'phone',
    ];
}
