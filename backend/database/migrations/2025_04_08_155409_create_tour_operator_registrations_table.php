<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTourOperatorRegistrationsTable extends Migration
{
    public function up()
    {
        Schema::create('tour_operator_registrations', function (Blueprint $table) {
            $table->id();
            // Step 1:
            $table->json('applicant')->nullable();
            $table->json('organization')->nullable();
            $table->json('business_address')->nullable();

            // Step 2: Employee Details
            $table->json('employees')->nullable();

            // Step 3: Document Attachments
            $table->json('attachments')->nullable();

            // Step 4: Payment Information
            $table->string('payment_method')->nullable();
            $table->string('transaction_id')->nullable();
            $table->decimal('amount', 10, 2)->nullable();

            // Save as draft status
            $table->boolean('is_draft')->default(false);

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tour_operator_registrations');
    }
}
