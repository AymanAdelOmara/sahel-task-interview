<?php

namespace App\Services;

use App\Models\Product;
use App\Models\OrderItem;
use App\Services\Interfaces\OfferServiceInterface;
use App\Services\Interfaces\OrderServiceInterface;

class OrderService implements OrderServiceInterface
{
    private static $vat_percent = 14;
    protected $offersService;

    private $productsIds = [];
    private $orderItems = [];
    private $subTotal = 0;
    private $shippingAmount = 0;
    private $shippingAmountDiscount = 0;
    private $vatAmount = 0;
    private $discountsAmount = 0;
    private $totalAmount = 0;

    public $shippingOffers = [];
    public $productsOffers = [];

    public function __construct(OfferServiceInterface $offersService)
    {
        $this->offersService = $offersService;
        $this->productsOffers = $this->offersService->getProductsOffers();
        $this->shippingOffers = $this->offersService->getShippingOffers();
    }

    /**
     * @param array $productsIds
     */
    public function createShoppingCart(array $productsIds)
    {
        $this->setProductsIds($productsIds);
        foreach ($this->productsIds as $productId) {
            $product = Product::find($productId);
            $orderItem = $this->createOrderItem($product);

            $this->subTotal += $orderItem->price;
            $this->shippingAmount += $orderItem->shippingAmount;
            $this->discountsAmount += $orderItem->discountAmount;
            $this->vatAmount = round((($this->subTotal) * self::$vat_percent / 100), 4);

            foreach ($this->shippingOffers as $offer) {
                $result = $this->offersService->checkShippingDiscount($product, $this->productsIds, $offer);
                if ($result > 0) {
                    $this->shippingAmountDiscount = $result;
                    break;
                }
            }
        }
        $this->setTotalAmount();

    }

    private function createOrderItem(Product $product): OrderItem
    {
        $orderItem = new OrderItem();
        $orderItem->productId = $product->id;
        $orderItem->price = $product->price;
        $orderItem->shippingAmount = $product->getShippingCost();
        $orderItem->discountPercent = 0;
        $orderItem->discountAmount = 0;
        foreach ($this->productsOffers as $offer) {
            $result = $this->offersService->checkProductDiscount($product, $this->productsIds, $offer);
            if ($result > 0) {
                $orderItem->discountPercent = $result;
                $orderItem->discountAmount = ($orderItem->price * $result / 100);
                break;
            }
        }
        $this->orderItems[] = $orderItem;

        return $orderItem;
    }


    public function getShoppingCartData()
    {
        return [
            'orderItems' => $this->getOrderItems(),
            'subTotal' => $this->getSubTotal(),
            'vatAmount' => $this->getVatAmount(),
            'discountsAmount' => $this->getDiscountsAmount(),
            'shippingAmount' => $this->shippingAmount,
            'shippingAmountDiscount' => $this->shippingAmountDiscount,
            'totalAmount' => $this->getTotalAmount(),
        ];
    }

    /**
     * @return mixed
     */
    public function getDiscountsAmount()
    {
        return $this->discountsAmount;
    }

    /**
     * @param mixed $discountsAmount
     */
    public function setDiscountsAmount($discountsAmount)
    {
        $this->discountsAmount = $discountsAmount;
    }

    /**
     * @return mixed
     */
    public function getVatAmount()
    {
        return $this->vatAmount;
    }

    /**
     * @param mixed $vatAmount
     */
    public function setVatAmount($vatAmount)
    {
        $this->vatAmount = $vatAmount;
    }

    /**
     * @return mixed
     */
    public function getShippingAmount()
    {
        return $this->shippingAmount;
    }

    /**
     * @param mixed $shippingAmount
     */
    public function setShippingAmount($shippingAmount)
    {
        $this->shippingAmount = $shippingAmount;
    }

    /**
     * @return mixed
     */
    public function getSubTotal()
    {
        return round($this->subTotal, 4);
    }

    /**
     * @param mixed $subTotal
     */
    public function setSubTotal($subTotal)
    {
        $this->subTotal = $subTotal;
    }

    /**
     * @return array
     */
    public function getOrderItems()
    {
        return $this->orderItems;
    }

    /**
     * @param array $orderItems
     */
    public function setOrderItems($orderItems)
    {
        $this->orderItems = $orderItems;
    }

    /**
     * @return array
     */
    public function getProductsIds()
    {
        return $this->productsIds;
    }

    /**
     * @param array $productsIds
     */
    public function setProductsIds($productsIds)
    {
        $this->productsIds = $productsIds;
    }

    /**
     * @return mixed
     */
    public function getTotalAmount()
    {
        return round($this->totalAmount, 4);
    }

    /**
     */
    public function setTotalAmount()
    {
        $this->totalAmount = round(($this->subTotal + $this->shippingAmount + $this->vatAmount) - ($this->discountsAmount + $this->shippingAmountDiscount), 4);
    }
}