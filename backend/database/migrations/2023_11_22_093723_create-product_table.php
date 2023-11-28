<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('shipped_from_id');
            $table->float('price');
            $table->float('weight');
            $table->timestamps();
            $table->foreign('shipped_from_id')->references('id')->on('countries');
        });
    }

    /**
     * Reverse the migrations.
     *T-shirt
    Blouse
    Pants
    Shoes
    Jacket
     * @return void
     */
    public function down()
    {
        //
    }
}
