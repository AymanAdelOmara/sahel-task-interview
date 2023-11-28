<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "MainLayout",
        created() {

        },
        mounted() {
            $("#global-loader").fadeOut("slow");
        }
    }
</script>

