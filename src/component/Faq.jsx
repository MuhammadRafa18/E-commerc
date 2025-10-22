import React from "react";
import { Layouts } from "../Pages/Layouts";
import siteData from "../DataWeb/SideData";
import search from "../assets/search.svg";
import { Link, Links, useNavigate } from "react-router";
import { GetData } from "../Hook/GetData";

export const Faq = () => {
  const url = `http://localhost:5000/Faq`;
  const { Data: Faq } = GetData(url);
  const navigate = useNavigate();
  return (
    <Layouts>
      <main className="">
        <div className="bg-gray-secondbackground  pt-12 pb-20">
          {/* <!-- Title --> */}
          <h1 className="text-center text-xl  mb-6">
            Frequently Asked Questions
          </h1>

          {/* <!-- Search Input --> */}
          <div className="w-3/5 flex items-center border rounded-md px-5 py-3.5 space-x-3  mx-auto">
            <img src={search} alt="" className="w-5 cursor-pointer" />
            <input
              type="text"
              placeholder="What can we help you find?"
              className="w-full outline-none placeholder:text-black text-lg"
            />
          </div>
        </div>

        {/* <!-- FAQ Sections --> */}
        <div className="bg-white flex pt-5 pb-24 justify-center">
          <div className="w-1/2">
            {Faq.map((item) => (
              <div
                className="flex space-x-24 py-2.5 border-b border-gray-line"
                key={item.id}
              >
                <div className="w-24 font-semibold">{item.judul}</div>
                <ul className="text-gray-text space-y-4">
                  <li>
                    <button
                      className="cursor-pointer"
                      onClick={() =>
                        navigate(
                          `/DetailFaq/${encodeURIComponent(item.quest1)}`
                        )
                      }
                    >
                      {item.quest1}
                    </button>
                  </li>
                  <li>
                    <button
                      className="cursor-pointer"
                      onClick={() =>
                        navigate(
                          `/DetailFaq/${encodeURIComponent(item.quest2)}`
                        )
                      }
                    >
                      {item.quest2}
                    </button>
                  </li>
                  <li>
                    <button
                      className="cursor-pointer"
                      onClick={() =>
                        navigate(
                          `/DetailFaq/${encodeURIComponent(item.quest3)}`
                        )
                      }
                    >
                      {item.quest3}
                    </button>
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
