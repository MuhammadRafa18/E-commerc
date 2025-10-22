import React, { useContext, useEffect } from "react";
import { Layouts } from "../Pages/Layouts";
import produk from "../assets/produk card.png";
import { useParams } from "react-router";
import { GetData } from "../Hook/GetData";
import { AuthContext } from "../Context/AuthProvider";


export const DetailOrder = () => {
  const {id} = useParams();
  const {Useraccount} = useContext(AuthContext)
  const {Data} = GetData(`http://localhost:5000/Order/${id}`);
  let subtotal = 0;
  let total = 0;
  if (Data?.items?.length > 0) {
  const item = Data.items[0];
  subtotal = item.price * item.qty;
  total = subtotal - (Data.diskon || 0) - (Data.ongkir || 0);
}
  return (
    <Layouts>
      <div className="flex flex-col lg:px-16 lg:py-24">
          {/* <!-- Order Information --> */}
          <section className="text-lg">
            <h2 className="font-semibold">Order Confirmation:</h2>
            <p className="mt-3 font-semibold ">
              Your order: <span>#12883HGYRJRK</span>
            </p>
            <p className="mt-1 text-sm ">Order date: 01/02/2025</p>
          </section>
          {/* <!-- Recipient Information --> */}
          <section className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Recipient Information</h3>
            <div className="text-sm space-y-3">
            <p>Delivery: Standard</p>
            <p>Phone: {Useraccount.phone}</p>
            <p>Address: {Data.shippingAddress}</p>
            </div>
          </section>

          {/* <!-- Product Item --> */}
          {Data?.items?.length > 0  &&  (
           <div className="my-16 px-10 py-6 flex justify-between items-start shadow-normal-full rounded-xl ">
            <div className="flex space-x-4">
              <div className="px-7 py-1 border rounded-xl">
                <img
                  src={produk}
                  alt="product"
                  className="w-9 object-cover  "
                ></img>
              </div>
              <div className="w-96 py-1 h-24 flex flex-col justify-between">
                <p className="text-sm font-medium">
                  {Data.items[0]?.title}
                </p>
                <p className="text-xs text-gray-text">{Data.items[0]?.size }</p>
              </div>
            </div>
            <p className="text-sm">Quantity: {Data.items[0]?.qty }</p>
            <p className="text-sm">Status: {Data.status}</p>
            <p className="text-sm">Estimasi: 24-28 April </p>
          </div>
          )}


          {/* <!-- Order Summary --> */}
          <section className="">
            <h3 className="text-lg font-semibold mb-4">Summary</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rp {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>Rp 4.000</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>Rp 7.500</span>
              </div>
              <div className="flex justify-between font-semibold text-base ">
                <span>Total</span>
                <span>Rp {total.toLocaleString()}</span>
              </div>
            </div>
          </section>
      </div>
    </Layouts>
  );
};
