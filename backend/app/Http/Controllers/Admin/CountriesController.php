<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CountriesRequest;
use App\Models\Country;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;

class CountriesController extends AdminBaseController
{

    /**
     * Display a listing of the resource.
     *
     * @return ResponseFactory|Response
     */
    public function index()
    {
        $countries = Country::orderBy('id', 'DESC')->get();
        return response($countries, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CountriesRequest $request
     * @return Response
     */
    public function store(CountriesRequest $request)
    {
        $country = new Country;
        $country = $this->saveCountry($country, $request);
        return response($country, Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        $country = Country::find($id);
        return response($country, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CountriesRequest $request
     * @param Country $country
     * @return Response
     */
    public function update(CountriesRequest $request, Country $country)
    {
        $country = $this->saveCountry($country, $request);
        return response($country, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return Response
     */
    public function destroy($id)
    {
        $country = Country::find($id);
        if ($country != null) {
            if ($country->delete()) {
                return response(['message' => trans('admin.item_delete_successfully')], Response::HTTP_OK);
            }
        }
        return response(['message' => trans('admin.item_delete_error')], Response::HTTP_BAD_REQUEST);

    }

    private function saveCountry(Country $country, CountriesRequest $request)
    {
        $country->name = $request->name;
        $country->slug = $request->name;
        $country->shipping_rate = $request->shipping_rate;
        if ($country->save())
            return $country;
        return false;
    }

}
