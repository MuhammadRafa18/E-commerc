import React, { useState } from "react";
import { Layouts } from "../Pages/Layouts";
import { Link } from "react-router";
import siteData from "../DataWeb/SideData";
import trash from "../assets/trash.svg";
import prev from "../assets/prev.svg";
import next from "../assets/prev.svg";
import plus from "../assets/plusProduk.svg";
export const Cart = () => {
  const [quantity, setquantity] = useState(1);
  return (
    <Layouts>
      <main className="flex justify-end pl-4 md:pl-16 ">
        {/* <!-- Left Side: Product --> */}
        <div className="w-4/6 mt-24 space-y-4 mr-16">
          <div className="flex items-center space-x-1">
            <h1 className="text-lg font-semibold">Your Chart :</h1>
            <p className="text-base">Rp 300.000</p>
          </div>
          {/* heading */}
          <div className="flex border-b border-gray-line justify-between px-4">
            <p className="ml-4">Product</p>
            <div className="flex space-x-20">
              <p>Price</p>
              <p>Quantity</p>
            </div>
          </div>
          {/* <!-- Product Card --> */}
          {siteData.ProdukBestseller.slice(0, 3).map((item) => (
            <div
              className="shadow rounded-xl p-4 flex justify-between items-start"
              key={item.id}
            >
              <div className="flex space-x-4">
                <div className="px-7 py-1 border rounded-xl">
                  <img
                    src={item.gambar}
                    alt="product"
                    className="w-9 object-cover  "
                  ></img>
                </div>
                <div className="w-96 h-24 flex flex-col justify-between">
                  <p className="text-sm font-medium">
                    Facewash Men Oil Control Anti Shine Brightening Cooling Foam
                  </p>
                  <p className="text-xs text-gray-text">{item.size}</p>
                  <img src={trash} alt="" className="w-8 cursor-pointer" />
                </div>
              </div>
              <p className="text-sm pt-1">{item.price}</p>
              <div className="text-sm flex items-center space-x-6">
                <button
                  onClick={() =>
                    setquantity((quantity) =>
                      quantity >= 2 ? quantity - 1 : quantity
                    )
                  }
                  className="cursor-pointer text-xl"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={() => setquantity((quantity) => quantity + 1)}
                  className="cursor-pointer text-xl"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <!-- Right Side: Payment --> */}
        <div className="w-md h-screen shadow  px-16 py-24  ">
          <div className="flex mb-6 items-center justify-between">
            <h2 className="text-lg font-semibold ">Similiar Product</h2>
            <div className="flex space-x-1.5">
              <img src={prev} alt="" className="rotate-180 cursor-pointer" />
              <img src={next} alt="" className="cursor-pointer" />
            </div>
          </div>
          
          {/* Simmiliar product */}
            {siteData.ProdukBestseller.slice(0,1).map((item) => (
            <div className="flex px-5 py-2.5 text-xs justify-between shadow rounded-xl">
              <div className="flex justify-center space-x-6">
            <img src={item.gambar} alt="" className="w-7"/>
            <div className="flex flex-col justify-between">
            <p className="">{item.nama}</p>
            <p className="">{item.price}</p>
            <p>{item.size}</p>
            </div>
              </div>
            <div className="flex items-end">
             <img src={plus} alt="" />
            </div>
            </div>
            ))}

          <div className="mt-6 border-b border-gray-line "></div>
          {/* <!-- Price Summary --> */}
          <div className="text-sm mt-6 space-y-3">
            <div className="flex justify-between ">
              <span>Subtotal</span>
              <span>Rp 100,000</span>
            </div>
            <div className="flex justify-between ">
              <span>Discount</span>
              <span>Rp 0</span>
            </div>
            <div className="flex justify-between  font-semibold">
              <span>Total</span>
              <span className="text-base font-bold">Rp 103,500</span>
            </div>
          </div>

          {/* <!-- Order Button --> */}
          <button className="w-full py-2 mt-6 text-sm    border rounded-full">
            Payment
          </button>
          <div className="mt-6">
            <div className="flex items-center justify-center space-x-4">
              {siteData.Payment.slice(0, 4).map((item) => (
                <img src={item.logo} alt="" className="" key={item.id} />
              ))}
            </div>
            <div className="flex items-center justify-center space-x-4">
              {siteData.Payment.slice(4, 6).map((item) => (
                <img src={item.logo} alt="" className="" key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layouts>
  );
};
