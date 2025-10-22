import React, { useEffect, useState } from "react";
import { Layouts } from "../Pages/Layouts";
import axios from "axios";

export const Register = () => {
  const [Register,setRegister] = useState();
  const [Data,setData] = useState();
  useEffect(() => {
    axios.get(`http://localhost:5000/DataUser`)
    .then((res) => setData(res.data))
  },[])
  const HandleRegister = async (e) => {
    e.preventDefault();
    const formdata = {
      id: Date.now().toString(),
      fullname: Register.fullname,
      email: Register.email,
      password: Register.password,
      phone: Register.phone,
      
    };
    await axios.post(`http://localhost:5000/DataUser`, formdata)
    alert("Data Berhasil Dibuat")
    setRegister({
      id:"",
      fullname: "",
      email: "",
      password: "",
      phone: "",
    })
  }
    console.log(Data)
  return (
    <Layouts>
      <section className="min-h-screen flex items-center justify-center bg-gray-secondbackground">
        <div className="w-lg bg-white rounded-xl shadow px-10 py-10">
          <h1 className="text-4xl  text-center mb-16">Sign Up</h1>

          <form className="text-base" onSubmit={HandleRegister}> 
            {/* <!-- Fullname --> */}
            <label className="block">
              <span className="sr-only">Fullname</span>
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                required
                onChange={(e) => setRegister({...Register,fullname:e.target.value})}
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
                onChange={(e) => setRegister({...Register,email:e.target.value})}
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
                onChange={(e) => setRegister({...Register,password:e.target.value})}
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
                onChange={(e) => setRegister({...Register,phone:e.target.value})}
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
