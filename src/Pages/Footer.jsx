import React from "react";
import { Link } from "react-router";
import link1 from "../assets/Link1.png";
import link2 from "../assets/Link2.png";
import link3 from "../assets/Link3.png";
import link4 from "../assets/Link4.png";
export  const Footer = () => {
  return (
    <footer className="w-full  px-12 lg:px-16 py-6">
      <div className="md:flex  justify-between items-start space-y-6  ">

       {/* section Company */}
        <section className="space-y-3">
          <h3 className="text-base">Company</h3>
          <ul className="space-y-4 text-sm text-gray-text">
            <li>
              <Link to="/AboutCompany">About Us</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="/Category_Produk">Product</Link>
            </li>
          </ul>
        </section>

        {/* section Help */}
        <section className="space-y-3">
          <h3>Help</h3>
          <ul className="space-y-4 text-sm text-gray-text">
            <li>
              <Link to="/Faq">Faq</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
            <li>
              <Link to="">Terms & Conditions</Link>
            </li>
          </ul>
        </section>

        {/* section newsletter */}
        <section className="space-y-3">
          <h3>Newsletter</h3>
          <div className="text-gray-text">
            Subscribe to receive updates, access
            <p>to exclusive deals, and more.</p>
          </div>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Email address"
              className="py-2 pl-3 w-60 md:w-full text-sm border text-black  "
            />
            <button className="block py-2  px-4 text-xs text-white  bg-black ">
              Subscribe
            </button>
          </form>
        </section>
      </div>
      
      {/* Section sosmed */}
      <section className="w-1/2 mt-6 flex items-center justify-between ">
        <h3 className="text-sm">@ 2025 Arliva</h3>
        <ul className="flex space-x-3">
          <li>
            {" "}
            <img src={link1} alt="" className="w-8" />
          </li>
          <li>
            {" "}
            <img src={link2} at="" className="w-8" />
          </li>
          <li>
            {" "}
            <img src={link3} alt="" className="w-8" />
          </li>
          <li>
            {" "}
            <img src={link4} alt="" className="w-8" />
          </li>
        </ul>
      </section>
    </footer>
  );
}
