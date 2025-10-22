import React, { useContext } from "react";
import { Layouts } from "../Pages/Layouts";
import phone from "../assets/phone.svg"
import google from "../assets/google.svg"
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router";

export const Login = () => {
  const { Form,setForm} = useContext(AuthContext);
  const navigate = useNavigate();
  const HandleEmail = (e) => {
    e.preventDefault();
    
    if(Form.email){
      navigate(`/LoginWithEmail`)
    }
    
  }
  console.log(Form)
  return (
    <Layouts>
      <section className="min-h-screen flex items-center justify-center bg-gray-secondbackground">
        <div className="w-md bg-white rounded-xl shadow px-10 py-10">
          <h1 className="text-4xl text-center mb-16">Sign In</h1>

          <div className="space-y-4">
            <button className="w-full flex items-center pl-7 border rounded-full py-3 space-x-2 cursor-pointer">
              <img src={google} alt="Google logo" className="w-7 h-7" />
              <span>Sign In with Google</span>
            </button>

            <a href="/LoginWithTelp"  className="w-full flex items-center pl-7 border rounded-full py-3 space-x-2">
              <img src={phone} alt="Phone icon" className="w-7 h-7" />
              <span>Sign In with number phone</span>
            </a>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-line" />
            <span className="mx-4 text-sm text-black">OR</span>
            <hr className="flex-grow border-gray-line" />
          </div>

          <form onSubmit={HandleEmail}>
            <label  className="sr-only">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              className="w-full border rounded-md px-5 py-3 mb-6 placeholder-black"
              required
              onChange={(e) => {
                setForm({...Form,email:e.target.value})
              }}
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <p className="mt-3 text-center text-sm">
            Don't have an account?{" "}
            <a href="/Register" className="underline">
              Create account
            </a>
          </p>
        </div>
      </section>
    </Layouts>
  );
};
