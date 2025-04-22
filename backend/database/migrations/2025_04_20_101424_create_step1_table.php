<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('step1', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('tour_operator_master_id');

            $table->string('applicant_name_bn')->nullable();
            $table->string('applicant_name_en')->nullable();
            $table->string('applicant_father_name')->nullable();
            $table->string('applicant_mother_name')->nullable();
            $table->string('applicant_gender')->nullable();
            $table->string('applicant_designation')->nullable();
            $table->string('applicant_mobile')->nullable();
            $table->string('applicant_phone')->nullable();
            $table->string('applicant_email')->nullable();

            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('tour_operator_master_id')->references('id')->on('tour_operator_master')->onDelete('cascade');
        });
    }

    public function down(): void {
        Schema::dropIfExists('step1');
    }
};
