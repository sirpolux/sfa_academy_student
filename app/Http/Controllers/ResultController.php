<?php

namespace App\Http\Controllers;

use App\Constants\AppConstants;
use App\Models\ResultPin;
use App\Models\SchoolConfiguration;
use App\Models\Student;
use App\Models\StudentBehaviourRecord;
use App\Models\StudentCaRecord;
use App\Models\SubjectSummaryAveHighestLowest;
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

        $pin_term = $resultType=="annual"?"third":$term;

        $pin_status = $this->verifyPin($pin_term, $session, $pin, $student_id);

        if($pin_status['status']==false){
            return redirect()->route('result.index')->withErrors($pin_status);
        }
        if ($resultType == "termly") {
            $studentCaEntries =  StudentCaRecord::where("student_id", $student_id)
                ->where("class", $class)
                ->where("session", $session)
                ->where("term", $term);
            $studentData = Student::find($student_id);
            $schoolConfig = SchoolConfiguration::find(1);
            $studentBehaviour = StudentBehaviourRecord::where("student_id", $student_id)
                ->where("class", $class)
                ->where("session", $session)
                ->where("term", $term)
                ->first();

            $subjectHighestLowest = SubjectSummaryAveHighestLowest::where('class',$class)
                ->where('term', $term)
                ->where('session', $session)
                ->select('subject', 'form', 'subj_ave', 'subj_total', 'highest_score','lowest_score', 'total_students')
                ->get()
            ;
        }

    }

    public function verifyPin($term, $session, $pin, $student_id){
        $pin_exists = ResultPin::where("pin", $pin)->exists();
        if(!$pin_exists){
            return [
                "staus"=>false,
                "msg"=>"Invalid Pin"
                
            ];
        }

        $pin_data = ResultPin::where("pin", $pin)->first();
        if($pin_data->status==1){
            if($pin_data->used_by!=$student_id){
                return [
                    "staus"=>false,
                    "msg"=>"This pin has been used for another student"
                ];
            }
            if($pin_data->term == $term && $pin_data->session == $session){
                return [
                    "staus"=>true,
                    "msg"=>"Available of current Student"
                ];
            }
        }
        if($pin_data->status ==0){
            return [
                "staus"=>true,
                "msg"=>"Available of usage. Not tied to any student"
            ];
        }

        return [
            "staus"=>false,
            "msg"=>"An Error occured while processing the requests
            "
        ];
    }


    public static function getClassList(string $class) {}
}
