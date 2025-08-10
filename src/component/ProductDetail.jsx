import React from "react";
import { Layouts } from "../Pages/Layouts";

export const ProductDetail = () => {
  return (
    <Layouts>
      <main class="max-w-6xl mx-auto px-4 py-16 space-y-12">
        {/* <!-- Product section --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* <!-- Image gallery --> */}
          <div class="flex space-x-4">
            <div class="flex flex-col space-y-3">
              <img
                src="thumb1.png"
                alt="Thumbnail 1"
                class="w-16 h-16 border rounded"
              />
              <img
                src="thumb2.png"
                alt="Thumbnail 2"
                class="w-16 h-16 border rounded"
              />
              <img
                src="thumb3.png"
                alt="Thumbnail 3"
                class="w-16 h-16 border rounded"
              />
            </div>
            <div>
              <img
                src="main-product.png"
                alt="Main Product"
                class="w-full rounded-lg"
              />
            </div>
          </div>

          {/* <!-- Product info --> */}
          <div class="space-y-4">
            <h1 class="text-base font-semibold">
              Facewash Men Oil Control Anti Shine Brightening Cooling Foam
            </h1>
            <p class="text-sm font-medium">Rp 100.000</p>

            {/* <!-- Rating --> */}
            <div class="flex items-center space-x-1 text-yellow-500 text-sm">
              <span>★★★★★</span>
            </div>

            {/* <!-- Size options --> */}
            <div class="space-x-2 text-sm">
              <span>Size</span>
              <button class="px-3 py-1 border rounded">100 ml</button>
              <button class="px-3 py-1 border rounded">150 ml</button>
              <button class="px-3 py-1 border rounded">200 ml</button>
            </div>

            {/* <!-- Quantity --> */}
            <div class="flex items-center space-x-3 text-sm">
              <span>Quantity</span>
              <div class="flex items-center border rounded px-2 py-1 space-x-2">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>

            {/* <!-- Buttons --> */}
            <div class="flex items-center space-x-4">
              <button class="px-6 py-2 border rounded-full text-sm">
                Add to cart
              </button>
              <button class="px-6 py-2 bg-black text-white rounded-full text-sm">
                Buy now
              </button>
            </div>

            {/* <!-- Payment logos --> */}
            <div class="flex space-x-4 mt-4">
              <img src="bca.svg" alt="BCA" class="h-5" />
              <img src="bri.svg" alt="BRI" class="h-5" />
              <img src="mandiri.svg" alt="Mandiri" class="h-5" />
              <img src="qris.svg" alt="QRIS" class="h-5" />
              <img src="ovo.svg" alt="OVO" class="h-5" />
              <img src="gopay.svg" alt="Gopay" class="h-5" />
            </div>
          </div>
        </div>

        {/* <!-- Tabs --> */}
        <div class="border-b border-black flex space-x-6 text-sm font-medium">
          <button class="border-b-4 border-black pb-1">DESCRIPTION</button>
          <button class="pb-1">HOW TO USE</button>
          <button class="pb-1">INGREDIENT</button>
        </div>

        {/* <!-- Description --> */}
        <div class="text-xs text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p class="mt-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </main>
    </Layouts>
  );
};
