<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string name
 * @property string slug
 * @property float shipping_rate
 * @property integer id
 */
class Country extends Model
{
    protected $table = 'countries';
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'shipping_rate'
    ];
}
