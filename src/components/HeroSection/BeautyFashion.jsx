import React from "react";
import { Beauty } from "../../utils/Burna";
import { Fashion } from "../../utils/Burna";
const BeautyFashion = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between py-20">
      <div className="xl:max-w-[600px] md:w-100">
        <div className="overflow-hidden whitespace-nowrap flex gap-2 items-center mb-2">
          {[...Array(20)].map((_, i) => (
            <p
              key={i}
              className="animate-marquee text-2xl font-bold text-white inline-block "
            >
              BEAUTY & FASHION
            </p>
          ))}
        </div>
        <div className="flex flex-col  gap-3">
          {Beauty.map((data) => {
            return (
              <div key={data.id} className="flex gap-3">
                <img
                  src={data.image}
                  alt="image"
                  className="w-full lg:max-w-[400px] lg:max-h-[250px]  sm:max-w-1/2"
                />
                <div>
                  <h3 className="custom-text-gold">{data.description}</h3>
                  <a href="#" className="text-white link underline">
                    READ MORE
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="xl:max-w-[600px] md:w-100">
        <div className="overflow-hidden whitespace-nowrap flex gap-2 items-center mb-2">
          {[...Array(20)].map((_, i) => (
            <p
              key={i}
              className="animate-marquee text-2xl font-bold text-white inline-block "
            >
              TRAVEL FOOD &
            </p>
          ))}
        </div>
        <div className="flex flex-col  gap-3">
          {Fashion.map((data) => {
            return (
              <div key={data.id} className="flex gap-3">
                <img
                  src={data.image}
                  alt="image"
                  className="w-full lg:max-w-[400px] lg:max-h-[250px]  sm:max-w-1/2"
                />
                <div>
                  <h3 className="custom-text-gold">{data.description}</h3>
                  <a href="#" className="text-white link underline">
                    READ MORE
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BeautyFashion;
