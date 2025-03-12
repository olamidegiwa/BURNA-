import React from "react";
import { Gallery } from "../utils/Burna";

const PhotoGallery = () => {
  return (
    <div className="py-5">
      <div className="overflow-hidden whitespace-nowrap flex gap-2 items-center border-b-2 mb-3 ">
        {[...Array(20)].map((_, i) => (
          <p
            key={i}
            className="animate-marquee flex text-2xl font-bold text-white"
          >
            PHOTO GALERY
          </p>
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2  xl:gap-3 overflow-hidden ">
        {Gallery.map((data) => {
          return (
            <img
              key={data.id}
              src={data.image}
              alt=""
              className="w-100  xl:max-w-[245px] xl:max-h-[250px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
