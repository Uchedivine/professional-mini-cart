<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Store;
use App\Models\User;
use Illuminate\Http\Request;

class StatsController extends Controller
{
    public function index()
    {
        return response()->json([
            'total_revenue' => '5,424,326', // Mock for now
            'total_stores' => Store::count(),
            'total_referrals' => '12,430', // Mock for now
            'total_users' => User::count(),
            'revenue_change' => 5,
            'stores_change' => 8,
            'referrals_change' => 12,
            'users_change' => -3,
        ]);
    }
}
