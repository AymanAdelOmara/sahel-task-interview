<?php

namespace App\Models\Offers\ShippingFeesOffers;

use App\Interfaces\OfferShippingInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed discount_percent
 * @property mixed sub_total
 */
class ShippingFeesOffersBySubTotal extends Model implements OfferShippingInterface
{
    use HasFactory;
    protected $table = 'shipping_fees_offers_sub_total';

    protected $fillable = [
        'name',
        'sub_total',
        'discount_percent',
        'start_date',
        'end_date',
    ];

    public function applyShippingOffer($product, $productIds)
    {
        if($this->sub_total > 100){
            return $this->discount_percent;
        }
        return 0;
    }
}