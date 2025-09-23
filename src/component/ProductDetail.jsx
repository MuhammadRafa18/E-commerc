import React, { useState } from "react";
import { Layouts } from "../Pages/Layouts";
import siteData from "../DataWeb/SideData";
import ProdukDetail from "../assets/ProdukDetail.png";
import love from "../assets/love.svg";
import loveon from "../assets/loveon.svg";
import start from "../assets/start.svg";
import { GetData } from "../Hook/GetData";
export const ProductDetail = () => {
  const Url = `http://localhost:5000/produk`;
  const { Data } = GetData(Url);
  const [Favorite, setFavorite] = useState(false);
  return (
    <Layouts>
      <main className="w-full  mx-auto py-16 px-16  ">
        {/* <!-- Product section --> */}
        {Data.map((item) => (
          <div
            className="flex items-center justify-center space-x-6 "
            key={item.id}
          >
            {/* <!-- Image gallery --> */}
            <div className="w-fit flex ">
              {/* <div className="w-fit flex flex-col space-y-6 justify-center">
              {siteData.ProdukBestseller.slice(0,3).map((item) => (
              <div key={item.id} className=" border border-gray-text rounded-xl px-7 py-2">
                  <img
                src={item.gambar}
                alt="Thumbnail 1"
                class="w-10"
                />
              </div>
              ))}
            </div> */}
            </div>

            <img
              src={item.imagebanner}
              alt="Main Product"
              className="w-lg rounded-lg shrink-0"
            />

            <div className="w-fit space-y-4 rounded-md shadow p-5 ">
              <div className="flex items-start justify-between">
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <button onClick={() => setFavorite(!Favorite)}>
                  {Favorite ? (
                    <img src={loveon} alt="" className="w-7 " />
                  ) : (
                    <img src={love} alt="" className="w-7 " />
                  )}
                </button>
              </div>

              <div className=" flex justify-between items-center">
                <p className="text-sm font-medium">Rp {item.price}</p>
                <div className="flex items-center space-x-3 ">
                  <img src={start} alt="" className="" />
                  <img src={start} alt="" className="" />
                  <img src={start} alt="" className="" />
                  <img src={start} alt="" className="" />
                  <img src={start} alt="" className="" />
                </div>
              </div>

              {/* <!-- Size options --> */}
              <div className="space-x-3 ">
                <span className=" text-sm">Size</span>
                <button className="px-3 py-1 text-xs border border-black rounded">
                  {item.size}
                </button>
              </div>

              {/* <!-- Quantity --> */}
              <div className="flex items-center space-x-3 text-sm">
                <span>Quantity</span>
                <div className="w-32 flex px-3.5 py-1 justify-between items-center  rounded-md shadow">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
              </div>

              {/* <!-- Buttons --> */}
              <div className="w-full flex items-center space-x-2.5">
                <button className="w-1/2  py-2.5 border rounded-full text-sm">
                  Add to cart
                </button>
                <button className="w-1/2  py-2.5 bg-black text-white rounded-full text-sm">
                  Buy now
                </button>
              </div>

              {/* <!-- Payment logos --> */}
              <div className="flex justify-center space-x-4 mt-4">
                {siteData.Payment.map((item) => (
                  <img src={item.logo} alt="" className="" key={item.id} />
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* <!-- Tabs --> */}
        <div className="border-b mt-16 border-black flex space-x-6 text-sm font-medium">
          <button className="w-1/3  bg-black py-1.5 text-white ">
            DESCRIPTION
          </button>
          <button className="w-1/3 py-1.5">HOW TO USE</button>
          <button className="w-1/3 py-1.5">INGREDIENT</button>
        </div>

        {/* <!-- Description --> */}
        <div className="flex justify-center text-xs mt-6 leading-relaxed">
          <p className="w-2/3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
    </Layouts>
  );
};
