import React from "react";
import { Layouts } from "../Pages/Layouts";

export const Setting = () => {
  return (
    <Layouts>
      <main class="bg-white text-black font-sans flex justify-center items-start min-h-screen p-10">
        <section class="w-full max-w-xl border rounded-xl p-6 shadow-md">
          <h2 class="text-lg font-semibold mb-6 flex items-center gap-2">
            <span>&larr;</span> Settings
          </h2>

          {/* <!-- Form Account --> */}
          <form class="space-y-4">
            {/* <!-- Email --> */}
            <div>
              <label class="block mb-1 font-medium">Email</label>
              <input
                type="email"
                class="w-full border rounded px-3 py-2"
                value="rafaalmaqdis53@gmail.com"
              />
            </div>

            {/* <!-- Fullname --> */}
            <div>
              <label class="block mb-1 font-medium">Fullname</label>
              <input
                type="text"
                class="w-full border rounded px-3 py-2"
                value="Rafa almaqdis"
              />
            </div>

            {/* <!-- Phone number --> */}
            <div>
              <label class="block mb-1 font-medium">Phone number</label>
              <div class="flex">
                <span class="bg-black text-white px-3 flex items-center rounded-l">
                  +62
                </span>
                <input
                  type="text"
                  class="w-full border rounded-r px-3 py-2"
                  value="85724219589"
                />
              </div>
            </div>

            {/* <!-- Catatan --> */}
            <p class="text-sm text-red-600 mt-1">
              * Leave blank if you don't want to replace
            </p>

            {/* <!-- New Password  --> */}
            <div class="flex gap-4">
              <div class="w-1/2">
                <label class="block mb-1 font-medium">Password</label>
                <input
                  type="password"
                  class="w-full border rounded px-3 py-2"
                  placeholder="Password"
                />
              </div>
              <div class="w-1/2">
                <label class="block mb-1 font-medium">Repeat password</label>
                <input
                  type="password"
                  class="w-full border rounded px-3 py-2"
                  placeholder="Repeat password"
                />
              </div>
            </div>

            {/* <!-- Button --> */}
            <div class="flex gap-4 mt-4">
              <button
                type="submit"
                class="bg-black text-white rounded px-6 py-2 hover:bg-gray-800"
              >
                Save
              </button>
              <button
                type="button"
                class="border border-black rounded px-6 py-2 hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          </form>
        </section>
      </main>
    </Layouts>
  );
};
