<?php

namespace App\Providers;

use App\Models\Offers\ProductsOffersByCount\ProductsOffersByCountOfItemsFromProducts;
use App\Models\Offers\ProductsOffersDiscount\ProductsOffersDiscount;
use App\Models\Offers\ShippingFeesOffers\ShippingFeesOffersByCountOfItems;
use App\Services\Interfaces\OfferServiceInterface;
use App\Services\Interfaces\OrderServiceInterface;
use App\Services\OffersService;
use App\Services\OrderService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(OfferServiceInterface::class, function () {
            return new OffersService(
                [new ProductsOffersDiscount, new ProductsOffersByCountOfItemsFromProducts],
                [new ShippingFeesOffersByCountOfItems]
            );
        });
        $this->app->bind(OrderServiceInterface::class, function ($app) {
            return new OrderService($app->make(OfferServiceInterface::class));
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
