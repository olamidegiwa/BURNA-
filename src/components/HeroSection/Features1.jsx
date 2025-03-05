import React from "react";
import { Feature1 } from "../../utils/Burna";
const Features1 = () => {
  return (
    <div className="flex flex-col xl:flex-row place-content-between py-3">
      <div className="w-full">
        <div className="overflow-hidden whitespace-nowrap flex gap-2 items-center mb-2">
          {[...Array(50)].map((_, i) => (
            <p
              key={i}
              className="animate-marquee text-2xl font-bold text-white inline-block "
            >
              FEATURES
            </p>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          {Feature1.map((data) => {
            return (
              <div key={data.id}>
                <img
                  src={data.image}
                  alt="image"
                  className="xl:max-w-[600px] xl:max-h-[400px] "
                />
                <div className="flex flex-col gap-2">
                <h3 className="custom-text-gold md:text-3xl sm:text-xl">
                  {data.description}
                </h3>
                <p className="text-white leading-4 text-sm font-bold">{data.details}</p>
                <a href={data.url} className="text-white text-sm link underline font-bold">
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

export default Features1;
