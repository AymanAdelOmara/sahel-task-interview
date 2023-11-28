<template>
    <div>
        <AppGlobalLoader></AppGlobalLoader>
        <div class="page main-signin-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import AppGlobalLoader from './AppGlobalLoader'

    export default {
        name: "AuthLayout",
        components: {
            AppGlobalLoader
        },
        mounted() {
            $("#global-loader").fadeOut("normal");
            const theme = localStorage.getItem('theme');
            if(theme === '0'){
                $('body').addClass('dark-theme');
                this.theme = 'Light';
            } else {
                $('body').removeClass('dark-theme');
                this.theme = 'Dark';
            }
        }
    }
</script>
