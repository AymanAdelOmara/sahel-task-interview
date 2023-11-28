<?php

namespace App\Models\Offers\ShippingFeesOffers;

use App\Models\Interfaces\OfferShippingInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed count_of_item
 * @property mixed discount_percent
 */
class ShippingFeesOffersByCountOfItems extends Model implements OfferShippingInterface
{
    use HasFactory;
    protected $table = 'shipping_fees_offers_by_count_of_items';

    protected $fillable = [
        'name',
        'count_of_item',
        'discount_percent',
        'start_date',
        'end_date',
    ];

    public function applyShippingOffer($product, $productIds)
    {
        if (count($productIds) >= $this->count_of_item) {
            return $this->discount_percent;
        }
        return 0;
    }
}