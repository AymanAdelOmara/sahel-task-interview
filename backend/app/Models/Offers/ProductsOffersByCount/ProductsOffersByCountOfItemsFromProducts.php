<?php

namespace App\Models\Offers\ProductsOffersByCount;

use App\Models\Interfaces\OfferProductsInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property integer products_of_item_selected
 * @property integer products_of_item_discount
 * @property float discount_percent
 * @property ProductsOffersByCountOfItemsOffersProductsIds fromProducts
 * @property ProductsOffersByCountOfItemsFromProductsIds offerProducts
 */
class ProductsOffersByCountOfItemsFromProducts extends Model implements OfferProductsInterface
{
    use HasFactory;
    protected $table = 'products_offers_by_count_of_items_from_products';

    protected $fillable = [
        'name',
        'count_of_item_selected',
        'products_of_item_selected',
        'count_of_item_discount',
        'products_of_item_discount',
        'discount_percent',
        'start_date',
        'end_date',
    ];

    public function applyOffer($product, $productIds)
    {
        $productsOfSelected = [];
        foreach($this->fromProducts as $offer){
            $productsOfSelected[] = $offer->product_id;
        }
        $productsOfferIds = [];
        foreach($this->offerProducts as $offer){
            $productsOfferIds[] = $offer->product_id;
        }

        $offerApplyState = true;
        foreach ($productsOfSelected as $productId) {
            if (!in_array($productId, $productIds) && $product->id != $productId) {
                $offerApplyState = false;
            }
        }
        if (in_array($product->id, $productsOfferIds) && $offerApplyState) {
            return $this->discount_percent;
        }
        return 0;
    }

    public function fromProducts()
    {
        return $this->hasMany(ProductsOffersByCountOfItemsFromProductsIds::class, 'offer_id');
    }

    public function offerProducts()
    {
        return $this->hasMany(ProductsOffersByCountOfItemsOffersProductsIds::class, 'offer_id');
    }
}