"use client";
import { useCart } from "@/Context/useCart";
import Link from "next/link";
import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import ItemContent from "./ItemContent";

const CartClient = () => {
  const { cartProducts, handleClearCart } = useCart();

  // to check weather there is product in Cart or Not
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col justify-center">
        <div className="text-center">Your Cart is Empty</div>

        <div className="flex items-center justify-center   ">
          <IoArrowBackCircle className=" text-orange-600 text-3xl" />

          <Link href="/" className="hover:text-blue-600 text-2xl">
            Click Hear To Shop
          </Link>
        </div>
      </div>
    );
  }
  console.log(
    "Shop Cart Products>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
    cartProducts
  );

  return (
    <div className="min-h-[400px] px-8 xl:px-16">
      <div className="flex gap-1 text-[#103178] mt-6">
        <h1 className="text-4xl font-[600]  ">ShoppingCart</h1>
      </div>

      <div className="grid grid-cols-5 text-md font-[600] text-[#103178] gap-4 items-center mt-8">
        <div className="col-span-2 justify-self-start ">PRODUCT</div>
        <div className=" justify-self-center">PRICE</div>
        <div className=" justify-self-center">QUANTITY </div>
        <div className=" justify-self-end font-bold text-[20px]">TOTAL</div>
      </div>
      {/* second section  */}

      <div>
        {cartProducts &&
          cartProducts.map((item) => <ItemContent key={item.id} item={item} />)}
      </div>

      {/* Clear button  */}
      <div className="mt-10 flex justify-between border-t pt-8 ">
        <div className="w-[400px] ">
          <button
            className="bg-[#103178] 
          
           hover:bg-orange-500 duration-150 delay-150 transition
          
          
          py-2 px-3 font-bold  text-white rounded-full"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <Link href="/shop">
            <button className="bg-orange-500 hover:bg-[#103178] duration-150 delay-150 transition ml-4 py-2 px-3 font-bold  text-white rounded-full">
              Continue Shopping
            </button>
          </Link>
        </div>

        {/* for subtile  */}
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-between font-[700] text-xl">
            <h3>SUBTOTAL</h3>
            <p>$ 100</p>
          </div>
          <p>Taxes and Shipping calculate at checkout</p>
          <button className="bg-orange-500 hover:bg-[#103178] duration-150 delay-150 transition p-2 font-bold  text-white rounded-full">
            Proceed to CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
