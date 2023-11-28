<?php


namespace App\Models\Offers\ShippingFeesOffers;

use App\Interfaces\OfferShippingInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShippingFeesOffersByShippingFeesTotal extends Model implements OfferShippingInterface
{
    use HasFactory;
    protected $table = 'shipping_fees_offers_by_shipping_fees_total';

    protected $fillable = [
        'name',
        'shipping_fees_total',
        'discount_percent',
        'start_date',
        'end_date',
    ];

    public function applyShippingOffer($product, $productIds)
    {
        // TODO: Implement applyOffer() method.
    }
}