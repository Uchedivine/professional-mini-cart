<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Plan;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plans = [
            [
                'title' => 'Starter Plan',
                'price' => 0.00,
                'status' => 'Active',
                'description' => 'Perfect for individuals starting their journey.',
                'publish_status' => 'Active',
                'discount_enabled' => false,
            ],
            [
                'title' => 'Standard Plan',
                'price' => 29.99,
                'status' => 'Active',
                'description' => 'Ideal for small teams and growing businesses.',
                'publish_status' => 'Active',
                'discount_enabled' => true,
                'discount_amount' => 10,
                'discount_type' => 'Percentage',
                'apply_monthly' => true,
            ],
            [
                'title' => 'Premium Plan',
                'price' => 99.99,
                'status' => 'Active',
                'description' => 'Advanced features for large scale operations.',
                'publish_status' => 'Active',
                'discount_enabled' => true,
                'discount_amount' => 20,
                'discount_type' => 'Fixed',
                'apply_yearly' => true,
            ],
            [
                'title' => 'Platinum Plan',
                'price' => 199.99,
                'status' => 'Active',
                'description' => 'The ultimate package for enterprise level support.',
                'publish_status' => 'Active',
                'discount_enabled' => false,
            ],
        ];

        foreach ($plans as $plan) {
            Plan::create($plan);
        }
    }
}
