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
        Schema::create('resumption_closing_dates', function (Blueprint $table) {
            $table->id();
            $table->string("session")->nullable();   //closing_date, resumption_date, days_in_term
            $table->string("term")->nullable();
            $table->string("closing_date");
            $table->string("resumption_date");
            $table->integer("days_in_term");
            $table->foreignId("captured_by");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resumption_closing_dates');
    }
};
