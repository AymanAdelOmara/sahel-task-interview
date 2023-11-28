import {http} from '../vue-customers'

class API {

    constructor() {
        this.http = http;
    }

    async getProducts(page) {
        return await this.http.get(this.http.baseUrl + '/api/v1/customer/products?page=' + page);
    }

    async orderCheckout(productsIds) {
        return await this.http.post(this.http.baseUrl + '/api/v1/customer/order-checkout', {products: productsIds});
    }


}

export const APIService = new API();
