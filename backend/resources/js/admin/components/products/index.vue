<template>
    <div>
        <div class="page-header">
            <div>
                <h2 class="main-content-title tx-24 mg-b-5">المنتجات</h2>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">المنتجات</li>
                </ol>
            </div>
            <button class="modal-effect btn ripple btn-success" @click="showCreateForm()">
                <i class="fe fe-plus-circle ml-2"></i>
                <span>أضف منتج جديد</span>
            </button>
        </div>
        <div class="row sidemenu-height">
            <div class="col-xl-4 col-md-4" v-for="item in items">
                <div class="card custom-card">
                    <img class="card-img-top w-100 blog-img" style="height:200px" :src="$imagePath + '/media/4.jpg'" alt="">
                    <div class="card-body">
                        <h4 class="card-title">{{item.name}} - ${{item.price}}</h4>
                        <hr>
                        <div class="text-left btn-list">
                            <button @click="editItem(item)" class="btn ripple btn-primary"><i class="fe fe-airplay"></i>
                                تعديل
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import productsServices from '../../services/Products';
    import SelectOptions from "../shared/SelectOptions";

    export default {
        name: "Products",
        data() {
            return {
                formId: "modal_product_form",
                items: [],
                countries: [],
                selectedCountry: null,
                sizes: null,
                item: {
                    name: null,
                    price: null,
                    shipped_from_id: null,
                    weight: null
                },
                count: null,
                currentItem: null
            }
        },
        watch: {
            selectedCountry: function(newVal) {
                this.getItems(`country_id=${newVal}`, false);
            },
        },
        components: {
            SelectOptions,
        },
        mounted() {
            this.getItems();
        },
        methods: {

            async getItems(query = '', isFirst = true) {
                if (isFirst){
                    await productsServices.getCountries().then(async (response) => {
                        this.countries = response.data;

                    });
                }
                await productsServices.get(query).then((response) => {
                    this.items = response.data.data;
                    this.count = response.data.total;
                    this.$hideLoader();
                });
            },
            showCreateForm() {
                this.$router.push({path: `/admin/products/0`}).then().catch();
            },
            editItem(product) {
                this.$router.push({path: `/admin/products/${product.id}`}).then().catch();
            },
            addItem(item) {
                this.items = [item, ...this.items];
                this.currentItem = Object.assign({}, item);
            },
            updateItem(item) {
                let findIndex = this.items.findIndex(_item => _item.id === item.id);
                this.items[findIndex] = item;
                this.currentItem = null;
            }
        }
    }
</script>
