import React from "react";
import { Layouts } from "../Pages/Layouts";
import { Link } from "react-router";
import { GetData } from "../Hook/GetData";

export const DetailFaq = () => {
  const {Data} = GetData(`http://localhost:5000/DetailFaq?faq=${res.data.quest}`)
  return (
    <Layouts>
      <main className="max-w-3xl mx-auto px-4 py-24 ">
        {/* <!-- Back to FAQ --> */}
        <a
          href="/Faq  "
          className="flex items-center text-sm font-bold text-black space-x-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <Link to="/Faq">Back to Faq</Link>
        </a>
       
       {Data.map((item) => (
        <div>
        <h1 className="text-xl mt-16">
          {item.faq}
        </h1>
        <div className="text-sm mt-6  space-y-4">
          <p>
            {item.detailfaq}
          </p>
        </div>
        </div>
        ))}
      </main>
    </Layouts>
  );
};
