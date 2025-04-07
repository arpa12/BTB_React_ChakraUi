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
        Schema::create('step2_employees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('application_id');

            $table->string('name');
            $table->string('address')->nullable();
            $table->string('nationality');
            $table->string('designation')->nullable();
            $table->string('education')->nullable();
            $table->date('appointment_date')->nullable();
            $table->text('experience')->nullable();
            $table->string('nid')->nullable();
            $table->string('passport')->nullable();

            $table->timestamps();

            $table->foreign('application_id')->references('id')->on('tour_operator_applications')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('step2_employees');
    }
};
