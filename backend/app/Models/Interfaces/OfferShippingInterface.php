<?php

namespace App\Models\Interfaces;


interface OfferShippingInterface
{

    public function applyShippingOffer($product, $productIds);

}