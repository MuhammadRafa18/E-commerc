import React from "react";
import { Layouts } from "../Pages/Layouts";
import { Link } from "react-router";
import  Prev  from "../assets/panah.svg";
export const Setting = () => {
  return (
    <Layouts>
      <main class="py-12 bg-gray-secondbackground text-black font-sans flex justify-center items-start min-h-screen ">
        <section class="w-1/2 p-10 bg-white rounded-xl shadow ">
           <header className=" mb-6 flex items-center space-x-1 text-xl font-medium">
            <Link to="/AccountAddres">
              <img src={Prev} alt="" className="rotate-90 w-6 self-start mb-1"/>
            </Link>
            <h1>Settings</h1>
          </header>

          {/* <!-- Form Account --> */}
          <form class="space-y-4">
            {/* <!-- Email --> */}
            <div className="">
              <label class="block text-base  mb-1 font-medium">Email</label>
              <input
                type="email"
                class="w-full border rounded-xl px-2.5 py-3 text-sm "
                value="rafaalmaqdis53@gmail.com"
              />
            </div>

            {/* <!-- Fullname --> */}
            <div>
              <label class="block text-base  mb-1 font-medium">Fullname</label>
              <input
                type="text"
                class="w-full border rounded-xl px-2.5 py-3 text-sm"
                value="Rafa almaqdis"
              />
            </div>

            {/* <!-- Phone number --> */}
            <div>
              <label class="block text-base  mb-1 font-medium">Phone number</label>
              <div class="flex">
                <span class="bg-black text-white px-3 flex items-center rounded-l-xl">
                  +62
                </span>
                <input
                  type="text"
                  class="w-full border rounded-r-xl px-2.5 py-3 text-sm"
                  value="85724219589"
                />
              </div>
            </div>

            {/* <!-- Catatan --> */}
            <p class="text-sm text-red-600 mt-1">
              * Leave blank if you don't want to replace
            </p>

            {/* <!-- New Password  --> */}
            <div class="flex gap-4">
              <div class="w-1/2">
                <label class="block text-base  mb-1 font-medium">Password</label>
                <input
                  type="password"
                  class="w-full border rounded-xl px-2.5 py-3 text-sm"
                  placeholder="Password"
                />
              </div>
              <div class="w-1/2">
                <label class="block text-base  mb-1 font-medium">Repeat password</label>
                <input
                  type="password"
                  class="w-full border rounded-xl px-2.5 py-3 text-sm"
                  placeholder="Repeat password"
                />
              </div>
            </div>

            {/* <!-- Button --> */}
            <div class="w-full flex space-x-3  mt-4">
              <button
                type="submit"
                class="w-1/2 bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800"
              >
                Save
              </button>
              <button
                type="button"
                class="w-1/2 border border-black rounded-full px-6 py-2 hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          </form>
        </section>
      </main>
    </Layouts>
  );
};
