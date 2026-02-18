<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a default admin user for testing
        User::updateOrCreate(
            ['email' => 'admin@minicart.localhost'],
            [
                'name' => 'Jane Austin',
                'first_name' => 'Jane',
                'last_name' => 'Austin',
                'password' => Hash::make('password'),
                'phone' => '+1234567890',
                'gender' => 'Female',
                'country' => 'United States',
                'state' => 'California',
                'city' => 'Los Angeles',
                'address' => '123 Mini Cart Blvd',
                'post_code' => '90210',
                'is_admin' => true,
                'is_verified' => true,
            ]
        );

        $this->call([
            PlanSeeder::class,
            StoreSeeder::class,
        ]);
    }
}
