<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '/v1'], function () {
    Route::prefix('admin')->group(base_path('routes/api_admin.php'));
    Route::prefix('customer')->group(base_path('routes/api_customer.php'));
});
