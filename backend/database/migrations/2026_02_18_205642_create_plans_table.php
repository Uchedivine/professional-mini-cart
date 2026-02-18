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
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->decimal('price', 10, 2);
            $table->string('status')->default('Active'); // Active, Inactive
            $table->text('description')->nullable();
            $table->string('publish_status')->default('Inactive'); // Active, Inactive
            $table->boolean('discount_enabled')->default(false);
            $table->boolean('apply_monthly')->default(false);
            $table->boolean('apply_yearly')->default(false);
            $table->boolean('apply_quarterly')->default(false);
            $table->decimal('discount_amount', 10, 2)->nullable();
            $table->string('discount_type')->default('Percentage'); // Percentage, Fixed
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};
