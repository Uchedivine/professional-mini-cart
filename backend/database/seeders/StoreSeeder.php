<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Store;
use App\Models\Plan;
use App\Models\User;

class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plans = Plan::all();
        $user = User::first();

        if ($plans->isEmpty() || !$user) {
            return;
        }

        $stores = [
            [
                'domain' => 'my-awesome-shop.localhost',
                'plan_id' => $plans->where('title', 'Starter Plan')->first()->id,
                'status' => 'Active',
                'user_id' => $user->id,
            ],
            [
                'domain' => 'tech-gadgets.localhost',
                'plan_id' => $plans->where('title', 'Standard Plan')->first()->id,
                'status' => 'Active',
                'user_id' => $user->id,
            ],
            [
                'domain' => 'fashion-hub.localhost',
                'plan_id' => $plans->where('title', 'Premium Plan')->first()->id,
                'status' => 'Pending',
                'user_id' => $user->id,
            ],
            [
                'domain' => 'enterprise-corp.localhost',
                'plan_id' => $plans->where('title', 'Platinum Plan')->first()->id,
                'status' => 'Active',
                'user_id' => $user->id,
            ],
            [
                'domain' => 'expired-shop.localhost',
                'plan_id' => $plans->where('title', 'Starter Plan')->first()->id,
                'status' => 'Expired',
                'user_id' => $user->id,
            ],
        ];

        foreach ($stores as $store) {
            Store::create($store);
        }
    }
}
