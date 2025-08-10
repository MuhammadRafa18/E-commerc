import React from "react";
import { Layouts } from "../Pages/Layouts";
import siteData from "../DataWeb/SideData";
import search from "../assets/search.svg";
import { Link, Links } from "react-router";

export const Faq = () => {
  return (
    <Layouts>
      <main class="">
        <div className="bg-gray-secondbackground  pt-12 pb-20">
          {/* <!-- Title --> */}
          <h1 class="text-center text-xl  mb-6">Frequently Asked Questions</h1>

          {/* <!-- Search Input --> */}
          <div class="w-3/5 flex items-center border rounded-md px-5 py-3.5 space-x-3  mx-auto">
            <img src={search} alt="" className="w-5 cursor-pointer" />
            <input
              type="text"
              placeholder="What can we help you find?"
              class="w-full outline-none placeholder:text-black text-lg"
            />
          </div>
        </div>

        {/* <!-- FAQ Sections --> */}
        <div class="bg-white flex pt-5 pb-24 justify-center">
          <div className="w-1/2">
            {siteData.Faq.map((item) => (
              <div
                class="flex space-x-24 py-2.5 border-b border-gray-line"
                key={item.id}
              >
                <div class="w-24 font-semibold">{item.judul}</div>
                <ul class="text-gray-text space-y-4">
                  <li>
                    <Link>{item.quest1}</Link>
                  </li>
                  <li>
                    <Link>{item.quest2}</Link>
                  </li>
                  <li>
                    <Link>{item.quest3}</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layouts>
  );
};
