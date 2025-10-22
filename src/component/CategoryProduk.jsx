import React, { useEffect, useState } from "react";
import { Layouts } from "../Pages/Layouts";
import cart from "../assets/cart.svg";
import carton from "../assets/carton.svg";
import love from "../assets/love.svg";
import loveon from "../assets/loveon.svg";
import next from "../assets/panah.svg";
import arrowfilter from "../assets/panahfilter.svg";
import StarRatings from "react-star-ratings";
import { useLocation, useNavigate } from "react-router";
import { GetData } from "../Hook/GetData";
import axios from "axios";

export const CategoryProduk = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryType = queryParams.get("type");
  const [Filter, SetFilter] = useState(true);
  const [Product, setProduct] = useState([]);
  const { Data: Type } = GetData(`http://localhost:5000/type`);
  const { Data: Category } = GetData(`http://localhost:5000/category`);
  const [isActive, setisActive] = useState({
    category: "All",
    type: queryType || "Bestseller",
  });
  const [Readmore, setReadmore] = useState(false);
  const text =
    "Experience a comprehensive and balanced skincare experience. From cleansing to final protection, each of our products—from face wash, serum, sunscreen, to moisturizer—is designed with gentle yet effective formulations to support your skin's health every day. We believe that healthy skin not only looks radiant but also feels comfortable, moisturized, and nourished from within.";
  useEffect(() => {
    let params = {};
    if (queryType !== "Bestseller") {
      params.type = queryType;
    }
    axios.get(`http://localhost:5000/produk`, { params }).then((res) => {
      if (queryType === "Bestseller") {
        const data = res.data.filter((item) => item.rating > 4);
        setProduct(data);
      } else {
        setProduct(res.data);
      }
    });
  }, [queryType]);

  const HandleFilterProduct = async (type, category) => {
    let params = {};
    if (type !== "Bestseller") {
      params.type = type;      
    } else if (category !== "All"){
      params.category = category;
    }
    axios.get(`http://localhost:5000/produk`, { params }).then((res) => {
      if (type === "Bestseller") {
        const data = res.data.filter((item) => item.rating > 4);
        setProduct(data);
      } else {
        setProduct(res.data);
      }
    });
  };

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
  //  console.log(isActive.category)
  return (
    <Layouts>
      <div className="flex  items-start space-x-4 px-4 md:px-16 py-8">
        {/* Sidebar */}
        {Filter && (
          <section
            id="sidebar"
            className={`w-96  border-gray-line border-r transition-transform duration-1000 ease-in-out delay-1000 lg:block ${
              Filter ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            {/* <!-- Breadcrumb --> */}
            <nav
              aria-label="Breadcrumb"
              className="text-xs text-gray-text mb-3"
            >
              <ol className="flex items-center space-x-0">
                <li>
                  <a href="/">Shope</a>
                </li>
                <li>
                  <img src={next} alt="" className="-rotate-90" />
                </li>
                <li>
                  <a href="#">{isActive.type || isActive.type}</a>
                </li>
                <li>
                  <img src={next} alt="" className="-rotate-90" />
                </li>
                <li className="font-semibold text-black">
                  {isActive.category || "All"}
                </li>
              </ol>
            </nav>

            {/* <!-- Heading --> */}
            <header className="mb-6">
              <h1 className="flex mb-3 text-lg">
                {isActive.type || isActive.type}
                <img src={next} alt="" className="-rotate-90" />
                {isActive.category}
              </h1>
              <p className="text-xs text-gray-text pr-6 ">
                {Readmore ? text : `${text.substring(0, 180)}...`}
                <button
                  className="text-black cursor-pointer"
                  onClick={() => setReadmore(!Readmore)}
                >
                  {Readmore ? "Show less" : "Read more"}
                </button>
              </p>
            </header>
            {/* <!-- Sidebar Filter --> */}

            <div className="">
              <aside className="w-full pr-8 flex flex-col justify-center items-center ">
                {/* <!-- Category Filter  type --> */}
                <section className="w-full  space-y-2 text-sm">
                  <details className="group">
                    <summary className="py-1.5 flex items-center justify-between border-t border-gray-line cursor-pointer ">
                      Bestseller
                      <img
                        src={next}
                        alt=""
                        className="px-1 py-2 border border-gray-line rounded-full transition-transform duration-300 group-open:rotate-0 rotate-180"
                      />
                    </summary>
                    <div className="mt-2 mb-2 space-y-1 border border-gray-line rounded-lg">
                      <div
                        onClick={() => {
                          setisActive({
                            type: "Bestseller",
                            category:  "All",
                          });
                          HandleFilterProduct("Bestseller", "All");
                        }}
                      >
                        <label className="p-2 space-x-2 flex items-center border-b  border-gray-line cursor-pointer">
                          <div className="flex justify-center items-center w-5 h-5  rounded-full border  border-gray-line cursor-pointer ">
                            {isActive.type === "Bestseller" &&
                              isActive.category === "All" && (
                                <div className="w-3 h-3 rounded-full bg-black"></div>
                              )}
                          </div>
                          <span>All</span>
                        </label>
                      </div>
                      {Category.map((label) => (
                        <div
                          key={label.id}
                          onClick={() => {
                            setisActive({
                              type: "Bestseller",
                              category: label.category,
                            });
                            HandleFilterProduct("Bestseller", label.category);
                          }}
                        >
                          <label className="p-2 space-x-2 flex items-center border-b  border-gray-line cursor-pointer">
                            <div className="flex justify-center items-center w-5 h-5  rounded-full border  border-gray-line cursor-pointer ">
                              {isActive.type === "Bestseller" &&
                                isActive.category === label.category && (
                                  <div className="w-3 h-3 rounded-full bg-black"></div>
                                )}
                            </div>
                            <span>{label.category}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </details>
                </section>
                {/* <!-- Category Filter Type --> */}
                <section className="w-full  space-y-2 text-sm">
                  {Type?.length > 0 &&
                    Type.map((item) => (
                      <details key={item.id} className="group">
                        <summary className="py-1.5 flex items-center justify-between border-t border-gray-line cursor-pointer ">
                          {item.type}
                          <img
                            src={next}
                            alt=""
                            className="px-1 py-2 border border-gray-line rounded-full transition-transform duration-300 group-open:rotate-0 rotate-180"
                          />
                        </summary>

                        <div className="mt-2 mb-2 space-y-1 border border-gray-line rounded-lg">
                          {Category.map((label) => (
                            <div
                              key={label.id}
                              onClick={() => {
                                setisActive({
                                  type: item.type,
                                  category: label.category,
                                });
                                HandleFilterProduct(item.type, label.category);
                              }}
                            >
                              <label className="p-2 space-x-2 flex items-center border-b  border-gray-line cursor-pointer">
                                <div className="flex justify-center items-center w-5 h-5  rounded-full border  border-gray-line cursor-pointer ">
                                  {isActive.type === item.type &&
                                    isActive.category === label.category && (
                                      <div className="w-3 h-3 rounded-full bg-black"></div>
                                    )}
                                </div>
                                <span>{label.category}</span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </details>
                    ))}
                </section>
              </aside>
            </div>
          </section>
        )}

        {/* <!-- Main Content --> */}
        <section className="w-full xl:w-3/4">
          {/* <!-- Filter Bar --> */}
          <div className="space-x-1 mb-6 pb-4 flex  items-center  text-sm text-gray-text border-b border-gray-line ">
            <button
              onClick={() => SetFilter(!Filter)}
              className="relative underline flex group"
            >
              <img
                src={arrowfilter}
                alt=""
                className={`mr-1 transition-transform duration-300 ${
                  Filter ? "rotate-0" : "rotate-180"
                } `}
              />
              {Filter ? "Hide Filters" : "Show Filters"}
            </button>
            <span>| {Product.length} Items</span>
          </div>

          {/* <!-- Product Grid --> */}
          <div className=" w-full grid  2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 ">
            {/* <!-- Product Card --> */}
            {Product?.length > 0 &&
              Product.map((item) => (
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
        </section>
      </div>
    </Layouts>
  );
};
