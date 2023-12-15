"use client";

import Link from "next/link";

import ProductCard from "../Home/ProductCard";

const ShopContent = ({ products }) => {
  return (
    <div className=" flex flex-col justify-center items-center md:text-start">
      <div className="text-[#103178] space-y-10 pb-20 w-[220px]  md:w-full">
        <p className=" text-lg lg:text-5xl font-semibold"> Shop Now</p>
        <div className=" grid grid-cols-1 place-content-center place-items-center md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 ">
          {products?.products?.map((product, i) => (
            <Link href={`/shop/${product?.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
