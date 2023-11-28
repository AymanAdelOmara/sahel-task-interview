<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsOffersByCountOfItemsFromProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products_offers_by_count_of_items_from_products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('count_of_item_selected');
            $table->integer('count_of_item_discount');
            $table->integer('discount_percent');
            $table->date('start_date');
            $table->date('end_date');
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

    }
}
