import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const SidebarFilter = () => {
  return (
    <div>
      <div className="text-[#103178] space-y-10">
        <p className=" text-lg lg:text-5xl font-semibold"> Shop</p>
        <div className=" text-xs md:text-lg font-medium space-y-5 ">
          <p className="">Categories</p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Diagnosis
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Equipment
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Higiene
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Laboratory
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Tools
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Wound Care
          </p>
        </div>
        {/* Range Slider */}
        <div className=" space-y-7 ">
          <hr className="  border-gray-200 w-[70%] md:w-[80%]" />
          <div className=" space-y-1">
            <div className=" w-[70%] md:w-[80%]">
              <label
                for="customRange3"
                class="mb-2 inline-block text-xs md:text-lg font-medium"
              >
                By Price
              </label>
              <input
                type="range"
                class="transparent h-[4px] w-full cursor-pointer
  appearance-none border-transparent bg-neutral-200 "
                min="0"
                max="5"
                step="0.1, 0.2, 0.3"
                id="customRange3"
              />
            </div>
            <p className=" text-gray-400 text-[8px] md:text-xs">
              Price: $0 - $ 2000
            </p>
          </div>
          <hr className="  border-gray-200 w-[70%] md:w-[80%]" />
        </div>
        {/* Range Slider End*/}
        {/*Checkbox Product Filter Start */}
        <div className=" text-xs lg:text-base font-medium space-y-5 ">
          <p className=" text-xs md:text-lg">Brands</p>
          <label className=" flex cursor-pointer">
            <input className=" mr-2 cursor-pointer" type="checkbox" />
            BestPharm
          </label>
          <label className=" flex cursor-pointer ">
            <input className="mr-2 cursor-pointer" type="checkbox" />
            HeartRate
          </label>
          <label className=" flex cursor-pointer">
            <input className="mr-2 cursor-pointer" type="checkbox" />
            HeartShield
          </label>
          <label className=" flex cursor-pointer">
            <input className="mr-2 cursor-pointer" type="checkbox" /> MyMedi
          </label>
          <label className=" flex cursor-pointer">
            <input className="mr-2 cursor-pointer" type="checkbox" /> Pharmy
          </label>
          <label className=" flex cursor-pointer">
            <input className="mr-2 cursor-pointer" type="checkbox" />{" "}
            ILoveHealth
          </label>
        </div>
        {/*Checkbox Product Filter End */}
        {/* Rating Start */}
        <div className=" space-y-7">
          <hr className="  border-gray-200 w-[70%] lg:w-[80%]" />
          <div className=" text-xs lg:text-base font-medium space-y-5 ">
            <p className=" text-xs md:text-lg">By Rating</p>
            <div className=" flex cursor-pointer ">
              <input className=" mr-2 cursor-pointer" type="checkbox" />
              <span className=" flex md:space-x-1 text-yellow-600 items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <p className=" text-[#103178]">(90)</p>
              </span>
            </div>
            <div className=" flex cursor-pointer">
              <input className=" mr-2 cursor-pointer" type="checkbox" />
              <span className=" flex md:space-x-1 text-yellow-600 ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar className="text-gray-300 " />
                <p className=" text-[#103178]">(55)</p>
              </span>
            </div>
            <div className=" flex cursor-pointer">
              <input className=" mr-2 cursor-pointer" type="checkbox" />
              <span className=" flex md:space-x-1 text-yellow-600 ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar className="text-gray-300 " />
                <AiFillStar className="text-gray-300 " />
                <p className=" text-[#103178]">(15)</p>
              </span>
            </div>
            <div className=" flex cursor-pointer">
              <input className=" mr-2 cursor-pointer" type="checkbox" />
              <span className=" flex md:space-x-1 text-yellow-600 ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar className="text-gray-300 " />
                <AiFillStar className="text-gray-300 " />
                <AiFillStar className="text-gray-300 " />
                <p className=" text-[#103178]">(11)</p>
              </span>
            </div>
            <div className=" flex cursor-pointer">
              <input className="md:mr-2 cursor-pointer" type="checkbox" />
              <span className=" flex md:space-x-1 text-yellow-600 ">
                <AiFillStar />
                <AiFillStar className="text-gray-300 " />
                <AiFillStar className="text-gray-300 " />
                <AiFillStar className="text-gray-300 " />
                <AiFillStar className="text-gray-300 " />
                <p className=" text-[#103178]">(2)</p>
              </span>
            </div>
          </div>
          <hr className="  border-gray-200 w-[70%] lg:w-[80%]" />
        </div>
        {/* Rating End*/}
        {/* Sidebar banner start*/}
        <div className=" space-y-7 pb-20">
          <div className="w-[80%]">
            <Image
              src="/banner-sidebar1.jpg"
              width={436}
              height={668}
              alt="Picture of the author"
            />
          </div>
        </div>
        {/* sidebar banner End*/}
      </div>
    </div>
  );
};

export default SidebarFilter;
