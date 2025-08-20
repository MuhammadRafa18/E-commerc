import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import searchBar from "../assets/searchBar.svg";

export const Navbar = () => {
  const [Open, SetOpen] = useState(false);

  useEffect(() => {
    if(Open){
       document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    }
  },[Open])

  return (
    <>
      <header className="sticky top-0 z-20 w-full px-12 lg:px-16 py-4 bg-white">
        <nav className="flex justify-between  items-center">
          <button className="lg:hidden" onClick={() => SetOpen(!Open)}>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {Open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <ul className="hidden lg:flex space-x-5 text-base ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Cart">Chart (3)</Link>
            </li>
            <li>
              <Link to="/Category_Produk">Shop All</Link>
            </li>
          </ul>
          <h1 className="text-4xl font-semibold">Arliva</h1>
          <ul className="hidden lg:flex space-x-5 text-base ">
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="">Search</Link>
            </li>
            <li>
              <Link to="/Login">Sign In</Link>
            </li>
          </ul>
          <button className="lg:hidden ">
            <img src={searchBar} alt="" />
          </button>
        </nav>
      </header>
      {Open && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-20 z-10"
            onClick={() => SetOpen(false)} // klik overlay buat nutup menu
          />
          <aside className="w-5/12  px-12 py-5 fixed top-1 z-30 lg:hidden space-y-4 bg-bg-card shadow-xl-full rounded-xl">
            <button className="lg:hidden" onClick={() => SetOpen(!Open)}>
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {Open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <ul className="mb-3 space-y-3 p-4 bg-white rounded-xl shadow ">
              <li className=" py-1.5 border-b border-gray-line">
                <Link to="/Login">Sign In</Link>
              </li>
              <li className=" py-1.5 ">
                <Link to="/">Home</Link>
              </li>
              <li className=" py-1.5 ">
                <Link to="/Category_Produk">Shop All</Link>
              </li>
              <li className=" py-1.5 ">
                <Link to="/ContactUs">Contact Us</Link>
              </li>
              <li className=" py-1.5 ">
                <Link to="">Chart</Link>
              </li>
            </ul>
          </aside>
        </>
      )}
    </>
  );
};
