import Container from "@/components/layout_components/Container";
import React from "react";
import SidebarFilter from "./SidebarFilter";
import ShopContent from "./ShopContent";

const ShopComponent = ({ products }) => {
  return (
    <div>
      <div className=" grid grid-cols-4 space-x-1 lg:grid lg:grid-cols-5 ">
        <div className=" grid col-span-1 lg:grid lg:col-span-1">
          <SidebarFilter products={products} />
        </div>
        <div className=" grid col-span-3 lg:grid lg:col-span-4">
          <ShopContent products={products} />
        </div>
      </div>
    </div>
  );
};

export default ShopComponent;
