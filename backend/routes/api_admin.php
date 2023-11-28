<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CountriesController;
use App\Http\Controllers\Admin\ProductsController;

Route::apiResource('products', ProductsController::class, [
    'names' => [
        'index' => 'admin.products-list',
        'store' => 'admin.products-store',
        'show' => 'admin.products-show',
        'update' => 'admin.products-update',
        'destroy' => 'admin.products-delete'
    ]
]);
Route::apiResource('countries', CountriesController::class, [
    'names' => [
        'index' => 'admin.Countries-list',
        'store' => 'admin.Countries-store',
        'show' => 'admin.Countries-show',
        'update' => 'admin.Countries-update',
        'destroy' => 'admin.Countries-delete'
    ]
]);