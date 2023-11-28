<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string id
 * @property string name
 * @property float price
 * @property float weight
 * @property Country shippedFrom
 */
class Product extends Model
{
    use HasFactory;
    protected $table = 'products';

    protected $fillable = ['name', 'shipped_from_id', 'price', 'weight',];

    public function shippedFrom()
    {
        return $this->belongsTo(Country::class, 'shipped_from_id', 'id');
    }

    public function getShippingCost()
    {
        return round(($this->weight * $this->shippedFrom->shipping_rate) * 10, 3);
    }

}
