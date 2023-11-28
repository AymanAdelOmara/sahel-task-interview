<template>
    <div id="admin-app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "main-component",
        data() {
            return {

            }
        },
        mounted() {
            this.$hideLoader();
        }
    }
</script>
