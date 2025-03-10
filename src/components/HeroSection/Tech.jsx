import React from "react";
import outsiderImage from "../../assets/images/feature-3.jpg";
import { Techs } from "../../utils/Burna";
const Tech = () => {
  return (
    <div className="py-5 mt-10 flex flex-col xl:flex-row gap-y-10 justify-between border-b-2">
      <div className="max-w-[600px] md:w-full mb-4">
        <img src={outsiderImage} alt="image" />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl custom-text-gold">The Outsiders</h3>
          <p className="text-white text-sm font-bold">
            At these record-breaking concerts backing Burna is THE OUTSIDERS,
            the band that has played with Burna on his way to stardom. Meet the
            crew that makes every Burna show memorable moment.
          </p>
          <a href="#" className="link  text-white underline font-bold text-sm">
            READ MORE
          </a>
        </div>
      </div>

      <div className="xl:max-w-[620px] md:w-100">
        <div className="overflow-hidden whitespace-nowrap flex gap-2 items-center mb-4">
          {[...Array(50)].map((_, i) => (
            <p
              key={i}
              className="animate-marquee text-2xl font-bold text-white inline-block "
            >
              TECH
            </p>
          ))}
        </div>
        <div className="flex flex-col  gap-10">
          {Techs.map((data) => {
            return (
              <div key={data.id} className="flex gap-4 md:gap-10">
                <img
                  src={data.image}
                  alt="image"
                  className="min-w-[150px] min-h-[120px] max-w-[450px] max-h-[250px] tech-image"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="custom-text-gold">{data.details}</h3>
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

export default Tech;
