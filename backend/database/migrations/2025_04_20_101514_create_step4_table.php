<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('step4', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('tour_operator_master_id');

            $table->string('method')->nullable();
            $table->string('transaction_id')->nullable();
            $table->decimal('amount', 10, 2)->nullable();

            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('tour_operator_master_id')->references('id')->on('tour_operator_master')->onDelete('cascade');
        });
    }

    public function down(): void {
        Schema::dropIfExists('step4');
    }
};
