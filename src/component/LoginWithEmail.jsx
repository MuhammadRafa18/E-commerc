import React, { useContext } from "react";
import { Layouts } from "../Pages/Layouts";
import { AuthContext } from "../Context/AuthProvider";
import { ESModulesEvaluator } from "vite/module-runner";
import axios from "axios";
import { useNavigate } from "react-router";

export const LoginWithEmail = () => {
   const { login } = useContext(AuthContext)
   const { Form,setForm,Useraccount,setUseraccount } = useContext(AuthContext);
   const navigate = useNavigate(); 
   const HandleLogin =  async (e) => {
     e.preventDefault();
      try{
      const res =  await axios.get(`http://localhost:5000/DataUser`)
      const user = res.data.find((u) => u.email === Form.email && u.password === Form.password)
      if(user){
      setUseraccount(user)
      localStorage.removeItem("Form");
      alert("Berhasil login")
      navigate(`/`)
      }else{
       alert("Email atau password salah");
      }
     
    }catch (err){
       console.error("Login error:", err);
    }
   }
  // console.log(Form)
  return (
    <Layouts>
      <section className="min-h-screen flex items-center justify-center bg-gray-secondbackground">
        <div className="w-lg bg-white rounded-xl shadow px-10 py-6">
          <h1 className="text-4xl  text-center mb-16">Sign In</h1>
          <form className="text-base" onSubmit={HandleLogin}>
            {/* <!-- Email --> */}
            <label className="block">
              <span className="sr-only">E-mail</span>
              <input
                type="email"
                name="email"
                value={Form.email}
                readOnly
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
                onChange={(e) => setForm({...Form,password:e.target.value})}
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
