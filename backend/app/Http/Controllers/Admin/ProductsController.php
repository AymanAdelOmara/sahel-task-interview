<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ProductsRequest;
use App\Models\Product;
use Illuminate\Http\Response;

class ProductsController extends AdminBaseController
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     * @noinspection PhpUndefinedMethodInspection
     */
    public function index()
    {
        $shippedFromId = request()->shipped_from_id ?? null;
        $products = Product::orderBy('id', 'desc');
        if ($shippedFromId != null) {
            $products = $products->where(function ($query) {
                $query->where('shipped_from_id', '<', 1);
            });
        }
        $products = $products->paginate(60);
        return response($products, Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        return response($product, Response::HTTP_OK);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param ProductsRequest $productsRequest
     * @return Response
     */
    public function store(ProductsRequest $productsRequest)
    {
        $product = $this->saveProductData(new Product, $productsRequest);
        return response($product, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductsRequest $productsRequest
     * @param Product $product
     * @return Response
     * @noinspection PhpUndefinedMethodInspection
     */
    public function update(ProductsRequest $productsRequest, Product $product)
    {
        $product = $this->saveProductData($product, $productsRequest);
        return response($product, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     * @noinspection PhpUndefinedMethodInspection
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        if ($product != null) {
            if ($product->delete()) {
                return response(['message' => trans('admin.item_delete_successfully')], Response::HTTP_OK);
            }
        }
        return response(null, Response::HTTP_BAD_REQUEST);
    }

    /**
     *
     * @param $product
     * @param $request
     * @return boolean
     * @noinspection PhpUndefinedMethodInspection
     */
    private function saveProductData($product, ProductsRequest $request)
    {
        $product->name = trim($request->name);
        $product->shipped_from_id = $request->shipped_from_id;
        $product->price = $request->price;
        $product->weight = $request->weight;
        if ($product->save()) {
            return $product;
        }
        return false;
    }
}
