import React from "react";
import { Layouts } from "../Pages/Layouts";

export const Register = () => {
  return (
    <Layouts>
      <section className="min-h-screen flex items-center justify-center bg-gray-secondbackground">
        <div className="w-lg bg-white rounded-xl shadow px-10 py-10">
          <h1 className="text-4xl  text-center mb-16">Sign Up</h1>

          <form className="text-base"> 
            {/* <!-- Fullname --> */}
            <label className="block">
              <span className="sr-only">Fullname</span>
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                required
                className="w-full border rounded-md mb-4 px-5 py-3 placeholder-black "
              />
            </label>

            {/* <!-- Email --> */}
            <label className="block">
              <span className="sr-only">E-mail</span>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className="w-full border rounded-md mb-4 px-5 py-3 placeholder-black"
              />
            </label>

            {/* <!-- Password --> */}
            <label className="block">
              <span className="sr-only">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full border rounded-md mb-4 px-5 py-3 placeholder-black"
              />
            </label>

            {/* <!-- Phone Number --> */}
            <div className="flex overflow-hidden border rounded-md">
              <span className="bg-black text-white px-5 flex items-center text-sm">
                +62
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="85724215989"
                required
                className="w-full px-3 py-3  placeholder-gray-text focus:outline-none"
              />
            </div>

            {/* <!-- Submit Button --> */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 mt-6 rounded-full cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-3 text-center text-sm">
            Already have an account?{" "}
            <a href="/Login" className="underline">
              Sign in
            </a>
          </p>
        </div>
      </section>
    </Layouts>
  );
};
