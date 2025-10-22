import React, { useContext, useEffect, useState } from "react";
import { Layouts } from "../Pages/Layouts";
import Prev from "../assets/panah.svg";
import siteData from "../DataWeb/SideData";
import dropdown from "../assets/panah.svg";
import { Link, useNavigate, useParams } from "react-router";
import { ProdukContext } from "../Context/ProdukProvider";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
export const FormAddress = () => {
  const [Form, setForm] = useState({});
  const { Useraccount, setUseraccount } = useContext(AuthContext);
  const [selectProvinsi, setselectProvinsi] = useState("");
  const [City, setCity] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/Addres/${id}`)
        .then((res) => {
          setForm(res.data)
          setselectProvinsi(res.data.provinci)
          const prev = siteData.setProvinsi.find((item) => item.provinsi === res.data.provinci );
          setCity(prev ? prev.kota : [] )
        });
    }
  }, [id]);
  const HandleSetProvinsi = (e) => {
    const Provinsi = e.target.value;
    setselectProvinsi(Provinsi);
    setForm({ ...Form, provinci: Provinsi });

    const City = siteData.setProvinsi.find(
      (item) => item.provinsi === Provinsi
    );
    setCity(City ? City.kota : []);
  };
  const HandleForm = async (e) => {
    e.preventDefault();
    try {
      const formdata = {
        id: Date.now().toString(),
        userId: Useraccount.id,
        fullname: Form.fullname,
        streetname: Form.streetname,
        place: Form.place,
        provinci: selectProvinsi,
        city: Form.city,
      };
      if(Form.id){
         await axios.put(`http://localhost:5000/Addres/${Form.id}`, formdata);
        alert("Addres berhasil Diupdate ")
      }else{
        await axios.post("http://localhost:5000/Addres", formdata);
        alert("Addres berhasil ditambahkan ")
      }
      navigate(`/AccountAddres`);
    } catch (err) {
      console.error("Error saat create/update produk:", err);
      alert("Gagal menyimpan produk ");
    }
  };

  return (
    <Layouts>
      <div className="bg-white text-black font-sans flex justify-center p-10">
        <main className="w-1/2 shadow rounded-xl p-10 space-y-6">
          {/* <!-- Header --> */}
          <header className="flex items-center space-x-1 text-xl font-medium">
            <Link to="/AccountAddres">
              <img
                src={Prev}
                alt=""
                className="rotate-90 w-6 self-start mb-1"
              />
            </Link>
            <h1>Address</h1>
          </header>

          {/* <!-- Address Form --> */}
          <form className="space-y-4" onSubmit={HandleForm}>
            {/* <!-- Fullname --> */}
            <div>
              <label className="block font-medium mb-1 text-base">
                Fullname
              </label>
              <input
                type="text"
                className="w-full border rounded-xl px-2.5 py-3 "
                placeholder="Fullname"
                required
                value={Form.fullname || ""}
                onChange={(e) => setForm({ ...Form, fullname: e.target.value })}
              />
            </div>

            {/* <!-- Street Name --> */}
            <div>
              <label className="block font-medium mb-1 text-base">
                Street Name
              </label>
              <input
                type="text"
                className="w-full border rounded-xl px-2.5 py-3"
                placeholder="Street Name"
                required
                value={Form.streetname || ""}
                onChange={(e) =>
                  setForm({ ...Form, streetname: e.target.value })
                }
              />
            </div>

            {/* <!-- Place --> */}
            <div className="space-y-2 mb-4">
              <label className="text-base block">Place</label>
              <div className="relative group">
                <img
                  src={dropdown}
                  alt=""
                  className="absolute right-3 bottom-4  "
                />
                <select
                  onChange={(e) => setForm({ ...Form, place: e.target.value })}
                  value={Form.place || ""}
                  required
                  className="w-full border  rounded-xl px-2.5 py-3 text-sm appearance-none  "
                >
                  <option value="">Select Place</option>
                  <option>Home</option>
                  <option>Office</option>
                </select>
              </div>
            </div>

            {/* <!-- Province --> */}
            <div className="space-y-2 mb-4">
              <label className="text-base block">Province</label>
              <div className="relative group">
                <img
                  src={dropdown}
                  alt=""
                  className="absolute right-3 bottom-4   "
                />
                <select
                  onChange={HandleSetProvinsi}
                  required
                  value={selectProvinsi || ""}
                  className="w-full border  rounded-xl px-2.5 py-3 text-sm appearance-none  "
                >
                  <option value="">Select Provinci</option>
                  {siteData.setProvinsi.map((item) => (
                    <option key={item.id} value={item.provinsi}>
                      {item.provinsi}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* <!-- City --> */}
            <div className="space-y-2 mb-4">
              <label className="text-base block">City</label>
              <div className="relative group">
                <img
                  src={dropdown}
                  alt=""
                  className="absolute right-3 bottom-4   "
                />
                <select
                  disabled={!selectProvinsi}
                  value={Form.city || ""}
                  required
                  onChange={(e) => setForm({ ...Form, city: e.target.value })}
                  className="w-full border  rounded-xl px-2.5 py-3 text-sm appearance-none  "
                >
                  <option value="">Select City</option>
                  {City.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* <!-- Buttons --> */}
            <div className="w-full flex space-x-3 mt-6">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-full  hover:bg-gray-800 w-1/2"
              >
                Save
              </button>
              <button
                type="reset"
                className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 w-1/2"
              >
                Reset
              </button>
            </div>
          </form>
        </main>
      </div>
    </Layouts>
  );
};
