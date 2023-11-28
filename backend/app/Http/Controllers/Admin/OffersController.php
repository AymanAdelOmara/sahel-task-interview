<?php

namespace App\Http\Controllers\Admin;

use Symfony\Component\HttpFoundation\Response;

class OffersController extends AdminBaseController
{
    public function getOffers()
    {
        return response(['offers' => []], Response::HTTP_OK);
    }

}
