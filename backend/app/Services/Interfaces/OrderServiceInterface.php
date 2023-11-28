<?php

namespace App\Services\Interfaces;


interface OrderServiceInterface
{

    public function createShoppingCart(array $productsIds);

    public function getShoppingCartData();

}