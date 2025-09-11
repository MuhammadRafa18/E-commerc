import React from "react";
import { Layouts } from "../Pages/Layouts";
import produk from "../assets/produk card.png";


export const DetailOrder = () => {
  return (
    <Layouts>
      <div class="flex flex-col lg:px-16 lg:py-24">
          {/* <!-- Order Information --> */}
          <section className="text-lg">
            <h2 class="font-semibold">Order Confirmation:</h2>
            <p class="mt-3 font-semibold ">
              Your order: <span>#12883HGYRJRK</span>
            </p>
            <p class="mt-1 text-sm ">Order date: 01/02/2025</p>
          </section>
          {/* <!-- Recipient Information --> */}
          <section className="mt-6">
            <h3 class="text-lg font-semibold mb-4">Recipient Information</h3>
            <div className="text-sm space-y-3">
            <p>Delivery: Standard</p>
            <p>Phone: 085724267887</p>
            <p>Address: Jl Naman Iskandar Limo Depok, Jawa Barat</p>
            </div>
          </section>

          {/* <!-- Product Item --> */}
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
                  Facewash Men Oil Control Anti Shine Brightening Cooling Foam
                </p>
                <p className="text-xs text-gray-text">150 ml</p>
              </div>
            </div>
            <p className="text-sm">Quantity: 1</p>
            <p className="text-sm">Status: being delivered</p>
            <p className="text-sm">Estimasi: 24-28 April </p>
          </div>

          {/* <!-- Order Summary --> */}
          <section className="">
            <h3 class="text-lg font-semibold mb-4">Summary</h3>
            <div class="space-y-4 text-sm">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span>Rp 100.000</span>
              </div>
              <div class="flex justify-between">
                <span>Discount</span>
                <span>Rp 4.000</span>
              </div>
              <div class="flex justify-between">
                <span>Delivery</span>
                <span>Rp 7.500</span>
              </div>
              <div class="flex justify-between font-semibold text-base ">
                <span>Total</span>
                <span>Rp 103.500</span>
              </div>
            </div>
          </section>
      </div>
    </Layouts>
  );
};
