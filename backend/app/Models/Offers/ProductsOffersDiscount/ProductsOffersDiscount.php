<?php

namespace App\Models\Offers\ProductsOffersDiscount;

use App\Models\Interfaces\OfferProductsInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed products_ids
 * @property mixed discount_percent
 * @property ProductsOffersDiscountProducts offerProducts
 */
class ProductsOffersDiscount extends Model implements OfferProductsInterface
{
    use HasFactory;
    protected $table = 'products_offers_discount';

    protected $fillable = [
        'name',
        'products_ids',
        'discount_percent',
        'start_date',
        'end_date',
    ];

    public function offerProducts()
    {
        return $this->hasMany(ProductsOffersDiscountProducts::class, 'offer_id');
    }

    public function applyOffer($product, $productIds)
    {
        $productsOfferIds = [];
        foreach($this->offerProducts as $offer){
            $productsOfferIds[] = $offer->product_id;
        }
        if (in_array($product->id, $productsOfferIds)) {
            return $this->discount_percent;
        }
        return 0;
    }
}