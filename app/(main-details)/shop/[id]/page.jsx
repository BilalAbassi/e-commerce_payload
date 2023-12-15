import FrequentlyDeal from "@/components/SingleProduct/FrequentlyDeal";
import SingleProduct1 from "@/components/SingleProduct/SingleProduct1";
import Container from "@/components/layout_components/Container";
import React from "react";

const GetData = async ({ id }) => {
  try {
    const result = await fetch(`https://dummyjson.com/products/${id}`);
    if (!result.ok) {
      throw new Error(`Failed to fetch data`);
    }
    const products = await result.json();
    return products;
  } catch (error) {
    return console.error(error); // You might want to handle errors differently
  }
};

const SinglePage = async ({ params: id }) => {
  const data = await GetData(id);

  const products = data;
  return (
    <div>
      <Container>
        <div className="xl:mx-4">
          <div className="flex gap-4 text-[14px] font-[400] text-[#103178]"></div>
          <div className="lg:flex lg:gap-6 lg:my-6">
            <div className="my-10">
              <img
                src={products?.thumbnail}
                className="w-[320px] h-[320px] md:w-[600px] md:h-[600px] lg:w-[600px] lg:h-[600px]"
              />
              <img
                src={products?.thumbnail}
                alt=""
                className="w-[70px] h-[70px] border-[1px] border-black lg:mt-2"
              />
            </div>
            <SingleProduct1 products={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SinglePage;
