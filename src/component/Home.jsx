import React, { useContext, useEffect, useState } from "react";
import { Layouts } from "../Pages/Layouts";
import { Link, Links, NavLink, useNavigate } from "react-router";
import herosection from "../assets/herosection.png";
import cart from "../assets/cart.svg";
import carton from "../assets/carton.svg";
import love from "../assets/love.svg";
import loveon from "../assets/loveon.svg";
import start from "../assets/start.svg";
import { GetData } from "../Hook/GetData";
import axios from "axios";
import StarRatings from "react-star-ratings";

export const Home = () => {
  const { Data: ProductType } = GetData(`http://localhost:5000/ProdukType`);
  const { Data: Result } = GetData(`http://localhost:5000/result`);
  const [Bestseller, setBestseller] = useState([]);
  const [isActive, setisActive] = useState("Facewash");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/produk`, {
        params: {
          category: "Facewash",
        },
      })
      .then((res) => {
        const data = res.data.filter((item) => item.rating > 4);
        setBestseller(data);
      });
  }, []);

  const HandleProduk = async (category) => {
    axios
      .get(`http://localhost:5000/produk`, {
        params: {
          category: category,
        },
      })
      .then((res) => {
        const data = res.data.filter((item) => item.rating > 4);
        setBestseller(data);
      });
  };

  const toggleFavorite = async (id) => {
    try {
      const product = Bestseller.find((p) => p.id === id);
      const res = await axios.patch(`http://localhost:5000/produk/${id}`, {
        favorite: !product.favorite,
      });
      setBestseller((prev) => prev.map((p) => (p.id === id ? res.data : p)));
    } catch (err) {
      console.error(err.message);
    }
  };
  const toggleCart = async (id) => {
    try {
      const product = Bestseller.find((p) => p.id === id);
      const res = await axios.patch(`http://localhost:5000/produk/${id}`, {
        cart: !product.cart,
      });
      setBestseller((prev) => prev.map((p) => (p.id === id ? res.data : p)));
    } catch (err) {
      console.error(err.message);
    }
  };

  // console.log(Bestseller.rating)
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
        <h1 className="text-xl font-semibold">Bestseller</h1>
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
                Facewash
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
            <Link to="/Category_Produk?type=Bestseller">
              Shop all Bestseller
            </Link>
          </li>
        </ul>
        {/* Card produk */}
        <section className="w-full space-x-4 flex items-center shrink-0 overflow-x-auto hide-scrollbar ">
          {Bestseller?.length > 0 &&
            Bestseller.map((item) => (
              <div
                onClick={() => navigate(`/ProductDetail/${item.id}`)}
                key={item.id}
                className=" min-w-72 px-6 py-4 space-y-3 flex flex-col items-center bg-bg-card  rounded-lg cursor-pointer "
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className=" w-full flex justify-between items-center"
                >
                  <button
                    className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md"
                    onClick={() => toggleFavorite(item.id)}
                  >
                    <img
                      src={item.favorite ? loveon : love}
                      alt=""
                      className="w-4 "
                    />
                  </button>
                  <button
                    className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md"
                    onClick={() => toggleCart(item.id)}
                  >
                    <img
                      src={item.cart ? carton : cart}
                      alt=""
                      className="w-4"
                    />
                  </button>
                </div>
                <img src={item.imageproduk} alt="Produk" className="w-20" />
                <p className=" w-fit px-1.5 py-0.5 text-xs text-gray-text  border border-gray-text ">
                  {item.size}
                </p>
                <div className="w-full flex justify-between ">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs">Rp {item.price.toLocaleString()}</p>
                </div>
                <div className="w-full  flex items-center  justify-between text-xs ">
                  <div className="flex space-x-1">
                    <StarRatings
                      rating={item.rating}
                      starRatedColor="#facc15"
                      numberOfStars={5}
                      name="rating"
                      starDimension="20px"
                      starSpacing="2px"
                    />
                    <p className="pt-1">{item.rating}</p>
                  </div>
                  <p className="pt-1 text-gray-text ">({item.stok})</p>
                </div>
              </div>
            ))}
        </section>
      </section>
      <div className="px-12">
        <button
          onClick={() => navigate(`/Category_Produk?type=Bestseller`)}
          className="lg:hidden w-full  py-1.5 text-base border rounded-full"
        >
          View All
        </button>
      </div>

      {/* Product Skintype */}
      <section className="w-full flex flex-col px-12 lg:px-16 items-center">
        <h2 className="text-xl font-semibold">
          Shopping skincare by skin type
        </h2>
        <p className="text-lg mt-3 mb-4 text-center">
          Need help choosing? Learn what skin type you have by following our
          guide.
        </p>
        <div className="w-full md:w-fit grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 lg:gap-4">
          {ProductType.map((item) => (
            <div className="relative place-items-center" key={item.id}>
              <img
                src={item.gambar}
                alt=""
                className="w-lg h-full rounded-lg"
              />
              <button
                onClick={() => navigate(`Category_Produk?type=${item.type}`)}
                className="w-fit  text-center px-4 py-1.5 absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-lg md:text-base lg:text-xs text-black  "
              >
                {item.type}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Result Produk */}
      <section className="w-full px-12 lg:px-16 mb-24 space-y-4 flex flex-col justify-center items-center ">
        <h3 className="text-xl font-semibold">Arliva product results</h3>
        <div className="w-full md:w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6 lg:gap-4">
          {Result.map((item) => (
            <img src={item.result} alt="" key={item.id} className="w-lg" />
          ))}
        </div>
      </section>
    </Layouts>
  );
};
