<?php
namespace App\Services;

use App\Models\Interfaces\OfferProductsInterface;
use App\Models\Interfaces\OfferShippingInterface;
use App\Models\Product;
use App\Services\Interfaces\OfferServiceInterface;

class OffersService implements OfferServiceInterface
{
    private $today;
    private $offerProductModules;
    private $offerShippingModules;

    public function __construct($offerProductModules, $offerShippingModules)
    {
        $this->today = date('Y-m-d');
        $this->offerProductModules = $offerProductModules;
        $this->offerShippingModules = $offerShippingModules;
    }

    public function checkProductDiscount(Product $product, array $productIds, OfferProductsInterface $offer)
    {
        $result = $offer->applyOffer($product, $productIds);
        if ($result != 0) {
            return $result;
        }
        return 0;
    }

    public function checkShippingDiscount(Product $product, array $productIds, OfferShippingInterface $offer)
    {
        $result = $offer->applyShippingOffer($product, $productIds);
        if ($result != 0) {
            return $result;
        }
        return 0;
    }

    public function getProductsOffers()
    {
        $offers = collect([]);
        foreach ($this->offerProductModules as $module) {
            if ($module instanceof OfferProductsInterface)
                $offers = $offers->concat($module::whereDate('start_date', '<=', $this->today)->whereDate('end_date', '>=', $this->today)->get());
        }
        return $offers;
    }

    public function getShippingOffers()
    {
        $offers = collect([]);
        foreach ($this->offerShippingModules as $module) {
            if ($module instanceof OfferShippingInterface)
                $offers = $offers->concat($module::whereDate('start_date', '<=', $this->today)->whereDate('end_date', '>=', $this->today)->get());
        }
        return $offers;
    }

}