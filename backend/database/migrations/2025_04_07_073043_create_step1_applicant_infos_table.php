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
        Schema::create('step1_applicant_infos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('application_id');

            // Example fields (expand as per your form structure)
            $table->string('name_bn');
            $table->string('name_en');
            $table->string('father_name')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('gender')->nullable();
            $table->string('designation');
            $table->string('mobile');
            $table->string('phone')->nullable();
            $table->string('email');

            // Organization Info
            $table->string('org_name_bn')->nullable();
            $table->string('org_name_en')->nullable();
            $table->string('tour_operator_type')->nullable();
            $table->string('org_type')->nullable();
            $table->string('website')->nullable();
            $table->string('location')->nullable();

            // Business Address
            $table->string('division')->nullable();
            $table->string('district')->nullable();
            $table->string('upazila')->nullable();
            $table->string('post_code')->nullable();
            $table->text('address_bn')->nullable();
            $table->text('address_en')->nullable();
            $table->string('business_phone')->nullable();
            $table->string('business_mobile')->nullable();
            $table->string('business_email')->nullable();

            // Owner Info
            $table->string('owner_name')->nullable();
            $table->string('owner_father_name')->nullable();
            $table->string('owner_mother_name')->nullable();
            $table->string('nationality')->nullable();
            $table->string('nid')->nullable();
            $table->date('dob')->nullable();
            $table->string('owner_designation')->nullable();
            $table->string('owner_email')->nullable();
            $table->string('owner_mobile')->nullable();

            // Permanent Address
            $table->string('permanent_division')->nullable();
            $table->string('permanent_district')->nullable();
            $table->string('permanent_upazila')->nullable();
            $table->string('permanent_post_code')->nullable();
            $table->text('permanent_address')->nullable();

            // Current Address
            $table->string('current_division')->nullable();
            $table->string('current_district')->nullable();
            $table->string('current_upazila')->nullable();
            $table->string('current_post_code')->nullable();
            $table->text('current_address')->nullable();

            // Tourism Management Count
            $table->integer('inbound_count')->nullable();
            $table->integer('outbound_count')->nullable();
            $table->integer('domestic_count')->nullable();

            // Trade License Info
            $table->string('certificate_number')->nullable();
            $table->date('issue_date')->nullable();
            $table->string('fiscal_year')->nullable();

            // Income Tax Certificate
            $table->date('tax_issue_date')->nullable();
            $table->string('tax_fiscal_year')->nullable();
            $table->string('e_tin')->nullable();

            $table->timestamps();

            $table->foreign('application_id')->references('id')->on('tour_operator_applications')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('step1_applicant_infos');
    }
};
