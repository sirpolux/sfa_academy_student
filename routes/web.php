<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResultController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get("/student/termly/result/index", [ResultController::class, 'resultIndexTermly'])->name('result.termly.index');
Route::get("/student/annual/result/index", [ResultController::class, 'resultIndexAnnual'])->name('result.annual.index');


Route::post("/student/result", [ResultController::class, 'fetchStudentResult'])->name('student.result.fetch');
Route::get("/student/result/termly", [ResultController::class, 'termlyResult'])->name('student.termly.result');
Route::get("/student/result/annual", [ResultController::class, 'annualResult'])->name('student.annual.result');


Route::get("/contact-us", function(){
    return inertia("ContactUs");
})->name("contact");

Route::get("/about-us", function(){
    return inertia("AboutUs");
})->name("about");


require __DIR__.'/auth.php';
