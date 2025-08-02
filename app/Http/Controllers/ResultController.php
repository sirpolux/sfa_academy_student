<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResultController extends Controller
{
    //

    public function resultIndex(){
        return inertia("Result/Index", [

        ]);
    }

    public function studentList(){
        
    }
}
