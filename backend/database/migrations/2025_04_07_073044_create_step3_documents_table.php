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
        Schema::create('step3_documents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('application_id');

            $table->integer('sl'); // serial no
            $table->string('label');
            $table->string('file_path');

            $table->timestamps();

            $table->foreign('application_id')->references('id')->on('tour_operator_applications')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('step3_documents');
    }
};
