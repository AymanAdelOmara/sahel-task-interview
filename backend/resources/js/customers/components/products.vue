<template>
    <div>
        <section class="offer" style=" min-height: 100vh; ">

            <div class="pb-5 container text-left">
                <div class="row mb-3">
                    <div class="col-md-9 col-6">
                        <div class="row mb-3">
                            <div v-for="product in products" class="col-md-4 col-6 mt-3 text-left">
                                <div class="gry-border shadow">
                                    <div class="p-2">
                                        <h5 class="gift_title font-weight-bolder">{{product.name}}</h5>
                                        <h5 class="gift_title">Price: ${{product.price}}</h5>
                                        <h5 class="gift_title">Shipped From: {{product?.shipped_from?.name}}</h5>
                                    </div>
                                    <div class="border-t text-center">
                                        <img
                                                src="https://s3.amazonaws.com/s3.resal.me/products/attachments/yYDckvWuoP7WjP4ng9Fgbc2rkYb9vrYSjEOxIphV.jpeg"
                                                class="img-fluid w-100 gift_image"
                                                :alt="product.name"/>
                                    </div>
                                    <button v-if="!inCart(product.id)" type="button"
                                            :disabled="product.isLoading"
                                            class="btn btn-golden rounded-0 btn-block"
                                            @click="addProductToCart(product)">
                                        Add To Cart
                                    </button>
                                    <button v-else
                                            type="button"
                                            class="btn btn-golden rounded-0 btn-block"
                                            :disabled="product.isLoading"
                                            @click="removeProductFromCart(product)">
                                        Remove From Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 pt-lg-2">
                        <div class="p-2 bg-gray-300 shadow"
                        v-for="orderProduct in this.order?.orderItems">
                            <h4 class="gift_title font-weight-bolder border-left pl-sm-2">{{products.find(product => product.id === orderProduct.productId)?.name}}</h4>
                            <h5 class="gift_title">Price: ${{orderProduct.price}} - Discount: ${{orderProduct.discountAmount}}</h5>
                            <h5 class="gift_title">Shipped Amount: ${{orderProduct.shippingAmount}}</h5>
                        </div>

                        <div v-if="this.order != null" class="p-2 bg-gray-300 border-top">
                            <h5 class="gift_title">Sub Total: ${{order.subTotal}}</h5>
                            <h5 class="gift_title">Shipping: ${{order.shippingAmount}} - VAT: ${{order.vatAmount}}</h5>
                            <h5 class="gift_title " v-if="order.discountsAmount > 0 || order.shippingAmountDiscount > 0">
                                Discounts:
                                <span class="d-block pl-2 pb-1"
                                      v-for="orderProduct in this.order?.orderItems"
                                v-if="orderProduct.discountAmount > 0">
                                    {{orderProduct.discountPercent }}% off
                                    {{products.find(product => product.id === orderProduct.productId)?.name}}: -${{orderProduct.discountAmount }}

                                </span>
                                <span class="d-block pl-2"
                                      v-if="order.shippingAmountDiscount > 0">
                                    ${{order.shippingAmountDiscount }} of shipping: -${{order.shippingAmountDiscount}}
                                </span>
                            </h5>
                            <h5 class="gift_title  font-weight-bolder">Total Amount: ${{order.totalAmount}}</h5>
                        </div>
                    </div>
                </div>
                <infinite-loading
                        :spinner="'waveDots'"
                        @stateChanger=""
                        @distance="12"
                        slot="{}"
                        @infinite="getNextPage"/>
            </div>
        </section>
    </div>
</template>
<script>
    import InfiniteLoading from 'vue-infinite-loading';
    import {APIService} from '../services/API'

    export default {
        name: "Products",
        components: {
            InfiniteLoading,
        },
        data() {
            return {
                page: 1,
                products: [],
                cartProducts: [],
                order: null,
            }
        },
        watch: {},
        beforeMount() {
            this.getInitialPage();
        },
        mounted() {
        },
        methods: {
            getInitialPage() {

            },
            inCart(id) {
                return this.cartProducts.includes(id)
            },
            addProductToCart(product) {
                if (!this.cartProducts.includes(product.id)) {
                    this.cartProducts.push(product.id);
                    product.isLoading = true;
                    APIService.orderCheckout(this.cartProducts).then(result => {
                        this.order = result.data.order;
                        product.isLoading = false;
                    });
                }
            },
            removeProductFromCart(product) {
                if (this.cartProducts.includes(product.id)) {
                    this.cartProducts = this.cartProducts.filter(ProductId => ProductId !== product.id);
                    if (this.cartProducts.length > 0) {
                        product.isLoading = true;
                        APIService.orderCheckout(this.cartProducts).then(result => {
                            this.order = result.data.order;
                            product.isLoading = false;
                        });
                    }else{
                        this.order = null;
                    }
                }
            },
            getNextPage($state) {
                APIService.getProducts(this.page).then(result => {
                    if (result.data.products.data.length > 0) {
                        this.products.push(...result.data.products.data);
                        $state.loaded();
                        this.page++;
                    } else {
                        $state.complete();
                    }
                });
            },
        }
    }
</script>
