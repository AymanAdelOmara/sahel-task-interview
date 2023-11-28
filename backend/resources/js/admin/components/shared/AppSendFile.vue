<template>
    <button class="btn sendmsg " type="button" @click="click()" v-bind:class="{ 'disabled': isClicked }">
        <i class="fa fa-file" v-bind:class="{ 'fa-spin': isClicked }"></i>
    </button>
</template>

<script>
    export default {
        name: "AppSendFile",
        props: ['isClicked'],
        methods: {click() {this.$emit("saveClick", null)}}
    }
</script>