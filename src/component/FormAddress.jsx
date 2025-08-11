import React, { useState } from "react";
import { Layouts } from "../Pages/Layouts";
import  Prev  from "../assets/panah.svg";
import siteData from "../DataWeb/SideData";
import dropdown from "../assets/panah.svg";
import { Link } from "react-router";
export const FormAddress = () => {
 const [selectProvinsi,setselectProvinsi] = useState ("")
 const [City,setCity] = useState ([])
const HandleSetProvinsi = (e) => {
   const Provinsi = e.target.value
   setselectProvinsi(Provinsi)

   const City = siteData.setProvinsi.find((item) => item.provinsi === Provinsi);
   setCity(City ? City.kota  : [])
}
console.log(City)

  return (
    <Layouts>
      <div className="bg-white text-black font-sans flex justify-center p-10">
        <main className="w-1/2 shadow rounded-xl p-10 space-y-6">
          {/* <!-- Header --> */}
          <header className="flex items-center space-x-1 text-xl font-medium">
            <Link to="/AccountAddres">
              <img src={Prev} alt="" className="rotate-90 w-6 self-start mb-1"/>
            </Link>
            <h1>Address</h1>
          </header>

          {/* <!-- Address Form --> */}
          <form className="space-y-4">
            {/* <!-- Fullname --> */}
            <div>
              <label className="block font-medium mb-1 text-base">Fullname</label>
              <input
                type="text"
                className="w-full border rounded-xl px-2.5 py-3 "
                placeholder="Fullname"
              />
            </div>

            {/* <!-- Street Name --> */}
            <div>
              <label className="block font-medium mb-1 text-base">Street Name</label>
              <input
                type="text"
                className="w-full border rounded-xl px-2.5 py-3"
                placeholder="Street Name"
              />
            </div>

            {/* <!-- Place --> */}
             <div className="space-y-2 mb-4">
            <label className="text-base block">Place</label>
            <div className="relative group">
              <img
                src={dropdown}
                alt=""
                className="absolute right-3 bottom-4  "
              />
              <select className="w-full border  rounded-xl px-2.5 py-3 text-sm appearance-none  ">
                <option value="" >Select Place</option>
                  <option>Home</option>
                  <option>Office</option>
              </select>
            </div>
          </div>

            {/* <!-- Province --> */}
             <div className="space-y-2 mb-4">
            <label className="text-base block">Province</label>
            <div className="relative group">
              <img
                src={dropdown}
                alt=""
                className="absolute right-3 bottom-4   "
              />
              <select onChange={HandleSetProvinsi} className="w-full border  rounded-xl px-2.5 py-3 text-sm appearance-none  ">
                <option>Select Provinci</option>
                {siteData.setProvinsi.map((item) => (
                  <option key={item.id} value={item.provinsi}>{item.provinsi}</option>
                ))}
              </select>
            </div>
          </div>

            {/* <!-- City --> */}
             <div className="space-y-2 mb-4">
            <label className="text-base block">City</label>
            <div className="relative group">
              <img
                src={dropdown}
                alt=""
                className="absolute right-3 bottom-4   "
              />
              <select disabled={!selectProvinsi} className="w-full border  rounded-xl px-2.5 py-3 text-sm appearance-none  ">
                <option>Select City</option>
                {City.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

            {/* <!-- Buttons --> */}
            <div className="w-full flex space-x-3 mt-6">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-full  hover:bg-gray-800 w-1/2"
              >
                Save
              </button>
              <button
                type="reset"
                className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 w-1/2"
              >
                Reset
              </button>
            </div>
          </form>
        </main>
      </div>
    </Layouts>
  );
};
