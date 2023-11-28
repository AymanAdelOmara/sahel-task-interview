<template>
    <div class="modal effect-fall show" :id="formId" :ref="formId">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content modal-content-demo" v-if="itemValue">
                <div class="modal-header">
                    <h6 class="modal-title">بيانات الدولة</h6>
                    <button aria-label="Close" class="close" data-dismiss="modal" type="button">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <p class="mb-2">إسم الدولة</p>
                                <input
                                    id="title_ar"
                                    v-model="itemValue.name"
                                    :class="!$v.itemValue.name.required && $v.itemValue.$dirty ? 'is-invalid state-invalid' : ''"
                                    type="text" class="form-control" title="">
                                <div v-if="!$v.itemValue.name.required && $v.itemValue.$dirty" class="invalid-feedback">
                                    <span>هذا الحقل مطلوب</span>
                                </div>
                                <div ref="validateUnique.name">
                                    <span v-if="validateUnique.name.is_error" class="invalid-feedback show" >
                                        <span>هذه القيمة مستخدمة من قبل</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <p class="mb-2">تكلفة الشحن لكل 100 جرام</p>
                                <input
                                    id="shipped_rate"
                                    v-model="itemValue.shipping_rate"
                                    :class="!$v.itemValue.shipping_rate.required && $v.itemValue.$dirty ? 'is-invalid state-invalid' : ''"
                                    type="text" class="form-control" title="">
                                <div v-if="!$v.itemValue.shipping_rate.required && $v.itemValue.$dirty" class="invalid-feedback">
                                    <span>هذا الحقل مطلوب</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <app-save-button @saveClick="submit" :is-clicked="isSaveClicked"></app-save-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {required} from 'vuelidate/lib/validators'
    import PictureInput from 'vue-picture-input'
    import AppSaveButton from "../shared/AppSaveButton";
    import HTTPService from '../../services/Products';

    export default {
        name: "modal_countries_form",
        props: ['item', 'formId'],
        components: {
            AppSaveButton,
            PictureInput
        },
        data() {
            return {
                isSaveClicked: false,
                itemValue: {

                },
                validateUnique:{
                    name:{
                        is_error: false
                    }
                }
            }
        },
        validations: {
            itemValue: {
                name: {
                    required
                },
                shipping_rate: {
                    required
                },
            }
        },
        mounted() {
            this.initFormModal();
        },
        methods: {
            submit() {
                this.$v.$touch();
                if (!this.$v.$invalid && !this.isSaveClicked) {
                    this.isSaveClicked = true;
                    if (this.itemValue.id != null) {
                        HTTPService.updateCountry(this.itemValue).then((res) => {
                            this.$emit("onUpdateItem", res.data);
                            this.isSaveClicked = false;
                            $('#' + this.formId).modal('hide');
                            this.$swal({title: 'تم تعديل بيانات الدولة بنجاح !', text: '', timer: 1000});
                        }).catch((error) => {
                            this.isSaveClicked = false;
                            this.$inputUniqueErrorsHandler(error.response.data.validator, this.validateUnique);
                        })
                    } else {
                        HTTPService.createCountry(this.itemValue).then((res) => {
                            this.$emit("onAddItem", res.data);
                            this.isSaveClicked = false;
                            $('#' + this.formId).modal('hide');
                            this.$swal({title: 'تم انشاء الدولة بنجاح !', text: '', timer: 1000});
                        }).catch((error) => {
                            this.isSaveClicked = false;
                            this.$inputUniqueErrorsHandler(error.response.data.validator, this.validateUnique);
                        })
                    }
                }
            },
            initFormModal(){
                $(this.$refs[this.formId]).on("hidden.bs.modal", () => {
                    this.$v.$reset();
                    setTimeout(() => {this.itemValue = null;})
                });
                $(this.$refs[this.formId]).on("show.bs.modal", () => {
                    this.itemValue = this.item;
                });
            },
        }
    }
</script>
