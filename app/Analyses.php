<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Analyses extends Model
{

    protected $fillable = [
        "name",
        "status",
        "patient_id",
        "price",
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

}
