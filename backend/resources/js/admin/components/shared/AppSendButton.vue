<script>
    export default {
        name: "AppSendButton",
        props: ['isClicked'],
        methods: {click() {this.$emit("saveClick", null)}}
    }
</script>
<template>
    <button class="btn sendmsg " type="button" @click="click()" v-bind:class="{ 'disabled': isClicked }">
        <i class="fa fa-paper-plane" v-bind:class="{ 'fa-spin': isClicked }"></i>
    </button>
</template>