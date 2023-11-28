<template>
    <div>
        <!-- Loader -->
        <AppGlobalLoader></AppGlobalLoader>
        <!-- End Loader -->

        <!-- Page -->
        <div class="page">

            <!-- Sidemenu -->
            <AppSideMenu></AppSideMenu>
            <!-- End Sidemenu -->

            <!-- Main Content-->
            <div class="main-content side-content pt-0">

                <!-- Main Header-->
                <AppMainHeader></AppMainHeader>
                <!-- End Main Header-->

                <div class="container-fluid" id="main-container">
                    <AppNaviagteLoader></AppNaviagteLoader>
                    <router-view></router-view>
                </div>

            </div>
            <!-- End Main Content-->
            <!-- Main Footer-->
            <AppFooter></AppFooter>
            <!--End Footer-->

        </div>
        <!-- End Page -->
    </div>
</template>

<script>
    import AppGlobalLoader from "./AppGlobalLoader";
    import AppSideMenu from "./AppSideMenu";
    import AppFooter from "./AppFooter";
    import AppMainHeader from "./AppMainHeader";
    import AppNaviagteLoader from "./AppNavigateLoader";

    export default {
        name: "MainLayout",
        components: {AppNaviagteLoader, AppMainHeader, AppFooter, AppSideMenu, AppGlobalLoader},
        created() {

        },
        mounted() {
            $("#global-loader").fadeOut("slow");
        }
    }
</script>
<style scoped>
    #main-container {
        position: relative;
    }
</style>
