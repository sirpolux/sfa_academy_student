<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('subject_summaries', function (Blueprint $table) {
            $table->id();
            $table->string('student_id');
            $table->string('term', 10);
            $table->string('session', 10);
            $table->string('class', 10);
            $table->string('form')->nullable();  //
            $table->double('score');
            $table->string('subject');
            $table->double('average')->nullable();
            $table->double('total')->nullable();
            $table->string('position', 10)->nullable();
            $table->string('remark', 10)->nullable();
            $table->timestamps();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subject_summaries');
    }
};
