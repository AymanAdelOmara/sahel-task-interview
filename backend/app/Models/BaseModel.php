<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    private static $language;

    /**
     * @return string
     */
    public static function getLanguage()
    {
        return self::$language;
    }

    /**
     * @param string $language
     */
    public static function setLanguage(string $language)
    {
        self::$language = $language;
    }
}
