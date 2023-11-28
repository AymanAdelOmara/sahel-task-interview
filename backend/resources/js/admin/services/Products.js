import FormDataCustom from "../FormDataCustom";
import Iservice from "../Iservice";

class ProductsServices extends Iservice {

    constructor() {
        super();
    }

    async get(query) {
        return await this.http.get(this.http.baseUrl + '/api/v1/admin/products?' + query);
    }

    async getById(id) {
        return await this.http.get(this.http.baseUrl + '/api/v1/admin/products/' + id);
    }

    async createProduct(data) {
        let formData = new FormDataCustom();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('shipped_from_id', data.shipped_from_id);
        formData.append('weight', data.weight);
        return await this.http.post(this.http.baseUrl + '/api/v1/admin/products', formData);
    }

    async updateProduct(data) {

        let formData = new FormDataCustom("put");
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('shipped_from_id', data.shipped_from_id);
        formData.append('weight', data.weight);
        return await this.http.post(this.http.baseUrl + '/api/v1/admin/products/' + data.id, formData);
    }

    async delete(offer_id) {
        return await this.http.delete(this.http.baseUrl + '/api/v1/admin/products/' + offer_id);
    }

    async getCountries() {
        return await this.http.get(this.http.baseUrl + '/api/v1/admin/countries');
    }

    async createCountry(itemValue) {
        let formData = new FormDataCustom("post");
        formData.append('name', itemValue.name);
        formData.append('shipping_rate', itemValue.shipping_rate);
        return await this.http.post(this.http.baseUrl + '/api/v1/admin/countries', formData);
    }

    async updateCountry(itemValue) {
        let formData = new FormDataCustom("put");
        formData.append('name', itemValue.name);
        formData.append('shipping_rate', itemValue.shipping_rate);
        return await this.http.post(this.http.baseUrl + '/api/v1/admin/countries/' + itemValue.id, formData);
    }


}

const productsServices = new ProductsServices();
export default productsServices;
