import React, { useContext, useEffect, useState } from "react";
import { Layouts } from "../Pages/Layouts";
import { Link, useNavigate } from "react-router";
import Prev from "../assets/panah.svg";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
export const Setting = () => {
  const navigate = useNavigate();
  const { Useraccount, setUseraccount, logout } = useContext(AuthContext);
  const [FormAccount, setFormAccount] = useState(Useraccount ||{});
  const [ReapetPassword,setReapetPassword] = useState();
  useEffect(() => {
    setFormAccount(Useraccount || {})
  },[Useraccount])
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const HandleEdit = async (e) => {
    e.preventDefault();
    if(FormAccount.password && FormAccount.password !== ReapetPassword){
      alert("Password dan Reapet Password tidak sama");
      return;
    }
     try{
      const res = await axios.patch(`http://localhost:5000/DataUser/${Useraccount.id}`, FormAccount);
      setUseraccount(res.data)
      localStorage.setItem("Useraccount", JSON.stringify(res.data))
      alert("Sukses Update")
      navigate(`/AccountFavorit`)
     }catch (err){
      console.error("errr updaate : ", err)
      alert("Data gagal diupdate")
     }
  }
  console.log(FormAccount)
  return (
    <Layouts>
      <main className="py-12 bg-gray-secondbackground text-black font-sans flex justify-center items-start min-h-screen ">
        <section className="w-1/2 p-10 bg-white rounded-xl shadow ">
          <header className=" mb-6 flex items-center space-x-1 text-xl font-medium">
            <Link to="/AccountAddres">
              <img
                src={Prev}
                alt=""
                className="rotate-90 w-6 self-start mb-1"
              />
            </Link>
            <h1>Settings</h1>
          </header>

          {/* <!-- Form Account --> */}
          <form className="space-y-4" onSubmit={HandleEdit}>
            {/* <!-- Email --> */}
            <div className="">
              <label className="block text-base  mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded-xl px-2.5 py-3 text-sm "
                value={FormAccount.email || ""}
                onChange={(e) =>
                  setFormAccount({ ...FormAccount, email: e.target.value })
                }
              />
            </div>

            {/* <!-- Fullname --> */}
            <div>
              <label className="block text-base  mb-1 font-medium">
                Fullname
              </label>
              <input
                type="text"
                className="w-full border rounded-xl px-2.5 py-3 text-sm"
                value={FormAccount.fullname || ""}
                onChange={(e) =>
                  setFormAccount({ ...FormAccount, fullname: e.target.value })
                }
              />
            </div>

            {/* <!-- Phone number --> */}
            <div>
              <label className="block text-base  mb-1 font-medium">
                Phone number
              </label>
              <div className="flex">
                <span className="bg-black text-white px-3 flex items-center rounded-l-xl">
                  +62
                </span>
                <input
                  type="text"
                  className="w-full border rounded-r-xl px-2.5 py-3 text-sm"
                  value={FormAccount.phone || ""}
                  onChange={(e) =>
                    setFormAccount({ ...FormAccount, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* <!-- Catatan --> */}
            <p className="text-sm text-red-600 mt-1">
              * Leave blank if you don't want to replace
            </p>

            {/* <!-- New Password  --> */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-base  mb-1 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border rounded-xl px-2.5 py-3 text-sm"
                  placeholder="Password"
                   onChange={(e) =>
                    setFormAccount({ ...FormAccount, password: e.target.value })
                  }
                />
              </div>
              <div className="w-1/2">
                <label className="block text-base  mb-1 font-medium">
                  Repeat password
                </label>
                <input
                  type="password"
                  className="w-full border rounded-xl px-2.5 py-3 text-sm"
                  placeholder="Repeat password"
                  value={ReapetPassword}
                  onChange={(e) => setReapetPassword(e.target.value)}
                  required={FormAccount.password}
                />
              </div>
            </div>

            {/* <!-- Button --> */}
            <div className="w-full flex space-x-3  mt-4">
              <button
                type="submit"
                className="w-1/2 bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800"
              >
                Save
              </button>
              <button
                type="button"
                className="w-1/2 border border-black rounded-full px-6 py-2 hover:bg-gray-100"
                onClick={handleLogout}
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
