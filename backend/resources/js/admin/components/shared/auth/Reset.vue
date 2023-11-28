<template>
    <div class="row text-center pl-0 pr-0 ml-0 mr-0">
        <div class="col-lg-5 d-block mx-auto">
            <div class="text-center mb-2">
                <img :src="this.$imagePath + '/brand/logo.png'" class="header-brand-img desktop-logo" alt="logo">
                <img :src="this.$imagePath + '/brand/logo-w.png'" class="header-brand-img desktop-logo theme-logo" alt="logo">
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <form v-on:submit.prevent="submit">
                        <h4 class="text-center">إستعادة كلمة المرور</h4>
                        <div class="col-md-12" v-if="errors.message">
                            <div class="col-md-12 text-center alert alert-danger">
                                <strong>{{errors.message}}</strong>
                            </div>
                        </div>
                        <div class="form-group text-right">
                            <label>البريد الالكترونى</label>
                            <input
                                :class="(!$v.formInputs.email.required || !$v.formInputs.email.email) && $v.formInputs.$dirty ? 'is-invalid state-invalid' : ''"
                                v-model="formInputs.email" class="form-control" placeholder="ادخل البريد الالكترونى" type="text">
                            <div v-if="!$v.formInputs.email.required  && $v.formInputs.$dirty" class="invalid-feedback">
                                <span>هذا الحقل ضروري</span>
                            </div>
                            <div v-if="!$v.formInputs.email.email  && $v.formInputs.$dirty" class="invalid-feedback">
                                <span>يجب أن يكون عنوان بريد إلكتروني صالحًا</span>
                            </div>
                        </div>
                        <button type="submit" :disabled="isSubmit" class="btn ripple btn-main-primary btn-block">إرسال </button>
                    </form>
                    <div class="mt-3 text-right">
                        <p class="mb-1">
                            <router-link active-class="activeRouter" to="/admin/auth/login">تسجيل الدخول</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'
    import AuthService from '../../../services/Auth'

    export default {
        name: "Login",
        data() {
            return {
                isSubmit: false,
                formInputs: {
                    email: null
                },
                errors: {
                    message: null,
                }
            }
        },
        validations: {
            formInputs: {
                email: {email, required}
            }
        },
        methods: {
            submit() {
                this.errors.message = null;
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    this.isSubmit = true;
                    AuthService.forgotPassword(this.formInputs.email).then((response) => {
                        AuthService.setAuthLocalStorage(response.data);

                    })
                    .catch((error) => {
                        this.errors.message = error.response.data.message;
                    })
                    .finally(() => this.isSubmit = false);
                }
            }
        }
    }
</script>
