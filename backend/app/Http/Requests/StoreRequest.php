<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'domain' => 'required|string|max:255|unique:stores,domain,' . ($this->store ? $this->store->id : ''),
            'plan_id' => 'required|exists:plans,id',
            'status' => 'nullable|string|in:Active,Pending,Expired,Suspended',
            'user_id' => 'required|exists:users,id',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        if ($this->has('domain')) {
            $this->merge([
                'domain' => strtolower(strip_tags($this->domain)),
            ]);
        }
    }
}
