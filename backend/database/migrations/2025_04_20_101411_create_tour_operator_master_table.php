<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('tour_operator_master', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->unsignedBigInteger('user_id'); // Link to the user

            // Step 1
            $table->string('applicant_name_bn')->nullable();
            $table->string('applicant_name_en')->nullable();
            $table->string('applicant_father_name')->nullable();
            $table->string('applicant_mother_name')->nullable();
            $table->string('applicant_gender')->nullable();
            $table->string('applicant_designation')->nullable();
            $table->string('applicant_mobile')->nullable();
            $table->string('applicant_phone')->nullable();
            $table->string('applicant_email')->nullable();

            // Step 2
            $table->string('emp_name')->nullable();
            $table->string('emp_address')->nullable();
            $table->string('emp_gender')->nullable();
            $table->string('emp_designation')->nullable();
            $table->string('emp_education')->nullable();
            $table->string('emp_appointment_date')->nullable();
            $table->string('emp_experience')->nullable();
            $table->string('emp_passport')->nullable();

            // Step 3
            $table->string('file_1')->nullable();
            $table->string('file_2')->nullable();
            $table->string('file_3')->nullable();

            // Step 4
            $table->string('method')->nullable();
            $table->string('transaction_id')->nullable();
            $table->decimal('amount', 10, 2)->nullable();

            $table->enum('status', ['draft', 'submitted'])->default('draft');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down(): void {
        Schema::dropIfExists('tour_operator_master');
    }
};
