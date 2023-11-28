<?php

namespace App\Http\Requests;

/**
 * @property string name
 * @property mixed shipped_from_id
 * @property mixed price
 * @property mixed weight
 */

class ProductsRequest extends ApiFormRequest
{
    public function rules()
    {
        return [
            'name' => "required" ,
            'price' => 'required|numeric',
            'shipped_from_id' => 'required|numeric',
            'weight' => 'required|numeric',
        ];
    }
}