const mix = require('laravel-mix');
require('dotenv').config();
const app_path = process.env.public_path === '' ? '/' : process.env.public_path;

mix['js']('resources/js/admin/app-admin.js', 'public/admin_style/js/vue')
.webpackConfig({
    output: {
        publicPath: app_path,
        chunkFilename: 'admin_style/js/vue/[name].[chunkhash].js',
    },
});

