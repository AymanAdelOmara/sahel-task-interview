<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>SAHEL</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="{{asset('admin_style/images')}}/fav.png">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta name="theme-color" content="#ccc">
    <!---Fontawesome css-->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="{{asset('admin_style/plugins/ionicons/css/ionicons.min.css') }}"/>
    <!---Typicons css-->
    <link rel="stylesheet" href="{{asset('admin_style/plugins/typicons.font/typicons.css') }}"/>
    <!---Feather css-->
    <link rel="stylesheet" href="{{asset('admin_style/plugins/feather/feather.css') }}"/>
    <!---Falg-icons css-->
    <link rel="stylesheet" href="{{asset('admin_style/plugins/flag-icon-css/css/flag-icon.min.css') }}"/>
    <!---Select2 css-->
    <link rel="stylesheet" href="{{asset('admin_style/plugins/select2/css/select2.min.css') }}"/>
    <!---Style css-->
    <link rel="stylesheet" href="{{asset('admin_style/css/style.css') }}"/>
    <link rel="stylesheet" href="{{asset('admin_style/css/custom-style.css') }}"/>
    <link rel="stylesheet" href="{{asset('admin_style/css/skins.css') }}"/>
    <link rel="stylesheet" href="{{asset('admin_style/css/dark-style.css') }}"/>
    <link rel="stylesheet" href="{{asset('admin_style/css/custom-dark-style.css') }}"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!---Sidebar css-->
    <link rel="stylesheet" href="{{asset('admin_style/plugins/sidebar/sidebar.css') }}"/>
    <!---Sidemenu css-->
    <link rel="stylesheet" href="{{asset('admin_style/plugins/sidemenu/closed-sidemenu-rtl.css') }}"/>
    <link rel="stylesheet" href="{{asset('admin_style/css/add.css') }}"/>
{{--    <link rel="stylesheet" href="{{ asset('site/css/all.min.css') }}">--}}

</head>
<body class="main-body">
    <div id="admin-app">
        <router-view></router-view>
    </div>
    <script>window.app_url = "{{request()->root()}}";</script>
    <script>window.assets = "{{ asset('/') }}";</script>
    <!-- Jquery js-->
    <script src="{{ asset('admin_style/plugins/jquery/jquery.min.js') }}"></script>

    <!-- Bootstrap js-->
    <script src="{{ asset('admin_style/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <!-- Ionicons js-->
    <script src="{{ asset('admin_style/plugins/ionicons/ionicons.js') }}"></script>
    <!-- Select2 js-->
    <script src="{{ asset('admin_style/plugins/select2/js/select2.full.min.js') }}"></script>
    <!-- Rating js-->
    <script src="{{ asset('admin_style/plugins/rating/jquery.rating-stars.js') }}"></script>
    <!-- Perfect-scrollbar js-->
    <script src="{{ asset('admin_style/plugins/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>
    <!-- Sidebar js-->
    <script src="{{ asset('admin_style/plugins/sidebar/sidebar-rtl.js') }}"></script>
    <!-- Custom js-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

    <script src="{{ asset('admin_style/plugins/sweet-alert/sweetalert.min.js') }}"></script>
    <script src="{{ asset('admin_style/plugins/sweet-alert/jquery.sweet-alert.js') }}"></script>
    {{--    <script src="{{ asset('admin_style/js/custom.js') }}"></script>--}}
    <script src="https://kit.fontawesome.com/e37aeb0c17.js" crossorigin="anonymous"></script>

    <script src="{{ asset('admin_style/js/vue/app-admin.js') }}"></script>

</body>
</html>

