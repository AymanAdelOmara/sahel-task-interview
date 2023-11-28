<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * D:\PHP8\php\php.exe artisan make:migration create-categories_table
     * D:\PHP8\php\php.exe artisan make:migration create-countries_table
     * D:\PHP8\php\php.exe artisan make:migration create-products_table
     *
     * D:\PHP8\php\php.exe artisan make:migration create-products_offers_by_count_of_items_from_products_table
     * D:\PHP8\php\php.exe artisan make:migration create-products_offers_discount_table
     * D:\PHP8\php\php.exe artisan make:migration create-products_offers_by_count_of_items_from_products_ids
     * D:\PHP8\php\php.exe artisan make:migration create-products_offers_by_count_of_items_offer_products_ids
     * D:\PHP8\php\php.exe artisan make:migration create-products_offers_discount_products_ids
     * D:\PHP8\php\php.exe artisan make:migration create-shipping_fees_offers_by_count_of_items_table
     * D:\PHP8\php\php.exe artisan make:migration create-shipping_fees_offers_by_sub_total
     * D:\PHP8\php\php.exe artisan make:migration create-shipping_fees_offers_by_shipping_fees_total
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->float('shipping_rate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
