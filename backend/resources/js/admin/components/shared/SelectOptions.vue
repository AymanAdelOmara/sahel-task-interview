<template>
    <div class="" v-if="options.length > 0">
        <p class="mb-2">{{title}}</p>
        <div class="form-control"
             style="padding: 0;"
             :class="classValidator">
            <select v-model="selectedOption"
                    :id="name"
                    class="select-md select2"
                    data-size="10"
                    data-dropup-auto="false"
                    data-none-selected-text=""
                    title="">
                <option disabled value="null">إختر {{title}}</option>
                <option v-for="(option) in options"
                        :value="option.id">
                    {{option[$propShow]}}
                </option>
            </select>
        </div>
        <ValidatorError :name="name" :parent="parent" rule="required"/>
    </div>
</template>

<script>
    import ValidatorError from "../shared/ValidatorError";

    export default {
        name: "SelectOptions",
        data() {
            return {
                selectedOption: null
            }
        },
        components: {
            ValidatorError,
        },
        props: {
            name: null,
            $propShow: null,
            value: null,
            parent: '',
            title: '',
            options: [],
            classValidator: null,
        },
        beforeUpdate() {
            this.selectedOption = this.value;
            setTimeout(() => {
                $('#' + this.name).select2({
                    placeholder: 'إختر ' + this.title,
                    searchInputPlaceholder: 'بحث',
                    width: '100%',
                    dir: 'rtl',
                    noResults: 'لم يتم العثور على اي نتيجه متطابقة'
                }).on("change", (event) => {
                    this.$emit("input", event.target.value);
                });
            }, 20);
        },
        mounted() {
            this.selectedOption = this.value;
        },
        methods: {

        },
        watch: {
            value: function (newValue) {
                this.selectedOption = newValue;
            }
        }
    }
</script>
