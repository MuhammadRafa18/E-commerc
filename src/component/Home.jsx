import React, { useContext, useEffect, useState } from "react";
import { Layouts } from "../Pages/Layouts";
import { Link, Links, NavLink, useNavigate } from "react-router";
import herosection from "../assets/herosection.png";
import cart from "../assets/cart.svg";
import love from "../assets/love.svg";
import start from "../assets/start.svg";
import siteData from "../DataWeb/SideData";
import { ProdukContext } from "../Context/ProdukProvider";
import { GetData } from "../Hook/GetData";

export const Home = () => {
  const Url = `https://dummyjson.com/products`;
  const { Produk } = GetData(Url);
  const [Bestseller, setBestseller] = useState([]);
  const [isActive, setisActive] = useState("Facewash");
  const { ListProduk } = useContext(ProdukContext);
  const navigate = useNavigate();

  useEffect(() => {
    const ProdukBest = ListProduk.filter(
      (item) => item.type === "Bestseller" && item.category === "Facewash"
    );
    setBestseller(ProdukBest);
  }, [ListProduk]);

  const HandleProduk = (category) => {
    const ProdukBest = ListProduk.filter(
      (item) => item.type === "Bestseller" && item.category === category
    );
    setBestseller(ProdukBest);
  };
  console.log(Produk)

  return (
    <Layouts>
      {/* Hero section */}

      <img
        src={herosection}
        alt="Banner Produk"
        className="w-full object-cover aspect-square md:aspect-auto "
      />

      {/* Produk Bestseller */}
      <section className="w-full px-12 lg:px-16 space-y-7">
        <h1 className="text-xl font-semibold">Populer</h1>
        <ul className="flex justify-between items-center text-base">
          <li className=" text-gray-text font-semibold  ">
            <div className="flex space-x-6">
              <button
                onClick={() => {
                  setisActive("Facewash");
                  HandleProduk("Facewash");
                }}
                className={` ${
                  isActive === "Facewash" ? "opacity-100 " : "opacity-50 "
                } cursor-pointer`}
              >
                Gaming
              </button>
              <button
                onClick={() => {
                  setisActive("Sunscreen");
                  HandleProduk("Sunscreen");
                }}
                className={` ${
                  isActive === "Sunscreen" ? "opacity-100 " : "opacity-50 "
                } cursor-pointer`}
              >
                Sunscreen
              </button>
              <button
                onClick={() => {
                  setisActive("Mosturizer");
                  HandleProduk("Mosturizer");
                }}
                className={` ${
                  isActive === "Mosturizer" ? "opacity-100 " : "opacity-50 "
                } cursor-pointer`}
              >
                Mosturizer
              </button>
              <button
                onClick={() => {
                  setisActive("Serum");
                  HandleProduk("Serum");
                }}
                className={` ${
                  isActive === "Serum" ? "opacity-100 " : "opacity-50 "
                } cursor-pointer`}
              >
                Serum
              </button>
            </div>
          </li>
          <li className="hidden lg:block px-4 py-1.5 border rounded-3xl">
            <Link to="/Category_Produk">Shop all Bestseller</Link>
          </li>
        </ul>
        {/* Card produk */}
        <section className="w-full space-x-4 flex items-center shrink-0 overflow-x-auto hide-scrollbar ">
          {Produk.slice(0, 5).map((item) => (
            <div
              onClick={() => navigate(`/ProductDetail`)}
              key={item.id}
              className=" min-w-72 p-4 space-y-8 flex flex-col items-center bg-bg-card  rounded-lg cursor-pointer "
            >
              <img
                src={item.images}
                alt="Produk"
                className="w-full rounded-lg "
              />
              <p className="text-xs">${item.price}</p>
            </div>
          ))}
        </section>
        <button
          onClick={() => navigate(`/Category_Produk`)}
          className="lg:hidden w-full py-1.5 text-base border rounded-full"
        >
          View All
        </button>
      </section>

      {/* Product Skintype */}
      <section className="w-full flex flex-col px-12 lg:px-16 items-center">
        <h2 className="text-xl font-semibold">Top Deals by Category</h2>
        <p className="text-lg mt-3 mb-4 text-center">
          Hot discounts on TV, Audio, Laptop, and Mobile. Want more? Tap Shop
          All for Gaming & Appliances.
        </p>
        <div className="w-full md:w-fit grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 lg:gap-4">
          {siteData.ProdukSkintype.map((item) => (
            <div className="relative place-items-center" key={item.id}>
              <img src={item.gambar} alt="" className="w-lg h-full rounded-lg" />
              <Link className="w-fit  text-center px-4 py-1.5 absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-lg md:text-base lg:text-xs text-black  ">
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Result Produk */}
      <section className="w-full px-12 lg:px-16 mb-24 space-y-4 flex flex-col justify-center items-center ">
        <h3 className="text-xl font-semibold">Arliva product results</h3>
        <div className="w-full md:w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6 lg:gap-4">
          {siteData.ResultProduk.map((item) => (
            <img src={item.gambar} alt="" key={item.id} className="w-lg" />
          ))}
        </div>
      </section>
    </Layouts>
  );
};
