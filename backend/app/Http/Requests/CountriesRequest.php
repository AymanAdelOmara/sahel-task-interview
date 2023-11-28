<?php

namespace App\Http\Requests;
use App\Models\Country;

/**
 * @property string name
 * @property mixed slug
 * @property mixed shipping_rate
 * @property Country country
 */
class CountriesRequest extends ApiFormRequest
{
    public function rules()
    {
        return [
            'name' => "required",
            'shipping_rate' => 'required'
        ];
    }
}