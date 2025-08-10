import React from "react";
import { Layouts } from "../Pages/Layouts";
import google from "../assets/google.svg"
import email from "../assets/email.svg"

export const Vertivikasi = () => {
  return (
    <Layouts>
      <section className="flex items-center justify-center min-h-screen bg-gray-secondbackground">
        <div className="w-lg bg-white rounded-xl shadow px-10 py-6 ">
          {/* <!-- Header --> */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <img src="" alt="" />
            <h1 className="text-4xl ">Masukan Kode OTP</h1>
          </div>

          {/* <!-- Subtext --> */}
          <p className="mb-16 text-center text-base text-gray-text">
            Kode OTP 4 digit telah dikirim
          </p>

          {/* <!-- OTP Input --> */}
          <div className="flex justify-center space-x-3 mb-4">
            <input
              type="text"
              maxlength="1"
              className="w-16 h-16 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              maxlength="1"
              className="w-16 h-16 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              maxlength="1"
              className="w-16 h-16 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              maxlength="1"
              className="w-16 h-16 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* <!-- Divider --> */}
          <div className="flex items-center space-x-2 mb-4">
            <hr className="flex-1 border-gray-line" />
            <span className="text-base text-black">OR</span>
            <hr className="flex-1 border-gray-line" />
          </div>

          {/* <!-- Sign in buttons --> */}
          <button className="flex items-center px-7 w-full py-3 border rounded-full mb-4 cursor-pointer">
            <img src={google} alt="Google" className="w-7 h-7 mr-2" />
            <span className="text-base">Sign In with Google</span>
          </button>

          <button className="flex items-center px-7 w-full py-3 border rounded-full mb-6 cursor-pointer">
            <img src={email} alt="Email" className="w-7 h-7 mr-2" />
            <span className="text-base">Sign In with Email</span>
          </button>

          {/* <!-- Send Button --> */}
           <button className="w-full py-4 bg-black text-white rounded-full text-base  mb-3 cursor-pointer">
            Send
          </button>

          {/* <!-- Bottom Text --> */}
          <p className="text-center text-sm text-gray-text">
            Don't have an account?{" "}
            <a href="/Register" className="text-black font-medium">
              Create account
            </a>
          </p>
        </div>
      </section>
    </Layouts>
  );
};
