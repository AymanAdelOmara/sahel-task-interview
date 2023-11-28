<script>
    export default {
        name: "AppSaveButton",
        props: ['isClicked'],
        methods: {click() {this.$emit("saveClick", null)}}
    }
</script>
<template>
    <button class="btn ripple btn-primary" type="button" @click="click()" v-bind:class="{ 'disabled': isClicked }">
        <i class="fa fa-cog" v-bind:class="{ 'fa-spin': isClicked }"></i>   حفظ
    </button>
</template>
