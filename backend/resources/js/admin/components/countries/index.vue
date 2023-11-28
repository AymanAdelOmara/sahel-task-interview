<template>
    <div>
        <div class="page-header">
            <div>
                <h2 class="main-content-title tx-24 mg-b-5">الدول</h2>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">الدول </li>
                </ol>
            </div>
            <button class="modal-effect btn ripple btn-success" @click="showCreateForm()">
                <i class="fe fe-plus-circle ml-2"></i>
                <span>أضف دولة جديد</span>
            </button>
        </div>
        <div class="row -sidemenu-height">
            <div class="col-sm-12 col-md-6 col-lg-6" v-for="item in items">
                <div class="card custom-card">
                    <div class="card-body">
                        <div class="user-lock">
                            <div class="dropdown text-left" style="float: left">
                                <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fe fe-more-horizontal text-dark fs-16"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-leftshadow" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0; left: 0; transform: translate3d(0px, 19px, 0px);">
                                    <a class="dropdown-item" href="javascript:void(0)" @click="showEditForm(item)">تعديل<i class="fe fe-message-square ml-2"></i> </a>
                                </div>
                            </div>
                            <h5 class="m-0">Name: {{item.name}}</h5>
                            <h5 class="m-0">Shipping Rate: {{item.shipping_rate }}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <CountriesForm v-if="currentItem" @onAddItem="addItem" @onUpdateItem="updateItem" :item="currentItem" :formId="formId"/>
    </div>
</template>

<script>
    import Service from '../../services/Products';
    import CountriesForm from './CountriesForm';

    export default {
        name: "Countries",
        data() {
            return {
                formId: "modal_countries_form",
                items: [],
                item: {
                    name: null,
                    shipping_rate: null,
                },
                currentItem: null
            }
        },
        components: {CountriesForm},
        mounted() {
            this.getItems();
        },
        methods: {
            getItems() {
                Service.getCountries().then((response) => {
                    this.items = response.data;
                    console.log(this.items)
                    this.$hideLoader();
                });
            },
            showCreateForm() {
                this.currentItem = Object.assign({}, this.item);
                setTimeout(() => {
                    $('#' + this.formId).modal('show');
                }, 100)
            },
            showEditForm(item) {
                this.currentItem = Object.assign({}, item);
                setTimeout(() => {
                    $('#' + this.formId).modal('show');
                }, 100)
            },
            addItem(item) {
                this.items = [item, ...this.items];
                this.currentItem = Object.assign({}, item);
                $('#' + this.formId).modal('hide')
            },
            updateItem(item) {
                let findIndex = this.items.findIndex(_item => _item.id === item.id);
                this.items[findIndex] = item;
                this.currentItem = null;
                $('#' + this.formId).modal('hide')
            }
        }
    }
</script>
