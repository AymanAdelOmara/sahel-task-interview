<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BasicTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_case_1()
    {
        $products = [6];
        $response = $this->post('/api/v1/order-checkout', ['products' => $products]);
        $response->assertStatus(200)
            ->assertJson(['success' => true])
            ->assertJson(['order' => ['discountsAmount' => 0]])
            ->assertJson(['order' => ['shippingAmountDiscount' => 0]]);
    }


    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_case_2()
    {
        $products = [3, 6];
        $response = $this->post('/api/v1/order-checkout', ['products' => $products]);
        $response->assertStatus(200)
            ->assertJson(['success' => true])
            ->assertJson(['order' => ['discountsAmount' => 0]])
            ->assertJson(['order' => ['shippingAmountDiscount' => 10]]);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_case_3()
    {
        $products = [2, 3, 6];
        $response = $this->post('/api/v1/order-checkout', ['products' => $products]);
        $response->assertStatus(200)
            ->assertJson(['success' => true])
            ->assertJson(['order' => ['vatAmount' => 33.8758]])
            ->assertJson(['order' => ['discountsAmount' => 99.995]])
            ->assertJson(['order' => ['shippingAmountDiscount' => 10]])
            ->assertJson(['order' => ['totalAmount' => 122.8558]]);
    }  /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_case_4()
    {
        $products = [7, 2, 3, 6, 4];
        $response = $this->post('/api/v1/order-checkout', ['products' => $products]);
        $response->assertStatus(200)
            ->assertJson(['success' => true])
            ->assertJson(['order' => ['subTotal' => 386.95]])
            ->assertJson(['order' => ['vatAmount' => 54.173]])
            ->assertJson(['order' => ['discountsAmount' => 107.994]])
            ->assertJson(['order' => ['shippingAmount' => 110]])
            ->assertJson(['order' => ['shippingAmountDiscount' => 10]])
            ->assertJson(['order' => ['totalAmount' => 433.129]]);
    }

}
