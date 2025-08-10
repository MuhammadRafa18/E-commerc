import React from "react";
import { Layouts } from "../Pages/Layouts";
import { Link, Links } from "react-router";
import herosection from "../assets/herosection.png";
import SideData from "../DataWeb/SideData";
import siteData from "../DataWeb/SideData";


export const Home = () => {


  return (
    <Layouts>
      {/* Hero section */}
      <section className="">
        <img src={herosection} alt="Banner Produk" className="w-full" />
      </section>

      {/* Produk Bestseller */}
      <section className="w-full px-4 md:px-16 space-y-7">
        <h1 className="text-xl font-semibold">Bestseller</h1>
        <ul className="flex justify-between items-center text-base">
          <li className=" text-gray-text font-semibold  ">
            <ul className="flex space-x-6">   
              <li className="opacity-100">Facewash</li>
              <li className="opacity-50 ">Sunscreen</li>
              <li className="opacity-50 ">Mosturizer</li>
              <li className="opacity-50 ">Serum</li>
            </ul>
          </li>
          <li className=" px-4 py-1.5 border rounded-3xl">
            <Link to="/Category_Produk">Shop all Bestseller</Link>
          </li>
        </ul>
        {/* Card produk */}
        <section className="w-full space-x-4 flex items-center shrink-0 overflow-x-hidden">
          {SideData.ProdukBestseller.map((item) => (
            <div key={item.id} className=" min-w-72 px-6 py-4 space-y-3 flex flex-col items-center bg-bg-card  rounded-lg ">
              <div className=" w-full flex justify-between items-center">
                <div className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md">
                  <img src={item.love} alt="Favorite" className=" " />
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
        </section>
      </section>

      {/* Product Skintype */}
      <section className="w-full flex flex-col px-4 md:px-16 items-center">
        <h2 className="text-xl">Shopping skincare by skin type</h2>
        <p className="text-lg mt-3 mb-4">Need help choosing? Learn what skin type you have by following our guide.</p>
        <div className="w-fit grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
       {siteData.ProdukSkintype.map((item) => (
        <div className="relative " key={item.id}>
          <img src={item.gambar} alt="" className="" />
          <Link className="w-fit px-4 py-3 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-sm text-black rounded-lg" >{item.text}</Link>
        </div>
          ))}
        </div>
      </section>

      {/* Result Produk */}
      <section className="w-full px-4 md:px-16 mb-24 space-y-4 flex flex-col justify-center items-center ">
        <h3 className="text-xl font-semibold">Arliva product results</h3>
        <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
          {siteData.ResultProduk.map((item) => (
            <img src={item.gambar} alt="" key={item.id} />
          ))}
        </div>
      </section>
    </Layouts>
  );
};
