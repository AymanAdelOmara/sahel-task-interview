export default class FormDataCustom extends FormData {
    constructor(method = 'get') {
        super();
        if(method === 'put')
            this.append('_method', 'put');
    }
}
