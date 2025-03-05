import React from "react";
import { MerchShop } from "../../utils/Burna";
import { ItoldThem } from "../../utils/Burna";
const Merch = () => {
  return (
    <div className="flex flex-col xl:flex-row place-content-between py-3 mb-10">
      <div className="xl:max-w-[550px] md:w-100">
        <div className="overflow-hidden whitespace-nowrap flex gap-2 items-center mb-2">
          {[...Array(20)].map((_, i) => (
            <p
              key={i}
              className="animate-marquee text-2xl font-bold text-white inline-block "
            >
              MERCH SHOP
            </p>
          ))}
        </div>
        <div className="flex   gap-3">
          {MerchShop.map((data) => {
            return (
              <div key={data.id}>
                <img
                  src={data.image}
                  alt="image"
                  className="w-full lg:max-w-[230px] lg:max-h-[230px]  sm:max-w-1/2"
                />
                <h3 className="custom-text-gold">{data.description}</h3>
                <a href={data.url} className="text-white link underline">
                  BUY NOW
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="xl:max-w-[550px] md:w-100 ">
        <div className="overflow-hidden whitespace-nowrap flex gap-2 items-center border-b-2 ">
          {[...Array(20)].map((_, i) => (
            <p
              key={i}
              className="animate-marquee text-2xl font-bold text-white inline-block"
            >
              I TOLD THEM POP UP
            </p>
          ))}
        </div>
        <div className="pt-2">
          {ItoldThem.map((data) => {
            return (
              <div key={data.id} className="flex gap-3">
                <img
                  src={data.image}
                  alt="image"
                  className="w-full md:max-w-[400px] md:max-h-[250px] Itoldthem-image "
                />
                <div>
                  <h3 className="custom-text-gold">{data.description}</h3>
                  <p className="text-white text-sm">{data.details}</p>
                  <a href={data.url} className="text-white link underline">
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

export default Merch;
