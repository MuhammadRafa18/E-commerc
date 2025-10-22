import React, { useEffect, useState } from "react";
import { Layouts } from "../Pages/Layouts";
import siteData from "../DataWeb/SideData";
import love from "../assets/love.svg";
import loveon from "../assets/loveon.svg";
import start from "../assets/start.svg";
import { useParams } from "react-router";
import axios from "axios";
export const ProductDetail = () => {
  // const Url = `http://localhost:5000/produk`;
  const { id } = useParams();
  const [Product, setProduct] = useState();
  const [isActive, setisActive] = useState({});
  useEffect(() => {
    if (id) {
      try {
        axios.get(`http://localhost:5000/produk/${id}`).then((res) => {
          setProduct(res.data);
          setisActive({
            title: "DESCRIPTION",
            desk: res.data.description,
          });
        });
      } catch (err) {
        console.error(err.message);
      }
    }
  }, [id]);
  const toggleFavorite = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:5000/produk/${id}`, {
        favorite: !Product.favorite,
      });
      setProduct((prev) => ({...prev,...res.data}));
    } catch (err) {
      console.error(err.message);
    }
  };

  // console.log(Product);
  return (
    <Layouts>
      <main className="w-full  mx-auto py-16 px-16  ">
        {/* <!-- Product section --> */}
        {Product && (
          <div>
            <div
              className="flex items-center justify-center space-x-6 "
              key={Product.id}
            >
              {/* <div className="w-fit flex "> */}
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
              {/* </div> */}

              <img
                src={Product.imagebanner}
                alt="Main Product"
                className="w-lg rounded-lg shrink-0"
              />

              <div className="w-fit space-y-4 rounded-md shadow p-5 ">
                <div className="flex items-start justify-between">
                  <h1 className="text-lg font-semibold">{Product.title}</h1>
                  <button
                    className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md"
                    onClick={() => toggleFavorite(Product.id)}
                  >
                    <img
                      src={Product.favorite ? loveon : love}
                      alt=""
                      className="w-4 "
                    />
                  </button>
                </div>

                <div className=" flex justify-between items-center">
                  <p className="text-sm font-medium">Rp {Product.price}</p>
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
                    {Product.size}
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
            {/* <!-- Tabs --> */}
            <div className="border-b mt-16 border-black flex space-x-6 text-sm font-medium">
              <button
                onClick={() =>
                  setisActive({
                    title: "DESCRIPTION",
                    desk: Product.description,
                  })
                }
                className={` ${
                  isActive.title === "DESCRIPTION"
                    ? "w-1/3 py-1.5  bg-black  text-white  "
                    : "w-1/3 py-1.5 bg-white text-black "
                } cursor-pointer`}
              >
                DESCRIPTION
              </button>
              <button
                onClick={() =>
                  setisActive({ title: "HOW TO USE", desk: Product.useproduk })
                }
                className={` ${
                  isActive.title === "HOW TO USE"
                    ? "w-1/3 py-1.5 bg-black  text-white "
                    : "w-1/3 py-1.5 bg-white text-black "
                } cursor-pointer`}
              >
                HOW TO USE
              </button>
              <button
                onClick={() =>
                  setisActive({
                    title: "INGREDIENT",
                    desk: Product.ingredient,
                  })
                }
                className={` ${
                  isActive.title === "INGREDIENT"
                    ? "w-1/3 py-1.5 bg-black  text-white "
                    : "w-1/3 py-1.5 bg-white text-black "
                } cursor-pointer`}
              >
                INGREDIENT
              </button>
            </div>

            {/* <!-- Description --> */}
            <div className="flex justify-center text-xs mt-6 leading-relaxed">
              <p className="w-2/3 text-center">{isActive.desk}</p>
            </div>
          </div>
        )}
      </main>
    </Layouts>
  );
};
