<?php

namespace App\Http\Controllers;

use App\Constants\AppConstants;
use App\Models\AnnualReport;
use App\Models\ResultPin;
use App\Models\ResumptionClosingDates;
use App\Models\SchoolConfiguration;
use App\Models\SessionSummary;
use App\Models\Student;
use App\Models\StudentBehaviourRecord;
use App\Models\StudentCaRecord;
use App\Models\SubjectSummary;
use App\Models\SubjectSummaryAveHighestLowest;
use App\Services\ResultService;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    //

    public function resultIndexTermly()
    {

        $studentList = Student::where("status", "active")
        ->orderBy("class", 'desc')
        ->get();

        return inertia("Result/TermlyResultIndex", [
            "availableClasses"=>AppConstants::AVAILABLE_CLASSES,
            "studentList"=>$studentList,
        ]);
    }

    public function resultIndexAnnual(){
        return inertia("Result/AnnualResultIndex", [
            "availableClasses"=>AppConstants::AVAILABLE_CLASSES
        ]);   
    }


    public function studentList(Request $request)
    {
        $class = $request->class;
        if (in_array($class, AppConstants::AVAILABLE_CLASSES)) {
            $studentList = Student::where("current_class", $class)
                ->where("status", "active")
                ->get();
            
        }
    }

    public function fetchStudentResult(Request $request, ResultService $resultService)
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
        $studentData = Student::find($student_id);
        $schoolConfig = SchoolConfiguration::find(1);
        if ($resultType == "termly") {
            $studentCaEntries =  StudentCaRecord::where("student_id", $student_id)
                ->where("class", $class)
                ->where("session", $session)
                ->where("term", $term);
     
            $studentBehaviour = StudentBehaviourRecord::where("student_id", $student_id)
                ->where("class", $class)
                ->where("session", $session)
                ->where("term", $term)
                ->first();

            $subjectHighestLowest = SubjectSummaryAveHighestLowest::where('class',$class)
                ->where('term', $term)
                ->where('session', $session)
                ->select('subject', 'form', 'subj_ave', 'subj_total', 'highest_score','lowest_score', 'total_students')
                ->get();

            $resumptionDateData =  ResumptionClosingDates::where("session", $session)
            ->where("term", $term)
            ->select("closing_date", 'resumption_date', "days_in_term")
            ->first();

            $resultData = [];
            $resultData['studentCaEntries']= $studentCaEntries;
            $resultData['studentBehaviour'] = $studentBehaviour;
            $resultData['subjectHighestScores'] = $subjectHighestLowest;
            $resultData['resumptionDataData'] = $resumptionDateData;
            $resultData ['subjectDictionary'] = $resultService->getSubjectDictionary($class);
            $resultData['schoolConfig'] = $schoolConfig;
            $resultData['studentData'] = $studentData;
            $resultData['resultRequestData'] = $request->all();
            return redirect()->with('student.termly.result')->with("resultData", $resultData);
        }

        if($resultType == "session"){
            $subjectRecored = SubjectSummary::where("student_id", $student_id)  //this is for part term might not provide the expected output
            ->where("term", $term)
            ->where("session", $session)
            ->where("class", $class)
            ->select("")
            ->get();

            $sessionSummary = SessionSummary::where("student_id", $student_id)
            ->where("session", $session)
            ->where("class", $class)
            ->select()
            ->get();
           
            //Contains first term average, second term average and third term average. 
            $annualResultStudentSummary  = AnnualReport::where('student_id', $student_id)
            ->where("class", $class)
            ->where("session", $session)
            ->select("first", "second", "third", "total", "average", "position", "grade")
            ->first();

            $resultData = [];
            $resultData["sessionRecord"] = $sessionSummary;
            $resultData ['subjectDictionary'] = $resultService->getSubjectDictionary($class);
            $resultData ['annualStudentSummary'] = $annualResultStudentSummary;
            $resultData['schoolConfig'] = $schoolConfig;
            $resultData['studentData'] = $studentData;
            $resultData['resultRequestData'] = $request->all();

            return redirect()->route("student.annual.result")->with('resultData', $resultData);
        }
    }

    public function termlyResult(){
        $data =  session("resultData");
        return inertia("Result/TermlyResult", [
            "resultData"=>$data
        ]);
    }

    public function annualResult(){

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
