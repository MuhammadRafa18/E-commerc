import React from "react";
import { Layouts } from "../Pages/Layouts";
import modelwork from "../assets/modelwork.png";
import siteData from "../DataWeb/SideData";
import sectionAbout from "../assets/sectionAbout.png";

export const AboutCompany = () => {
  return (
    <Layouts>
      <div className="px-16">
        {/* <!-- Hero Section --> */}
        <section className="mt-12 px-6 flex flex-col items-center text-center ">
          <h2 className="text-sm">Start with Care, Shine with Confidence.</h2>
          <h1 className="text-xl font-semibold mt-3">The whole story begins with you</h1>
          <p className="text-xs  mt-3">
            Since the beginning, Arliva has believed that taking care of
            yourself is a form of love — not only for your skin, but also for
            those around you. With every product you choose, you help bring
            someone else skincare. Because with Arliva, beauty is not just about
            what you see. But it’s also what you give.
          </p>
        </section>

          {/* <!-- why arliva born --> */}
            <section className="mt-36 flex justify-center items-center space-x-28">
              <div className="w-lg space-y-6">
                <h3 className="text-xl font-semibold">Why Arliva Born</h3>
                {siteData.paragrafSection.map((item) => (
                <p className="text-sm" key={item.id}>
                  {item.text}
                </p>
                ))}
              </div>
              <img src={sectionAbout} alt="" />
            </section>

        {/* <!-- How It Works --> */}
        <section className="w-full mt-36  flex flex-col justify-center space-x-28 lg:flex-row items-center ">
          <div className="w-md">
            <h2 className="text-xl font-semibold text-center mb-6">Vision and mision</h2>
            {siteData.PargrafAbout.map((item) => (
            <p className="text-sm text-center mb-6" key={item.id}>
            {item.text}
            </p> 
            ))}
          </div>
          <img
            src={modelwork}
            alt="Why Arliva Was Born"
            className="rounded-lg"
          />
        </section>

        {/* <!-- Power of Skincare --> */}
        <section className="mt-36 mb-36 space-y-6 flex flex-col items-center text-center ">
          <h2 className="text-xl font-semibold">The power of skincare</h2>
          <div className="w-full lg:flex justify-between md:grid-cols-2  grid grid-cols-1 gap-6 md:place-items-stretch ">
            {siteData.PowerSkincare.map((item) => (
              <div className="lg:w-80 h-full py-9 space-y-7 px-8 flex flex-col items-center  rounded-xl shadow shrink-0" key={item.id}>
              <img src={item.icon} alt="" className="shrink-0" />
              <p className="text-sm text-start">
                {item.benefit}
              </p>
            </div>
            ))}
          </div>
        </section>

       

    

      
    

      </div>
    </Layouts>
  );
};
