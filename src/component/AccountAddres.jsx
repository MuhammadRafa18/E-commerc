import React, { useContext, useEffect } from "react";
import { Layouts } from "../Pages/Layouts";
import { Link, useNavigate } from "react-router";
import settings from "../assets/setting.svg";
import plus from "../assets/plus.svg";
import { ProdukContext } from "../Context/ProdukProvider";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";

export const AccountAddres = () => {
  const { Address, setAddress } = useContext(ProdukContext);
  const { Useraccount, setUseraccount } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
   const get = async () => {
     const res = await axios.get(`http://localhost:5000/Addres`)
     const FilterAddress = res.data.filter((item) => item.userId === Useraccount.id);
     setAddress(FilterAddress)
    }
    get();
  }, [Useraccount.id]);
  const HandelEdit = (id) => {
     navigate(`/FormAddress/${id}`)
  }
  return (
    <Layouts>
      <main className="w-full  min-h-screen flex justify-center px-12 lg:px-16 bg-gray-secondbackground">
        <div className="w-5xl my-24  space-y-8 ">
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
              className="pb-2 text-gray-text hover:text-black hover:cursor-pointer"
            >
              Favorit
            </Link>
            <Link
              to="/AccountAddres"
              className="pb-2 border-b border-black font-medium hover:cursor-pointer"
            >
              Addresses
            </Link>
          </nav>

          {/* <!-- No Address Message --> */}
          {Address?.length < 1 && (
            <section className="bg-gray-text/15 py-10 text-center rounded-md">
              <p className="font-semibold mb-1">
                You have no addresses on file
              </p>
              <p className="">
                Add your shipping address and begin placing orders!
              </p>
            </section>
          )}
          {/* <!-- Add New Address Button --> */}
          <section>
            <Link
              to="/FormAddress"
              className="w-full border border-gray-300 rounded-xl p-7 flex items-center  space-x-4 hover:bg-gray-50"
            >
              <img src={plus} alt="" />
              <span className="font-medium">Add a new address</span>
            </Link>
          </section>
          {Address.map((item) => (
          <div className="w-full  border border-gray-300 rounded-xl p-5 bg-white shadow-sm flex flex-col space-y-3"
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
                <span className="text-gray-600 font-normal">{Useraccount.phone}</span>
              </p>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-black text-white text-sm rounded-full">
                {item.place}
              </span>
              <p className="text-gray-700 text-sm">{item.streetname} {item.city},{item.provinci}</p>
            </div>
          </div>
          ))}

        </div>
      </main>
    </Layouts>
  );
};
