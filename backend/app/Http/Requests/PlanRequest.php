<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Simple for assessment, can be restricted to admins
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'status' => 'nullable|string|in:Active,Inactive',
            'description' => 'nullable|string',
            'publish_status' => 'nullable|string|in:Active,Inactive',
            'discount_enabled' => 'nullable|boolean',
            'apply_monthly' => 'nullable|boolean',
            'apply_yearly' => 'nullable|boolean',
            'apply_quarterly' => 'nullable|boolean',
            'discount_amount' => 'nullable|numeric|min:0',
            'discount_type' => 'nullable|string|in:Percentage,Fixed',
        ];
    }

    /**
     * Prepare the data for validation.
     * (Sanitization Example)
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'title' => strip_tags($this->title),
            'description' => strip_tags($this->description),
        ]);
    }
}
