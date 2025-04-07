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
        Schema::create('step4_payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('application_id');

            $table->string('method');
            $table->string('transaction_id');
            $table->decimal('amount', 10, 2);

            $table->timestamps();

            $table->foreign('application_id')->references('id')->on('tour_operator_applications')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('step4_payments');
    }
};
