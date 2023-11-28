<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BaseModel;

class AdminBaseController extends Controller
{
    public $language;
    public $config;
    public $ip_address;

    public function __construct()
    {
        $this->language = (request()->hasHeader("x-localization")) ? request()->header("x-localization") : 'ar';
        BaseModel::setLanguage($this->language);
        app()->setLocale($this->language);
    }

}
