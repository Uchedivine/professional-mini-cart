<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    /** @use HasFactory<\Database\Factories\PlanFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'price',
        'status',
        'description',
        'publish_status',
        'discount_enabled',
        'apply_monthly',
        'apply_yearly',
        'apply_quarterly',
        'discount_amount',
        'discount_type',
    ];

    protected $casts = [
        'discount_enabled' => 'boolean',
        'apply_monthly' => 'boolean',
        'apply_yearly' => 'boolean',
        'apply_quarterly' => 'boolean',
        'price' => 'decimal:2',
        'discount_amount' => 'decimal:2',
    ];
}
