<?php

namespace App\Http\Controllers;

use App\Constants\AppConstants;
use App\Models\SchoolConfiguration;
use App\Models\Student;
use App\Models\StudentBehaviourRecord;
use App\Models\StudentCaRecord;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    //

    public function resultIndex()
    {

        return inertia("Result/Index", []);
    }

    public function studentList(Request $request)
    {
        $class = $request->class;
        if (in_array($class, AppConstants::AVAILABLE_CLASSES)) {
            $studentList = Student::where("current_class", $class)
                ->where("status", "active")
                ->get();
            return $studentList;
        }
    }

    public function fetchStudentResult(Request $request)
    {

        $class = $request->class;
        $session = $request->session;
        $term = $request->term;
        $resultType =  $request->type;
        $pin = $request->pin;
        $student_id = $request->student_id;
        //CHECK PIN



        if ($resultType == "termly") {
            $studentCaEntries =  StudentCaRecord::where("student_id", $student_id)
                ->where("class", $class)
                ->where("session", $session)
                ->where("term", $term);
            $studentData = Student::find($student_id);
            $schoolConfig = SchoolConfiguration::find(1);
            $student_behaviour = StudentBehaviourRecord::where("student_id", $student_id)
                ->where("class", $class)
                ->where("session", $session)
                ->where("term", $term)
                ->first();
        }
    }


    public static function getClassList(string $class) {}
}
