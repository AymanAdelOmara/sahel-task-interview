<template>
    <div>
        <div class="page-header">
            <div>
                <h2 class="main-content-title tx-24 mg-b-5">العروض</h2>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">العروض</li>
                </ol>
            </div>
            <button class="modal-effect btn ripple btn-success">
                <i class="fe fe-plus-circle ml-2"></i>
                <span>أضف عرض جديد</span>
            </button>
        </div>
        <div class="row sidemenu-height">
            <div class="col-xl-4 col-md-4" v-for="item in items">
                <div class="card custom-card">
                    <img class="card-img-top w-100 blog-img" style="height:200px" :src="$imagePath + '/media/4.jpg'" alt="">
                    <div class="card-body">
                        <h4 class="card-title">{{item.name}}</h4>
                        <hr>
                        <div class="text-left btn-list">
                            <button @click="editItem(item)" class="btn ripple btn-primary"><i class="fe fe-airplay"></i>
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SelectOptions from "../shared/SelectOptions";

    export default {
        name: "Offers",
        data() {
            return {
                formId: "modal_offers_form",
                items: [],
                sizes: null,
                item: {

                },
                count: null,
                currentItem: null
            }
        },
        watch: {

        },
        components: {
            SelectOptions,
        },
        mounted() {
            this.$hideLoader();
        },
        methods: {

        }
    }
</script>
