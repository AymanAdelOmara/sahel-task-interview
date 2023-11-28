<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Customer\OrdersController;
use App\Http\Controllers\Customer\ProductsController;


Route::post('order-checkout', [OrdersController::class, 'orderCheckout'])->name('orderCheckout');
Route::get('products', [ProductsController::class, 'index'])->name('getProducts');