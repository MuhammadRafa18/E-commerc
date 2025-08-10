import React from "react";
import { Layouts } from "../Pages/Layouts";

export const DetailFaq = () => {
  return (
    <Layouts>
      <main class="max-w-3xl mx-auto px-4 py-24 ">
        {/* <!-- Back to FAQ --> */}
        <a
          href="#"
          class="flex items-center text-sm font-bold text-black space-x-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span className="">Back to Faq</span>
        </a>

        {/* <!-- Title --> */}
        <h1 class="text-xl mt-16">
          Are Arliva products suitable for all skin types?
        </h1>

        {/* <!-- Answer --> */}
        <div class="text-sm mt-6  space-y-4">
          <p>
            Yes, all Arliva products are formulated to be used on all skin
            types—including dry, oily, combination, and even sensitive skin.
          </p>
          <p>
            We understand that everyone has unique skin needs. That’s why we use
            gentle yet effective ingredients, such as hyaluronic acid,
            niacinamide, and clinically proven botanical extracts.
          </p>
          <p>
            In addition, all of our products are free from parabens, excess
            alcohol, and harsh synthetic fragrances. Arliva products have also
            gone through a dermatological testing process, so they are safe for
            long-term use without disrupting the skin barrier.
          </p>
          <p>
            For optimal results, you can use the “Skincare by Skin Type” feature
            on our website to find the product that best suits your skin
            condition and needs.
          </p>
        </div>
      </main>
    </Layouts>
  );
};
