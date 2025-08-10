import React from "react";
import { Layouts } from "../Pages/Layouts";
import google from "../assets/google.svg"
import email from "../assets/email.svg"

export const LoginWithTelp = () => {
  return (
    <Layouts>
      <section className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="min-w-lg max-w-sm p-10 rounded-xl shadow  text-center">
          <h1 className="text-4xl  mb-16">Vertifikasi</h1>

          {/* Phone input */}
          <div className="flex mb-4 overflow-hidden border rounded-lg">
              <span className="bg-black text-white px-5 flex items-center text-base">
                +62
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="85724215989"
                required
                className="w-full px-3 py-4  placeholder-gray-text focus:outline-none"
              />
            </div>

          {/* Divider */}
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-line" />
            <span className="mx-3 text-black text-base">OR</span>
            <hr className="flex-grow border-gray-line" />
          </div>

          {/* Google Sign In */}
          <button className="flex items-center px-7 w-full py-3 border rounded-full mb-4 cursor-pointer">
            <img src={google} alt="Google" className="w-7 h-7 mr-2" />
            <span className="text-base">Sign In with Google</span>
          </button>

          {/* Email Sign In */}
          <button className="flex items-center px-7 w-full py-3 border rounded-full mb-6 cursor-pointer">
            <img src={email} alt="Email" className="w-7 h-7 mr-2" />
            <span className="text-base">Sign In with Email</span>
          </button>

          {/* Send Button */}
          <button className="w-full py-4 bg-black text-white rounded-full text-base mb-3 cursor-pointer">
            Send
          </button>

          {/* Link to Create Account */}
          <p className="text-sm text-gray-text">
            Don't have an account?{" "}
            <a href="/Register" className="underline text-black">
              Create account
            </a>
          </p>
        </div>
      </section>
    </Layouts>
  );
};
