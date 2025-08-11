import React from "react";
import { Layouts } from "../Pages/Layouts";
import { Link } from "react-router";
import settings from "../assets/setting.svg";
import produk from "../assets/produk card.png";


export const AccountOrder = () => {
  return (
    <Layouts>
      <main className="w-full flex justify-center   bg-gray-secondbackground">
        <div className="w-5xl  my-24 space-y-8   ">
          {/* <!-- Greeting + User Info --> */}
          <section>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl ">Hey, Rafa Almaqdis</h1>
                <p className="text-base mt-4">rafaalmaqdis53@gmail.com</p>
              </div>
              <Link to="/Setting">
                <img src={settings} className="cursor-pointer"></img>
              </Link>
            </div>
          </section>

          {/* <!-- Navigation Tabs --> */}
          <nav className="flex gap-6 border-b border-gray-line">
            <Link to="/AccountOrder" className="pb-2 border-b border-black font-medium hover:cursor-pointer">
              Orders
            </Link>
            <Link  to="/AccountFavorit" className="pb-2  text-gray-text hover:text-black  hover:cursor-pointer">
              Favorit
            </Link>
            <Link to="/AccountAddres" className="pb-2 text-gray-text hover:text-black hover:cursor-pointer">
              Addresses
            </Link>
          </nav>

          <div className="shadow rounded-xl px-5 py-6 flex justify-between items-start">
            <div className="flex space-x-4">
              <div className="px-7 py-1 border rounded-xl">
                <img
                  src={produk}
                  alt="product"
                  className="w-9 object-cover  "
                ></img>
              </div>
              <div className="w-96 h-24 flex flex-col justify-between">
                <p className="text-sm font-medium">
                  Facewash Men Oil Control Anti Shine Brightening Cooling Foam
                </p>
                <p className="text-xs text-gray-text">150 ml</p>
              </div>
            </div>
            <p className="text-base font-bold">Rp 103,000</p>
            <p className="text-sm">Quantity: 1</p>
            <Link className="text-sm px-5 py-1 border rounded-full hover:bg-black hover:text-white">
              Detail
            </Link>
          </div>
        </div>
      </main>
    </Layouts>
  );
};
