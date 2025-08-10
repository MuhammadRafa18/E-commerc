import React from "react";
import { Layouts } from "../Pages/Layouts";

export const DetailOrder = () => {
  return (
    <Layouts>
      <div class="bg-white text-black font-sans p-8 flex justify-center">
        <main class="w-full max-w-4xl space-y-8">
          {/* <!-- Order Information --> */}
          <section>
            <h2 class="text-xl font-semibold">Order Confirmation:</h2>
            <p class="mt-1">
              Your order: <span class="font-medium">#12883HGYRJRK</span>
            </p>
            <p class="text-sm text-gray-600">Order date: 01/02/2025</p>
          </section>

          {/* <!-- Recipient Information --> */}
          <section>
            <h3 class="font-semibold mb-2">Recipient Information</h3>
            <p>Delivery: Standard</p>
            <p>Phone: 085724267887</p>
            <p>Address: Jl Naman Iskandar Limo Depok, Jawa Barat</p>
          </section>

          {/* <!-- Product Item --> */}
          <section class="border rounded-xl p-4 flex gap-4 items-start">
            <img
              src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f9fc.svg"
              alt="Product"
              class="w-24 h-auto object-contain"
            />
            <div class="flex-1 space-y-1">
              <h4 class="font-semibold">
                Facewash Men Oil Control Anti Shine Brightening Cooling Foam
              </h4>
              <p class="text-sm text-gray-600">150 ml</p>
            </div>
            <div class="text-sm text-right space-y-1">
              <p>
                <strong>Quantity:</strong> 1
              </p>
              <p>
                <strong>Status:</strong> being delivered
              </p>
              <p>
                <strong>Estimate:</strong> 24–28 April 2025
              </p>
            </div>
          </section>

          {/* <!-- Order Summary --> */}
          <section>
            <h3 class="font-semibold mb-2">Summary</h3>
            <div class="space-y-1 text-sm">
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
              <div class="flex justify-between font-semibold text-base mt-2 border-t pt-2">
                <span>Total</span>
                <span>Rp 103.500</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layouts>
  );
};
