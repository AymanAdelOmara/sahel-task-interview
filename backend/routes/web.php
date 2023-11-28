<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['prefix' => 'admin'], function () {
    Route::get(
        '/{any?}',
        function (){
            return view('admin-layout');
        }
    )->where(
        'any',
        '.*'
    );
});
Route::group(['prefix' => '/'], function () {

//    dd("UP&RUNNING");
//    Route::get(
//        '/{any?}',
//        function (){
//            return view('customer-layout');
//        }
//    )->where(
//        'any',
//        '.*'
//    );
});