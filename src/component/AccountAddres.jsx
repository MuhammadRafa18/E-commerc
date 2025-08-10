import React from "react";
import { Layouts } from "../Pages/Layouts";
import settings from "../assets/setting.svg";
import plus from "../assets/plus.svg"

export const AccountAddres = () => {
  return (
    <Layouts>
      <main className="w-full h-screen flex justify-center  bg-gray-secondbackground">
        <div className="w-5xl mt-24  space-y-8 ">
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
            <button className="pb-2 text-gray-text hover:text-black hover:cursor-pointer">Orders</button>
            <button className="pb-2 text-gray-text hover:text-black hover:cursor-pointer">Favorit</button>
            <button className="pb-2 border-b border-black font-medium hover:cursor-pointer">
              Addresses
            </button>
          </nav>

          {/* <!-- No Address Message --> */}
          <section className="bg-gray-text/15 py-10 text-center rounded-md">
            <p className="font-semibold mb-1">You have no addresses on file</p>
            <p className="">
              Add your shipping address and begin placing orders!
            </p>
          </section>

          {/* <!-- Add New Address Button --> */}
          <section>
            <button className="w-full border border-gray-300 rounded-xl p-7 flex items-center  space-x-4 hover:bg-gray-50">
              <img src={plus} alt="" />
              <span className="font-medium">Add a new address</span>
            </button>
          </section>
        </div>
      </main>
    </Layouts>
  );
};
