import React from "react";
import { Layouts } from "../Pages/Layouts";

export const LoginWithEmail = () => {
  return (
    <Layouts>
      <section className="min-h-screen flex items-center justify-center bg-gray-secondbackground">
        <div className="w-lg bg-white rounded-xl shadow px-10 py-6">
          <h1 className="text-4xl  text-center mb-16">Sign In</h1>
          <form className="text-base">
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
                className="w-full border rounded-md  px-5 py-3 placeholder-black"
              />
            </label>
            {/* <!-- Submit Button --> */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 mt-6 rounded-full cursor-pointer"
            >
              Sign In
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
