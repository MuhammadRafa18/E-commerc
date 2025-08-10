import React from "react";
import { Layouts } from "../Pages/Layouts";
import { Link } from "react-router";
import dropdown from "../assets/panah.svg";
import siteData from "../DataWeb/SideData";
import produk from "../assets/produk card.png";

export const Order = () => {
  return (
    <Layouts>
      <main className="flex justify-end pl-4 md:pl-16 ">
        {/* <!-- Left Side: Address & Product --> */}
        <div className="w-4/6 mt-12 space-y-6 mr-16">
          {/* <!-- Recipient Address --> */}
          <div className="w-full shadow  rounded-xl p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium">Recipient Address</h2>
              <Link className="text-sm px-4 py-1 border rounded-full cursor-pointer hover:bg-black hover:text-white">
                Edit
              </Link>
            </div>
            <p className="text-sm">Muhammad Rafa &nbsp; 085725278899</p>
            <div className="flex items-center gap-2">
              <span className="text-sm bg-black text-white px-4 py-1 rounded-full">
                Home
              </span>
              <span className="text-sm">
                Jl Naman iskandar limo Depok, Jawa barat
              </span>
            </div>
          </div>

          {/* <!-- Product Card --> */}
          <div className="shadow rounded-xl p-4 flex justify-between items-start">
           <div className="flex space-x-4">
             <div className="px-7 py-1 border rounded-xl">
            <img
              src={produk}
              alt="product"
              className="w-9 object-cover  "
              >
              </img>
              </div>
             <div className="w-96 h-24 flex flex-col justify-between">
               <p className="text-sm font-medium">
                Facewash Men Oil Control Anti Shine Brightening Cooling Foam
              </p>
              <p className="text-xs text-gray-text">150 ml</p>
             </div>
           </div>
              <div className="h-24 flex flex-col justify-between">
                <p className="text-sm font-bold">Rp 96,000</p>
                <p className="text-xs text-gray-400 line-through">Rp 100,000</p>
                <p className="text-xs text-red-500">-4%</p>
              </div>
            <div className="text-sm">Quantity: 1</div>
          </div>
        </div>

        {/* <!-- Right Side: Payment --> */}
        <div className="w-md h-screen shadow  px-16 py-12  ">
          <div className="space-y-2 mb-4">
            <label className="text-sm block">Select Payment Method</label>
            <div className="relative group">
              <img
                src={dropdown}
                alt=""
                className="absolute right-3 bottom-3.5  "
              />
              <select className="w-full border border-gray-line rounded-md px-3 py-2 text-sm appearance-none  ">
                {siteData.Payment.map((item) => (
                  <option>{item.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
             <label className="text-sm block">Select Delevery</label>
            <div className="relative group">
              <img
                src={dropdown}
                alt=""
                className="absolute right-3 bottom-3.5  "
              />
              <select className="w-full border border-gray-line rounded-md px-3 py-2 text-sm appearance-none  ">
                {siteData.Delevery.map((item) => (
                  <option>{item.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* <!-- Price Summary --> */}
          <div className="text-sm mt-6">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>Rp 100,000</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Discount</span>
              <span>Rp 4,000</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Delivery</span>
              <span>Rp 7,500</span>
            </div>
            <div className="flex justify-between mb-6 font-semibold">
              <span>Total</span>
              <span className="text-base">Rp 103,500</span>
            </div>
          </div>

          {/* <!-- Order Button --> */}
          <button className="w-full text-sm  py-2 border rounded-full">
            Order now
          </button>
        </div>
      </main>
    </Layouts>
  );
};
