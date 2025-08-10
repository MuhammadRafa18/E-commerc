import React from "react";
import { Layouts } from "../Pages/Layouts";
import siteData from "../DataWeb/SideData";
import next from "../assets/panah.svg";
import arrow from "../assets/panahpanjang.svg";
import arrowfilter from "../assets/panahfilter.svg";

export const CategoryProduk = () => {
  
  
  return (
    <Layouts>
      <div className="flex items-start space-x-4 px-4 md:px-16 py-8">
        {/* Sidebar */}
        <section className="w-96  border-gray-line border-r">
          {/* <!-- Breadcrumb --> */}
          <nav aria-label="Breadcrumb" className="text-xs text-gray-text mb-3">
            <ol className="flex items-center space-x-0">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <img src={next} alt="" className="-rotate-90" />
              </li>
              <li>
                <a href="#">Bestseller</a>
              </li>
              <li>
                <img src={next} alt="" className="-rotate-90" />
              </li>
              <li className="font-semibold text-black">Facewash</li>
            </ol>
          </nav>

          {/* <!-- Heading --> */}
          <header className="mb-6">
            <h1 className=" mb-3 text-lg">Bestseller Facewash</h1>
            <p className="text-xs text-gray-text pr-6">
              Choose our five best-selling facewashes to try for free...{" "}
              <a href="#" className="underline">
                Read more
              </a>
            </p>
          </header>
           {/* <!-- Sidebar Filter --> */}
          <div className="flex flex-col  lg:flex-row ">
            <aside className="w-full pr-8 flex flex-col justify-center items-center ">
              {/* <!-- Category Filter --> */}
              <section className="w-full  space-y-2 text-sm">
                {siteData.Category.map((item) => (
                  <details key={item.id} className="group">
                    <summary className="py-1.5 flex items-center justify-between border-t border-gray-line cursor-pointer ">
                      {item.category}
                      <img
                        src={next}
                        alt=""
                        className="px-1 py-2 border border-gray-line rounded-full transition-transform duration-300 group-open:rotate-0 rotate-180"
                      />
                    </summary>
                    <div className="mt-4 space-y-1 border border-gray-line rounded-lg">
                      {siteData.CategoryProduk.map((label) => (
                        <label key={label.id} className="p-2 space-x-2 flex items-center border-b  border-gray-line cursor-pointer">
                          <input
                            type="radio"
                            name="kategori"
                            defaultChecked
                            className="w-5 h-5 peer-sr-only rounded-full border border-gray-line"
                          />
                          <span>{label.filter}</span>
                        </label>
                      ))}
                    </div>
                  </details>
                ))}
              </section>

              <button className="w-fit mt-6 px-4 py-2 flex items-center space-x-2 text-sm  border rounded-full cursor-pointer ">
                <img src={arrow} alt="" />
                <span>Back to top</span>
              </button>
            </aside>
          </div>
        </section>

        {/* <!-- Main Content --> */}
        <section className="w-full lg:w-3/4">
          {/* <!-- Filter Bar --> */}
          <div className="space-x-1 mb-6 pb-4 flex  items-center  text-sm text-gray-text border-b border-gray-line ">
            <img src={arrowfilter} alt="" className="" />
            <button className="underline">Hide filters</button>
            <span>| {CategoryProduk.length} Items</span>
          </div>

          {/* <!-- Product Grid --> */}
          <div className=" w-full grid grid-cols-3 gap-4">
            {/* <!-- Product Card --> */}
            {siteData.ProdukBestseller.map((item) => (
              <div key={item.id} className="w-full px-6 py-4 space-y-3 flex flex-col items-center bg-bg-card  rounded-lg shrink-0  ">
                <div className=" w-full flex justify-between items-center">
                  <div className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md">
                    <img src={item.love} alt="Favorite" className=" " />
                  </div>
                  <div className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md">
                    <img src={item.cart} alt="Cart" className="" />
                  </div>
                </div>
                <img src={item.gambar} alt="Produk"  className=""/>
                <p className=" w-fit px-1.5 py-0.5 text-xs text-gray-text  border border-gray-text ">
                  {item.size}
                </p>
                <div className="w-full flex justify-between ">
                  <p className="text-sm font-semibold">{item.nama}</p>
                  <p className="text-xs">{item.price}</p>
                </div>
                <div className="w-full space-x-1  flex items-center  text-xs ">
                  <img src={item.start} alt="Rating" className="" />
                  <p className="pt-0.5">{item.rating}</p>
                  <p className="pt-0.5 text-gray-text ">{item.stok}</p>
                </div>
              </div>
            ))}

            {/* <!-- Ulangi card sebanyak produk yang tersedia --> */}
          </div>
        </section>
      </div>
    </Layouts>
  );
};
