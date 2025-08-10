import React from "react";
import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="w-full  px-4 md:px-16 py-4 flex justify-between  items-center   ">
      <ul className="flex space-x-5 text-base ">
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
      <ul className="flex space-x-5 text-base ">
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
    </nav>
  );
};
