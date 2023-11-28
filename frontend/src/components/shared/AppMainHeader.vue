<template>
    <!-- Main Header-->
    <div class="main-header side-header sticky">
        <div class="container-fluid">
            <div class="main-header-left">
                <a class="main-logo d-lg-none" href="#">
                    <img :src="this.$imagePath + '/brand/logo.png'" class="header-brand-img desktop-logo" alt="logo">
                    <img :src="this.$imagePath + '/brand/logo.png'" class="header-brand-img icon-logo" alt="logo">
                    <img :src="this.$imagePath + '/brand/logo-w.png'" class="header-brand-img desktop-logo theme-logo" alt="logo">
                    <img :src="this.$imagePath + '/brand/logo-w.png'" class="header-brand-img icon-logo theme-logo" alt="logo">
                </a>
                <a class="main-header-menu-icon" href="" id="mainSidebarToggle"><span></span></a>
            </div>
            <div class="main-header-right">
                <div class="dropdown d-md-flex header-search">
                    <a class="nav-link icon header-search">
                        <i class="fe fe-search"></i>
                    </a>
                    <div class="dropdown-menu">
                        <div class="main-form-search p-2">
                            <input class="form-control" placeholder="Search" type="search">
                            <button class="btn"><i class="fe fe-search"></i></button>
                        </div>
                    </div>
                </div>
                <div class="dropdown d-md-flex">
                    <a class="nav-link icon full-screen-link">
                        <i class="fe fe-maximize fullscreen-button"></i>
                    </a>
                </div>

                <div class="dropdown main-profile-menu " >
                    <a class="main-img-user" href="">
                        <img alt="avatar" :src="this.$imagePath + '/avatar_male.png'">
                    </a>
                    <div class="dropdown-menu" >
                        <div class="header-navheading">
                            <h6 class="main-notification-title">{{this.firstName + ' ' + this.lastName}}</h6>
                            <p class="main-notification-text">{{this.roleName}}</p>
                        </div>
                        <a class="dropdown-item" href="javascript:void(0)">
                            <i class="fe fe-settings"></i>إعدادات الحساب
                        </a>
                        <a class="dropdown-item" @click="changeTheme()" href="javascript:void(0)">
                            <i class="fe fe-settings"></i> <span>{{theme}} Theme </span>
                        </a>
                        <a class="dropdown-item" href="javascript:void(0)" @click="logout">
                            <i class="fe fe-power"></i> تسجيل الخروج
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Main Header-->
</template>

<script>
    import AuthService from '../../services/Auth'

    export default {
        name: "AppMainHeader",
        data() {

            return {
                userTheme: localStorage.getItem('theme'),
                firstName: localStorage.getItem('adminFirstName'),
                lastName: localStorage.getItem('adminLastName'),
                roleName: localStorage.getItem('role'),
                theme: 'Dark',
            }
        },
        methods: {
            logout(e) {
                e.preventDefault();
                AuthService.logOut().then(() => {
                    AuthService.removeAuthLocalStorage();
                    this.$router.push({name: 'AuthLogin'}).then().catch();
                });
            },
            changeUserThem() {
                AuthService.updateUserTheme().then((res) => {
                    localStorage.setItem("theme", res.data['theme']);
                });
            },
            setTheme() {
                const is_dark = localStorage.getItem('theme');
                const themeLayout = localStorage.getItem('theme');

                if (is_dark) {
                    this.$jQUery('body').addClass('dark-theme');
                    this.theme = 'Light';

                } else {
                    this.$jQUery('body').removeClass('dark-theme');
                    this.theme = 'Dark';
                }
                return themeLayout;
            },
            changeTheme() {
                this.changeUserThem();
                if (this.theme === 'Dark') {
                    this.$jQUery('body').addClass('dark-theme');
                    this.theme = 'Light';
                } else {
                    this.$jQUery('body').removeClass('dark-theme');
                    this.theme = 'Dark';
                }
            }
        },
        mounted() {
            this.setTheme();
            if (window.matchMedia('(min-width: 992px)').matches) {
                this.$jQUery('.main-navbar .active').removeClass('show');
                this.$jQUery('.main-header-menu .active').removeClass('show');
            }
            this.$jQUery('.main-header .dropdown > a').on('click', function (e) {
                e.preventDefault();
                this.$jQUery(this).parent().toggleClass('show');
                this.$jQUery(this).parent().siblings().removeClass('show');
            });
            this.$jQUery('.main-navbar .with-sub').on('click', function (e) {
                e.preventDefault();
                this.$jQUery(this).parent().toggleClass('show');
                this.$jQUery(this).parent().siblings().removeClass('show');
            });
            this.$jQUery('.dropdown-menu .main-header-arrow').on('click', function (e) {
                e.preventDefault();
                this.$jQUery(this).closest('.dropdown').removeClass('show');
            });
            this.$jQUery('#mainNavShow, #azNavbarShow').on('click', function (e) {
                e.preventDefault();
                this.$jQUery('body').addClass('main-navbar-show');
            });
            this.$jQUery('#mainContentLeftShow').on('click touch', function (e) {
                e.preventDefault();
                this.$jQUery('body').addClass('main-content-left-show');
            });
            this.$jQUery('#mainContentLeftHide').on('click touch', function (e) {
                e.preventDefault();
                this.$jQUery('body').removeClass('main-content-left-show');
            });
            this.$jQUery('#mainContentBodyHide').on('click touch', function (e) {
                e.preventDefault();
                this.$jQUery('body').removeClass('main-content-body-show');
            });
            this.$jQUery('body').append('<div class="main-navbar-backdrop"></div>');
            this.$jQUery('.main-navbar-backdrop').on('click touchstart', function () {
                this.$jQUery('body').removeClass('main-navbar-show');
            });

            //MainMenuShow
            this.$jQUery('#mainMenuShow').on('click', function (e) {
                e.preventDefault();
                this.$jQUery('body').toggleClass('main-header-menu-show');
            });
            this.$jQUery('.main-header-menu .with-sub').on('click', function (e) {
                e.preventDefault();
                this.$jQUery(this).parent().toggleClass('show');
                this.$jQUery(this).parent().siblings().removeClass('show');
            });
            this.$jQUery('.main-header-menu-header .close').on('click', function (e) {
                e.preventDefault();
                this.$jQUery('body').removeClass('main-header-menu-show');
            });

            //Full screen
            this.$jQUery(document).on("click", ".fullscreen-button", function toggleFullScreen() {
                if ((document['fullScreenElement'] !== undefined && document['fullScreenElement'] === null) || (document['msFullscreenElement'] !== undefined && document['msFullscreenElement'] === null) || (document['mozFullScreen'] !== undefined && !document['mozFullScreen']) || (document['webkitIsFullScreen'] !== undefined && !document['webkitIsFullScreen'])) {
                    if (document.documentElement['requestFullScreen']) {
                        document.documentElement['requestFullScreen']();
                    } else if (document.documentElement['mozRequestFullScreen']) {
                        document.documentElement['mozRequestFullScreen']();
                    } else if (document.documentElement['webkitRequestFullScreen']) {
                        document.documentElement['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']);
                    } else if (document.documentElement['msRequestFullscreen']) {
                        document.documentElement['msRequestFullscreen']();
                    }
                } else {
                    if (document['cancelFullScreen']) {
                        document['cancelFullScreen']();
                    } else if (document['mozCancelFullScreen']) {
                        document['mozCancelFullScreen']();
                    } else if (document['webkitCancelFullScreen']) {
                        document['webkitCancelFullScreen']();
                    } else if (document['msExitFullscreen']) {
                        document['msExitFullscreen']();
                    }
                }
            })
        }
    }
</script>
