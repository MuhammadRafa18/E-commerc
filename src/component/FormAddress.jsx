import React from "react";
import { Layouts } from "../Pages/Layouts";

export const FormAddress = () => {
  return (
    <Layouts>
      <div class="bg-white text-black font-sans flex justify-center p-10">
        <main class="w-full max-w-xl border rounded-xl p-6 shadow space-y-6">
          {/* <!-- Header --> */}
          <header class="flex items-center gap-2 text-lg font-medium">
            <span class="text-2xl">&larr;</span>
            <h1>Address</h1>
          </header>

          {/* <!-- Address Form --> */}
          <form class="space-y-4">
            {/* <!-- Fullname --> */}
            <div>
              <label class="block font-medium mb-1">Fullname</label>
              <input
                type="text"
                class="w-full border rounded px-3 py-2"
                value="Muhammd Rafa"
              />
            </div>

            {/* <!-- Street Name --> */}
            <div>
              <label class="block font-medium mb-1">Street Name</label>
              <input
                type="text"
                class="w-full border rounded px-3 py-2"
                value="Jl Naman Iskandar"
              />
            </div>

            {/* <!-- Place --> */}
            <div>
              <label class="block font-medium mb-1">Place</label>
              <select class="w-full border rounded px-3 py-2">
                <option>Home</option>
                <option>Office</option>
                <option>Other</option>
              </select>
            </div>

            {/* <!-- Province --> */}
            <div>
              <label class="block font-medium mb-1">Province</label>
              <select class="w-full border rounded px-3 py-2">
                <option>Jawa Barat</option>
                <option>DKI Jakarta</option>
                <option>Jawa Tengah</option>
                <option>Jawa Timur</option>
              </select>
            </div>

            {/* <!-- City --> */}
            <div>
              <label class="block font-medium mb-1">City</label>
              <select class="w-full border rounded px-3 py-2">
                <option>Depok</option>
                <option>Bekasi</option>
                <option>Bandung</option>
                <option>Bogor</option>
              </select>
            </div>

            {/* <!-- Buttons --> */}
            <div class="flex gap-4 mt-6">
              <button
                type="submit"
                class="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                Save
              </button>
              <button
                type="reset"
                class="border border-black px-6 py-2 rounded hover:bg-gray-100"
              >
                Reset
              </button>
            </div>
          </form>
        </main>
      </div>
    </Layouts>
  );
};
