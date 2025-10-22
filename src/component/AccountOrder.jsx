import React, { useContext, useEffect, useState } from "react";
import { Layouts } from "../Pages/Layouts";
import { Link, useNavigate } from "react-router";
import settings from "../assets/setting.svg";
import produk from "../assets/produk card.png";
import { AuthContext } from "../Context/AuthProvider";
import { GetData } from "../Hook/GetData";

export const AccountOrder = () => {
  const { Useraccount, setUseraccount } = useContext(AuthContext);
  const [Order,setOrder] = useState([]);
  const { Data } = GetData(`http://localhost:5000/Order`);
  const navigate = useNavigate();
  useEffect(() => {
     const res = Data.filter((item) => item.userId === Useraccount.id)
     setOrder(res)
  },[Data, Useraccount.id])
  const HandleDetail = (id) => {
        navigate(`/DetailOrder/${id}`)
  }

  return (
    <Layouts>
      <main className="w-full flex justify-center  px-12 lg:px-16 bg-gray-secondbackground">
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
              className="pb-2 border-b border-black font-medium hover:cursor-pointer"
            >
              Orders
            </Link>
            <Link
              to="/AccountFavorit"
              className="pb-2  text-gray-text hover:text-black  hover:cursor-pointer"
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
          {Order?.length > 0 &&
            Order.map((item) => {
              const subtotal = item.items[0]?.price * item.items[0]?.qty;
              const total = subtotal - item.diskon - item.ongkir;
              return (
                <div
                  key={item.id}
                  className="px-5 py-6 flex justify-between items-start shadow-normal-full rounded-xl"
                >
                  <div className="flex space-x-4">
                    <div className="px-7 py-1 border rounded-xl">
                      <img
                        src={produk}
                        alt="product"
                        className="w-9 object-cover  "
                      ></img>
                    </div>
                    <div className="w-96 py-1 h-24 flex flex-col justify-between">
                      <p className="text-sm font-medium">
                        {item.items[0]?.title}
                      </p>
                      <p className="text-xs text-gray-text"></p>
                    </div>
                  </div>
                  <p className="text-base font-bold">Rp {total.toLocaleString()}</p>
                  <p className="text-sm">Quantity: {item.items[0]?.qty}</p>
                  <button
                    onClick={() => HandleDetail(item.id)}
                    className="text-sm px-5 py-1 border rounded-full hover:bg-black hover:text-white"
                  >
                    Detail
                  </button>
                </div>
              );
            })}
        </div>
      </main>
    </Layouts>
  );
};
