<?php

namespace App\Http\Controllers;

use App\Constants\AppConstants;
use App\Models\AnnualReport;
use App\Models\AnnualReportTable;
use App\Models\ResultPin;
use App\Models\ResumptionClosingDateData;
use App\Models\ResumptionClosingDates;
use App\Models\SchoolConfiguration;
use App\Models\SessionSummary;
use App\Models\Student;
use App\Models\StudentBehaviourRecord;
use App\Models\StudentCaRecord;
use App\Models\StudentClassSummary;
use App\Models\StudentPaymentRecord;
use App\Models\SubjectSummary;
use App\Models\SubjectSummaryAveHighestLowest;
use App\Models\UniquePin;
use App\Models\UniquPin;
use App\Services\ResultService;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    //

    public function resultIndexTermly()
    {

        $studentList = Student::where("status", "active")
        ->orderBy("current_class", 'desc')
        ->select("fullname", "id", "current_class")
        ->get();

        return inertia("Result/TermlyResultIndex", [
            "availableClasses"=>AppConstants::AVAILABLE_CLASSES,
            "sessions"=>AppConstants::AVAILABLE_SESSION,
            "studentList"=>$studentList,
        ]);
    }

    public function resultIndexAnnual(){
        $studentList = Student::where("status", "active")
        ->orderBy("current_class", 'desc')
        ->select("fullname", "id", "current_class")
        ->get();

        return inertia("Result/AnnualResultIndex", [
            "availableClasses"=>AppConstants::AVAILABLE_CLASSES,
            "studentList"=>$studentList,
            "sessions"=>AppConstants::AVAILABLE_SESSION,
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


        $class = $request-> student_class; //90770326431500;
        $session = $request->session;
        $term = $request->term;
        $resultType =  $request->resultType;
        $pin = $request->pin;
        $student_id = $request->student_id;

        $pin_term = $resultType=="annual"?"third":$term;

        $pin_status = $this->verifyPin($pin_term, $session, $pin, $student_id);

       
        if ($pin_status['status'] == false) {
            if ($resultType == "termly") {
                //dd($request->all());
                //dd("I am stucked here");
                return redirect()
                    ->route('result.termly.index')
                    ->withErrors(['pin' => $pin_status['pin']])
                    ->withInput(); // Optional: retains form input
            }
            if ($resultType == "annual") {
                //dd($request->all());
                //dd("I am stucked here");
                return redirect()
                    ->route('result.annual.index')
                    ->withErrors(['pin' => $pin_status['pin']])
                    ->withInput(); // Optional: retains form input
            }

        }else{
            $this->updatePinUsage($pin_term, $session, $pin, $student_id);
        }
        
 
        $studentData = Student::where('id',$student_id)->select("id","fullname","admission_no","current_class", "gender","student_house", "dob", "form")->first();
        $schoolConfig = SchoolConfiguration::find(1);

        //check if fees has been paid

        $paid = StudentPaymentRecord::where('student_id', $student_id)
        ->where('session', $session)
        ->where('term', $resultType =="annual"?"third":$term)
        ->exists();

        if(!$paid){
            if($resultType=="termly"){
                return redirect()->route("result.termly.index")->withErrors(["fees"=> "School fees not paid for the session"])->withInput();
            }
            if($resultType == "annual"){
                return redirect()->route("result.annual.index")->withErrors(["fees"=> "School fees not paid for the session"])->withInput();
            }
        }

         
        if ($resultType == "termly") {
            $studentCaEntries =  StudentCaRecord::where("student_id", $student_id)
                ->where("class", $class)
                ->where("session", $session)
                ->where("term", $term)
                ->select("subject","first_ca", "second_ca","first_test","second_test", "exam", "total", "grade","comment", "position")
                ->get();
     
            $studentBehaviour = StudentBehaviourRecord::where("student_id", $student_id)
                ->where("class", $class)
                ->where("session", $session)
                ->where("term", $term)
                ->first();

            $subjectHighestLowest = SubjectSummaryAveHighestLowest::where('class',$class)
                ->where('term', $term)
                ->where('session', $session)
                ->select('subject','subj_ave', 'highest_score','lowest_score', 'total_students')
                ->get();

            $studentClassSummary = StudentClassSummary::where("student_id", $student_id)
            ->where("class", $class)
            ->where("session", $session)
            ->where("term", $term)
            ->first();

            $resumptionDateData = ResumptionClosingDateData::where('session', $session)
            ->where('term', $term)
            ->first();

     

            

            // $resumptionDateData =  ResumptionClosingDates::where("session", $session)
            // ->where("term", $term)
            // ->select("closing_date", 'resumption_date', "days_in_term")
            // ->first();

            $resultData = [];
            $resultData['studentCaEntries']= $studentCaEntries;
            $resultData['studentBehaviour'] = $studentBehaviour;
            $resultData['subjectHighestScores'] = $subjectHighestLowest;
            $resultData['resumptionDataData'] = $resumptionDateData;
            $resultData ['subjectDictionary'] = $resultService->getSubjectDictionary($class);
            $resultData['schoolConfig'] = $schoolConfig;
            $resultData['studentClassSummary'] = $studentClassSummary;
            $resultData['studentData'] = $studentData;
            $resultData['resultRequestData'] = $request->all();
            return redirect()->route('student.termly.result')->with("resultData", $resultData);
        }

        if($resultType == "annual"){
    

            $sessionSummary = SessionSummary::where("student_id", $student_id)
            ->where("session", $session)
            ->where("class", $class)
            ->select( "subject","first", "second", "third","total", "average", "grade","remark","position")
            ->get();
           
            //Contains first term average, second term average and third term average. 
            $annualResultStudentSummary  = AnnualReportTable::where('student_id', $student_id)
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

   
    public function updatePinUsage($term, $session, $pin, $student_id){
       $pin = UniquePin::where('pin', $pin)->first();
       $pin->status ="used";
       $pin->session = $session;
       $pin->term = $term;
       $pin->used_by = $student_id;
       $pin->save();

    }
    public function verifyPin($term, $session, $pin, $student_id){
        $pin_exists =UniquePin::where("pin", $pin)->exists();
        if(!$pin_exists){
            return [
                "status"=>false,
                "msg"=>"Invalid Pin",
                 "pin"=>"Invalid Pin"
            ];
        }

        $pin_data = UniquePin::where("pin", $pin)->first();
        if($pin_data->status=="used"){
            if($pin_data->used_by!=$student_id){
                return [
                    "status"=>false,
                    "msg"=>"This pin has been used for another student",
                     "pin"=>"This pin has been used for another student"
                ];
            }
            if($pin_data->term == $term && $pin_data->session == $session){
                return [
                    "status"=>true,
                    "msg"=>"Available of current Student",
                     "pin"=>"Available of current Student"

                ];
            }
        }
        if($pin_data->status =="not_used"){
            return [
                "status"=>true,
                "msg"=>"Available of usage. Not tied to any student",
                "pin"=>"Available of usage. Not tied to any student"

            ];
        }

        return [
            "status"=>false,
            "msg"=>"An Error occured while processing the requests",
            "pin"=>"An Error occured while processing the requests"


        ];
    }
    public function termlyResult(){
        $data =  session("resultData");
        return inertia("Result/TermlyResult", [
            "resultData"=>$data
        ]);
    }

    public function annualResult(){
        $data =  session("resultData");
        return inertia("Result/AnnualResult", [
            "resultData"=>$data
        ]);
    }

    public static function getClassList(string $class) {}
}
