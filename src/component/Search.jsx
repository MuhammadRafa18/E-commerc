import React, { useEffect, useState } from "react";
import close from"../assets/close.svg";
import { useNavigate } from "react-router";
import cart from "../assets/cart.svg";
import carton from "../assets/carton.svg";
import love from "../assets/love.svg";
import loveon from "../assets/loveon.svg";
import axios from "axios";
import StarRatings from "react-star-ratings";

export const Search = () => {
  const [Product,setProduct] = useState([])
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
   axios.get(`http://localhost:5000/produk`)
   .then((res) => setProduct(res.data))
  },[])
   const filteredProducts = Product.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  const toggleFavorite = async (id) => {
    try {
      const product = Product.find((p) => p.id === id);
      const res = await axios.patch(`http://localhost:5000/produk/${id}`, {
        favorite: !product.favorite,
      });
      setProduct((prev) => prev.map((p) => (p.id === id ? res.data : p)));
    } catch (err) {
      console.error(err.message);
    }
  };
  const toggleCart = async (id) => {
    try {
      const product = Product.find((p) => p.id === id);
      const res = await axios.patch(`http://localhost:5000/produk/${id}`, {
        cart: !product.cart,
      });
      setProduct((prev) => prev.map((p) => (p.id === id ? res.data : p)));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16">
      {/* Header */}
      <div className="w-full max-w-5xl px-6">
        <div className="flex items-center justify-between">
        <p className="text-gray-500 text-lg mb-2">Search Arliva</p>
        <button onClick={() => navigate(`/`) } className="cursor-pointer">
        <img src={close} alt=""  className="w-14"/>
        </button>
        </div>
        <h1 className="text-6xl font-semibold text-gray-800 mb-8">Search</h1>

        {/* Search Bar */}
        <div className="w-full mb-12">
          <input
            type="text"
            placeholder="Search product by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border-b border-gray-400 bg-transparent text-lg focus:outline-none focus:border-black py-2"
          />
        </div>

        {/* Search Results */}
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-xl">No products found.</p>
        ) : (
            <div className=" w-full grid  2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
           {filteredProducts?.length > 0 &&
              filteredProducts.map((item) => (
                <div
                  onClick={() => navigate(`/ProductDetail/${item.id}`)}
                  key={item.id}
                  className="min-w-72 px-6 py-4 space-y-3 flex flex-col items-center bg-bg-card  rounded-lg shrink-0 cursor-pointer  "
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className=" w-full flex justify-between items-center"
                  >
                    <button
                      className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md"
                      onClick={() => toggleFavorite(item.id)}
                    >
                      <img
                        src={item.favorite ? loveon : love}
                        alt=""
                        className="w-4 "
                      />
                    </button>
                    <button
                      className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md"
                      onClick={() => toggleCart(item.id)}
                    >
                      <img
                        src={item.cart ? carton : cart}
                        alt=""
                        className="w-4"
                      />
                    </button>
                  </div>
                  <img src={item.imageproduk} alt="Produk" className="w-16" />
                  <p className=" w-fit px-1.5 py-0.5 text-xs text-gray-text  border border-gray-text ">
                    {item.size}
                  </p>
                  <div className="w-full flex justify-between ">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs">Rp {item.price.toLocaleString()}</p>
                  </div>
                  <div className="w-full  flex items-center  justify-between text-xs ">
                    <div className="flex space-x-1">
                      <StarRatings
                        rating={item.rating}
                        starRatedColor="#facc15"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="2px"
                      />
                      <p className="pt-1">{item.rating}</p>
                    </div>
                    <p className="pt-1 text-gray-text ">({item.stok})</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
