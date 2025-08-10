import React from "react";
import { Layouts } from "../Pages/Layouts";

export const ContactUs = () => {
  return (
    <Layouts>
      <section className="w-full flex justify-center bg-gray-secondbackground">
        <div className="w-fit mt-24 mb-24 px-10 py-10 flex flex-col items-center bg-white rounded-xl shadow">
          <h1 className="text-xl">Have a Question?</h1>
          <h2 className="mt-6 mb-3 text-lg">Have more questions or need help?</h2>
          <h3 className="text-lg">
            Contact the Arliva team and we'll help you out!
          </h3>
          <div className="mt-6">
            <form className="">
              <div className=" flex space-x-6">
                <div className="space-y-3  flex flex-col text-sm">
                  <label htmlFor="" className="">
                    Nama
                  </label>
                  <input
                    type="text"
                    placeholder="Fullname"
                    className="w-80 px-4 py-2.5  border rounded-lg placeholder-black"
                  />
                </div>
                <div className="space-y-3 flex flex-col  text-sm">
                  <label htmlFor="" className="">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Addres"
                    className="w-80 px-4 py-2.5  border rounded-lg placeholder-black"
                  />
                </div>
              </div>
              <div className="mt-6 space-y-3 flex flex-col text-sm">
                <label htmlFor="" className="">
                  Message
                </label>
                <textarea
                  type="text"
                  placeholder="Any questions about the product and your order are welcome"
                  className=" h-40 px-4 py-2.5  border rounded-lg align-top placeholder-black"
                />
              </div>
              <button className="w-52 mt-6 px-2.5 py-2.5 font-semibold text-base text-center text-white bg-black rounded-full cursor-pointer">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
