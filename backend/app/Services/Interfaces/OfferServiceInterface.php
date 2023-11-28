<?php

namespace App\Services\Interfaces;


use App\Models\Interfaces\OfferProductsInterface;
use App\Models\Interfaces\OfferShippingInterface;
use App\Models\Product;

interface OfferServiceInterface
{
    public function checkProductDiscount(Product $product, array $productIds, OfferProductsInterface $offer);

    public function checkShippingDiscount(Product $product, array $productIds, OfferShippingInterface $offer);

    public function getProductsOffers();

    public function getShippingOffers();

}