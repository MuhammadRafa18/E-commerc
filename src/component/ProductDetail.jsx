import React from "react";
import { Layouts } from "../Pages/Layouts";
import siteData from "../DataWeb/SideData";
import ProdukDetail from "../assets/ProdukDetail.png";
import love from "../assets/love.svg";
import start from "../assets/start.svg";
export const ProductDetail = () => {
  return (
    <Layouts>
      <main class="w-full  mx-auto py-16 px-16  ">
        {/* <!-- Product section --> */}
        <div class="flex items-center justify-center space-x-6 ">
          {/* <!-- Image gallery --> */}
          <div class="w-fit flex ">
            <div class="w-fit flex flex-col space-y-6 justify-center">
              {siteData.ProdukBestseller.slice(0,3).map((item) => (
              <div key={item.id} className=" border border-gray-text rounded-xl px-7 py-2">
                  <img
                src={item.gambar}
                alt="Thumbnail 1"
                class="w-10"
                />
              </div>
              ))}
            </div>
          </div>
        
                <img
                src={ProdukDetail}
                alt="Main Product"
                class="w-lg rounded-lg shrink-0"
              />
        

          {/* <!-- Product info --> */}
          <div class="w-fit space-y-4 rounded-md shadow p-5 ">
            <div className="flex items-start">
            <h1 class="text-lg font-semibold">
              Facewash Men Oil Control Anti Shine Brightening Cooling Foam
            </h1>
            <img src={love} alt="" className="w-7 mt-2"/>
            </div>
            {/* <!-- Rating and Price --> */}
            <div className=" flex justify-between items-center">
            <p class="text-sm font-medium">Rp 100.000</p>
            <div class="flex items-center space-x-3 ">
               <img src={start} alt="" className="" />
               <img src={start} alt="" className="" />
               <img src={start} alt="" className="" />
               <img src={start} alt="" className="" />
               <img src={start} alt="" className="" />
            </div>
            </div>

            {/* <!-- Size options --> */}
            <div class="space-x-3 ">
              <span className=" text-sm">Size</span>
              <button class="px-3 py-1 text-xs border border-gray-text/70 rounded">100 ml</button>
              <button class="px-3 py-1 text-xs border rounded">150 ml</button>
              <button class="px-3 py-1 text-xs border border-gray-text rounded">200 ml</button>
            </div>

            {/* <!-- Quantity --> */}
            <div class="flex items-center space-x-3 text-sm">
              <span>Quantity</span>
              <div class="w-32 flex px-3.5 py-1 justify-between items-center  rounded-md shadow">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>

            {/* <!-- Buttons --> */}
            <div class="w-full flex items-center space-x-2.5">
              <button class="w-1/2  py-2.5 border rounded-full text-sm">
                Add to cart
              </button>
              <button class="w-1/2  py-2.5 bg-black text-white rounded-full text-sm">
                Buy now
              </button>
            </div>

            {/* <!-- Payment logos --> */}
            <div class="flex justify-center space-x-4 mt-4">
               {siteData.Payment.map((item) => (
                <img src={item.logo} alt="" className="" key={item.id} />
              ))}
            </div>
          </div>
        </div>

        {/* <!-- Tabs --> */}
        <div class="border-b mt-16 border-black flex space-x-6 text-sm font-medium">
          <button class="w-1/3  bg-black py-1.5 text-white ">DESCRIPTION</button>
          <button class="w-1/3 py-1.5">HOW TO USE</button>
          <button class="w-1/3 py-1.5">INGREDIENT</button>
        </div>

        {/* <!-- Description --> */}
        <div class="flex justify-center text-xs mt-6 leading-relaxed">
          <p className="w-2/3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.   Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </main>
    </Layouts>
  );
};
