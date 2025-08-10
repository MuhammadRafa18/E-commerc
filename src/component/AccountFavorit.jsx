import React from "react";
import { Layouts } from "../Pages/Layouts";
import settings from "../assets/setting.svg";
import siteData from "../DataWeb/SideData";
import loveon from "../assets/loveon.svg";
export const AccountFavorit = () => {
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
              <img src={settings} className="cursor-pointer"></img>
            </div>
          </section>

          {/* <!-- Navigation Tabs --> */}
          <nav className="flex gap-6 border-b border-gray-line">
            <button className="pb-2 text-gray-text hover:text-black hover:cursor-pointer">
              Orders
            </button>
            <button className="pb-2  border-b border-black font-medium hover:cursor-pointer">
              Favorit
            </button>
            <button className="pb-2 text-gray-text hover:text-black hover:cursor-pointer">
              Addresses
            </button>
          </nav>
          
          {/* Favorit Produk */}
          <div className="px-5 py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  shadow rounded-xl  ">
             {siteData.ProdukBestseller.slice(0,3).map((item) => (
            <div key={item.id} className="w-72 px-6 py-4 space-y-3 flex flex-col items-center bg-bg-card  rounded-lg ">
              <div className=" w-full flex justify-between items-center">
                <div className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md">
                  <img src={loveon} alt="Favorite" className=" " />
                </div>
                <div className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md">
                  <img src={item.cart} alt="Cart" className="" />
                </div>
              </div>
              <img src={item.gambar} alt="Produk" />
              <p className=" w-fit px-1.5 py-0.5 text-xs text-gray-text  border border-gray-text ">
                {item.size}
              </p>
              <div className="w-full flex justify-between ">
                <p className="text-sm font-semibold">{item.nama}</p>
                <p className="text-xs">{item.price}</p>
              </div>
              <div className="w-full space-x-1  flex items-center  text-xs ">
                <img src={item.start} alt="Rating" className="" />
                <p className="pt-0.5">{item.rating}</p>
                <p className="pt-0.5 text-gray-text ">{item.stok}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </main>
    </Layouts>
  );
};
