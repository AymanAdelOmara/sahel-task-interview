<?php

namespace App\Http\Controllers\Customer;


use App\Http\Controllers\Controller;
use App\Services\Interfaces\OrderServiceInterface;

class OrdersController extends Controller
{

    private $orderService;

    public function __construct(OrderServiceInterface $orderService)
    {
        $this->orderService = $orderService;
    }

    public function orderCheckout()
    {
        $request = request()->all();
        $productsIds = isset($request['products']) ? $request['products'] : null;
        if ($productsIds == null || count($productsIds) < 1) {
            return response()->json([
                'success' => false,
                'validator' => null,
                'message' => 'empty cart'
            ], 400);
        }

        $this->orderService->createShoppingCart($productsIds);
        $data = $this->orderService->getShoppingCartData();

        return response()->json([
            'success' => true,
            'order' => $data,
        ], 200);
    }
}
