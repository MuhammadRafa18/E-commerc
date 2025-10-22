import React, { useContext, useEffect, useState } from "react";
import { Layouts } from "../Pages/Layouts";
import { Link } from "react-router";
import dropdown from "../assets/panah.svg";
import siteData from "../DataWeb/SideData";
import produk from "../assets/produk card.png";
import { ProdukContext } from "../Context/ProdukProvider";
import { GetData } from "../Hook/GetData";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";

export const Order = () => {
  const { Address, setAddress } = useContext(ProdukContext);
  const { Useraccount, setUseraccount } = useContext(AuthContext);
  const [Order, setOrder] = useState([]);
  const { Data } = GetData(`http://localhost:5000/Order`);
  useEffect(() => {
    const res = Data.filter((item) => item.userId === Useraccount.id);
    setOrder(res);
  }, [Data, Useraccount.id]);
  useEffect(() => {
    const get = async () => {
      const res = await axios.get(`http://localhost:5000/Addres`);
      const FilterAddress = res.data.filter(
        (item) => item.userId === Useraccount.id
      );
      setAddress(FilterAddress);
    };
    get();
  }, [Useraccount.id]);
  return (
    <Layouts>
      <main className="flex justify-end pl-4 md:pl-16 ">
        {/* <!-- Left Side: Address & Product --> */}
        <div className="w-4/6 mt-12 space-y-6 mr-16">
          {/* <!-- Recipient Address --> */}
          {Address?.length > 0 &&
          Address.slice(0,1).map((item) => (
            <div
              className="w-full  border border-gray-300 rounded-xl p-5 bg-white shadow-sm flex flex-col space-y-3"
              key={item.id}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <p className="text-gray-700 font-medium">Recipient Address</p>
                <button
                  className="px-3 py-1 text-sm border border-gray-400 rounded-full hover:bg-black hover:text-white cursor-pointer"
                  onClick={() => HandelEdit(item.id)}
                >
                  Edit
                </button>
              </div>

              {/* Recipient info */}
              <div>
                <p className="text-gray-800 font-medium">
                  {item.fullname}{" "}
                  <span className="text-gray-600 font-normal">
                    {Useraccount.phone}
                  </span>
                </p>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-black text-white text-sm rounded-full">
                  {item.place}
                </span>
                <p className="text-gray-700 text-sm">
                  {item.streetname} {item.city},{item.provinci}
                </p>
              </div>
            </div>
          ))}

          {/* <!-- Product Card --> */}
          {Order?.length > 0 &&
            Order.map((item) => {
              const subtotal = item.items[0]?.price * item.items[0]?.qty;
              const total = subtotal - item.diskon - item.ongkir;
              return (
                <div
                  key={item.id}
                  className="px-5 py-6 flex justify-between items-start shadow-normal-full rounded-xl"
                >
                  <div className="flex space-x-4 ">
                    <div className="px-7 py-1 border rounded-xl">
                      <img
                        src={produk}
                        alt="product"
                        className="w-9 object-cover  "
                      ></img>
                    </div>
                    <div className="w-96 py-1 h-24 flex flex-col justify-between">
                      <p className="text-sm font-medium w-72">
                        {item.items[0]?.title}
                      </p>
                      <p className="text-xs text-gray-text"></p>
                    </div>
                  </div>
                  <p className="text-base font-bold">
                    Rp {total.toLocaleString()}
                  </p>
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

        {/* <!-- Right Side: Payment --> */}
        <div className="w-md h-screen shadow  px-16 py-12  ">
          <div className="space-y-2 mb-4">
            <label className="text-sm block">Select Payment Method</label>
            <div className="relative group">
              <img
                src={dropdown}
                alt=""
                className="absolute right-3 bottom-3.5  "
              />
              <select className="w-full border border-gray-line rounded-md px-3 py-2 text-sm appearance-none  ">
                {siteData.Payment.map((item) => (
                  <option>{item.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm block">Select Delevery</label>
            <div className="relative group">
              <img
                src={dropdown}
                alt=""
                className="absolute right-3 bottom-3.5  "
              />
              <select className="w-full border border-gray-line rounded-md px-3 py-2 text-sm appearance-none  ">
                {siteData.Delevery.map((item) => (
                  <option>{item.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* <!-- Price Summary --> */}
          <div className="text-sm mt-6">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>Rp 100,000</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Discount</span>
              <span>Rp 4,000</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Delivery</span>
              <span>Rp 7,500</span>
            </div>
            <div className="flex justify-between mb-6 font-semibold">
              <span>Total</span>
              <span className="text-base">Rp 103,500</span>
            </div>
          </div>

          {/* <!-- Order Button --> */}
          <button className="w-full text-sm  py-2 border rounded-full">
            Order now
          </button>
        </div>
      </main>
    </Layouts>
  );
};
