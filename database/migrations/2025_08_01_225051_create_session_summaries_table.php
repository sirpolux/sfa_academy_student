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
        Schema::create('session_summaries', function (Blueprint $table) {
            $table->id();
            $table->string('student_id');
            $table->string('class');
            $table->string('session');
            $table->string('subject');
            $table->string('form');
            $table->double('first')->nullable()->default(0);
            $table->double('second')->nullable()->default(0);
            $table->double('third')->nullable()->default(0);
            $table->double('total')->nullable()->default(0);
            $table->double('average')->nullable()->default(0);
            $table->string('grade')->nullable();
            $table->string('remark')->nullable();
            $table->string("position")->nullable();
            $table->string('captured_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('session_summaries');
    }
};
