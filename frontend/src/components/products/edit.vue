<template>
    <div v-if="product != null && countries.length > 0">
        <div class="page-header">
            <div>
                <h2 class="main-content-title tx-24 mg-b-5">بيانات المنتج</h2>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link active-class="activeRouter" to="/admin">لوحة التحكم</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link active-class="activeRouter" to="/admin/products"> المنتجات</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{product.id? product.name : 'إضافة منتج جديد'}}
                    </li>
                </ol>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="card custom-card">
                    <div class="card-body">
                        <div>
                            <h6 class="card-title mb-1"></h6>
                        </div>
                        <div class="row row-sm">
                            <div class="col-sm-12 col-md-3">
                                <div class="form-group">
                                    <p class="mb-2">إسم المنتج</p>
                                    <input id="title_ar"
                                           v-model="product.name"
                                           :class="$inputError('name', ['required'], $v.product)"
                                           type="text" class="form-control" title="">
                                    <div v-if="!$v.product.name.required && $v.product.$dirty" class="invalid-feedback">
                                        <span>هذا الحقل مطلوب</span>
                                    </div>
                                    <div ref="validateUnique.name">
                                    <span v-if="validateUnique.name.is_error" class="invalid-feedback show">
                                        <span>{{validateUnique.name.message}}</span>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <div class="form-group">
                                    <p class="mb-2">سعر المنتج</p>
                                    <input id="price"
                                           v-model="product.price"
                                           :class="$inputError('price', ['required'], $v.product)"
                                           type="text" class="form-control" title="">
                                    <div v-if="!$v.product.price.required && $v.product.$dirty"
                                         class="invalid-feedback">
                                        <span>هذا الحقل مطلوب</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <div class="form-group">
                                    <p class="mb-2">الوزن </p>
                                    <input id="weight"
                                           v-model="product.weight"
                                           type="text" class="form-control" title="">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <div class="form-group">
                                    <select-options
                                            :$propShow="'name'"
                                            v-model="product.shipped_from_id"
                                            :value="product.shipped_from_id === null ? null : product.shipped_from_id"
                                            :classValidator="$inputError('shipped_from_id', ['required'], $v.product)"
                                            :options="countries"
                                            :parent="$v.product"
                                            :name="'shipped_from_id'"
                                            style="padding: 0;"
                                            :title="'دولة الشحن'"/>
                                </div>
                            </div>
                            <div class="col-md-12 mt-3 text-left">
                                <hr>
                                <app-save-button @saveClick="submit" :is-clicked="isSaveClicked"></app-save-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {required} from "vuelidate/lib/validators";
    import AppSaveButton from "../shared/AppSaveButton";
    import SelectOptions from "../shared/SelectOptions";
    import productsService from '../../services/Products';

    export default {
        name: "ProductsDetails",
        components: {
            AppSaveButton,
            SelectOptions
        },
        data() {
            return {
                isSaveClicked: false,
                product: null,
                itemValue: null,
                countries: [],
                validateUnique: {
                    name: {
                        is_error: false
                    }
                }
            }
        },
        validations: {
            product: {
                name: {
                    required
                },
                price: {
                    required
                },

                shipped_from_id: {
                    required
                },
                weight: {
                    required
                }
            }
        },
        async mounted() {
            const id = this.$route.params['id'];
            await productsService.getCountries().then((response) => {
                this.countries = response.data;
                if (id !== '0') {
                    productsService.getById(id).then((res) => {
                        this.product = res.data;
                        this.$hideLoader();
                    })
                } else {
                    this.product = {
                        name: null,
                        price: null,
                        shipped_from_id: null,
                        weight: null,
                    };
                    this.$hideLoader();
                }
            });
        },
        methods: {
            submit() {
                this.$v.$touch();
                if (!this.$v.$invalid && !this.isSaveClicked) {
                    this.isSaveClicked = true;
                    if (this.product.id != null) {
                        productsService.updateProduct(this.product).then(() => {
                            this.isSaveClicked = false;
                            this.$swal({
                                title: this.$localization['update_suc'],
                                text: '',
                                type: 'success',
                                timer: 1000
                            });
                        }).finally(() => this.isSaveClicked = false)
                    } else {
                        productsService.createProduct(this.product).then(() => {
                            this.isSaveClicked = false;
                            this.$swal({
                                title: 'تم اضافة المنتج بنجاح !',
                                text: '',
                                type: 'success',
                                timer: 1000
                            });
                        }).finally(() => this.isSaveClicked = false)
                    }
                }
            },
        }
    }
</script>

