<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('plans', \App\Http\Controllers\Api\PlanController::class);
Route::apiResource('stores', \App\Http\Controllers\Api\StoreController::class);
Route::get('users', [\App\Http\Controllers\Api\UserController::class, 'index']);
Route::get('stats', [\App\Http\Controllers\Api\StatsController::class, 'index']);

// TEMPORARY: Run migrations via browser (Delete this after use!)
Route::get('deploy-migrate', function () {
    try {
        \Illuminate\Support\Facades\Artisan::call('migrate:fresh', ['--force' => true, '--seed' => true]);
        return response()->json([
            'message' => 'Migration and Seeding successful!',
            'output' => \Illuminate\Support\Facades\Artisan::output()
        ]);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [\App\Http\Controllers\Api\ProfileController::class, 'show']);
    Route::put('/profile', [\App\Http\Controllers\Api\ProfileController::class, 'update']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
