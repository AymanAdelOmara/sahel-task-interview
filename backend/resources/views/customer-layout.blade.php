<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SAHEL</title>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link rel="stylesheet" href="{{asset('web/css/bootstrap-en.css') }}"/>
    <link rel="stylesheet" href="{{asset('web/css/all-en.css') }}"/>
    <link rel="stylesheet" href="{{asset('web/css/style.css') }}"/>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <div id="app">
        <router-view></router-view>
    </div>
    <script>
        window.app_url = "{{request()->root()}}";
    </script>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://kit.fontawesome.com/3706214aa1.js" crossorigin="anonymous"></script>
    <script src="{{asset('web/js/customers/vue-customers.js?v=111')}}"></script>
</body>
</html>
