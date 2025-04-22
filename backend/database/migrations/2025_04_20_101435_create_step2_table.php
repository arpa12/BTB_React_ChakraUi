<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('step2', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('tour_operator_master_id');

            $table->string('emp_name')->nullable();
            $table->string('emp_address')->nullable();
            $table->string('emp_gender')->nullable();
            $table->string('emp_designation')->nullable();
            $table->string('emp_education')->nullable();
            $table->string('emp_appointment_date')->nullable();
            $table->string('emp_experience')->nullable();
            $table->string('emp_passport')->nullable();

            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('tour_operator_master_id')->references('id')->on('tour_operator_master')->onDelete('cascade');
        });
    }

    public function down(): void {
        Schema::dropIfExists('step2');
    }
};
