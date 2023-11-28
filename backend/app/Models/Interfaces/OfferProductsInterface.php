<?php

namespace App\Models\Interfaces;


interface OfferProductsInterface
{

    public function applyOffer($product, $productIds);

}