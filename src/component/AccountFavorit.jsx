import React, { useContext, useEffect, useState } from "react";
import { Layouts } from "../Pages/Layouts";
import { Link } from "react-router";
import settings from "../assets/setting.svg";
import cart from "../assets/cart.svg";
import carton from "../assets/carton.svg";
import love from "../assets/love.svg";
import loveon from "../assets/loveon.svg";
import start from "../assets/start.svg";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
export const AccountFavorit = () => {
  const [ProdukFavorite, setProdukFavorite] = useState();
  const {Useraccount,setUseraccount} = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/produk`, {
        params:{
          favorite:true,
        }
      })
      .then((res) => setProdukFavorite(res.data));
  }, []);
  const toggleFavorite = async (id) => {
    try {
      const Favorite = ProdukFavorite.find((p) => p.id === id);
      const res = await axios.patch(`http://localhost:5000/produk/${id}`, {
        favorite: !Favorite.favorite,
      });
      setProdukFavorite((prev) => prev.map((p) => (p.id === id ? res.data : p)));
    } catch (err) {
      console.error(err.message);
    }
  };
  const toggleCart = async (id) => {
    try {
      const Cart = ProdukFavorite.find((p) => p.id === id);
      const res = await axios.patch(`http://localhost:5000/produk/${id}`, {
        cart: !Cart.cart,
      });
      setProdukFavorite((prev) => prev.map((p) => (p.id === id ? res.data : p)));
    } catch (err) {
      console.error(err.message);
    }
  };
// console.log(ProdukFavorite)
  return (
    <Layouts>
      <main className="w-full flex justify-center px-12 lg:px-16  bg-gray-secondbackground">
        <div className="w-5xl  my-24 space-y-8   ">
          {/* <!-- Greeting + User Info --> */}
          <section>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl ">Hey, {Useraccount.fullname}</h1>
                <p className="text-base mt-4">{Useraccount.email}</p>
              </div>
              <Link to="/Setting">
                <img src={settings} className="cursor-pointer"></img>
              </Link>
            </div>
          </section>

          {/* <!-- Navigation Tabs --> */}
          <nav className="flex gap-6 border-b border-gray-line">
            <Link
              to="/AccountOrder"
              className="pb-2 text-gray-text hover:text-black hover:cursor-pointer"
            >
              Orders
            </Link>
            <Link
              to="/AccountFavorit"
              className="pb-2  border-b border-black font-medium hover:cursor-pointer"
            >
              Favorit
            </Link>
            <Link
              to="/AccountAddres"
              className="pb-2 text-gray-text hover:text-black hover:cursor-pointer"
            >
              Addresses
            </Link>
          </nav>

          {/* Favorit Produk */}
          <div className="px-5 py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  shadow rounded-xl  ">
            {ProdukFavorite?.length > 0 &&
              ProdukFavorite.map((item) => (
                <div
                  onClick={() => navigate(`/ProductDetail/${item.id}`)}
                  key={item.id}
                  className="w-full px-6 py-4 space-y-3 flex flex-col items-center bg-bg-card  rounded-lg shrink-0 cursor-pointer  "
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
                  <img src={item.imageproduk} alt="Produk" className="w-16" />
                  <p className=" w-fit px-1.5 py-0.5 text-xs text-gray-text  border border-gray-text ">
                    {item.size}
                  </p>
                  <div className="w-full flex justify-between ">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs">{item.price}</p>
                  </div>
                  <div className="w-full space-x-1  flex items-center  text-xs ">
                    <img src={start} alt="Rating" className="" />
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
