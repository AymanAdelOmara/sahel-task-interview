const mix = require('laravel-mix');
require('dotenv').config();
const app_path = process.env.public_path === '' ? '/' : process.env.public_path;

mix['js']('resources/js/customers/vue-customers.js', 'public/web/js/customers')
.webpackConfig({
    output: {
        publicPath: app_path,
        filename: '[name].js',  // filename: process.env.public_path === '' ? '[name].js' : '[name].[hash].js',
        chunkFilename: 'web/js/customers/[name].[chunkhash].js',
    },
});

