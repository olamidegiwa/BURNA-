import React, { useState } from "react";
import { Videos } from "../../utils/Burna";
import burnaupdate from "../../assets/images/BURNA BOY - UPDATE (SINGLE COVER)_0.jpg";
import { IoMdPlay } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import ReactPlayer from "react-player";
const Update = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <div className="py-3 video-container ">
      <div className="flex flex-col gap-3 mb-10">
        <div className="w-full xl:w-[600px]">
          <img src={burnaupdate} alt="image" className="burnaupdate-image" />
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <h1 className="custom-text-gold text-3xl font-bold">Update</h1>
            <p className="text-white text-base ">
              Burna Boy releases ‘Update’ out now on all major music platforms.
            </p>
            <a
              target="_blank"
              href="https://burna.lnk.to/Update"
              className="text-white text-base font-bold underline link"
            >
              LISTEN NOW
            </a>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-[650px]">
        {Videos.map((video) => {
          return (
            <div key={video.id} className="mb-10">
              <div className="overflow-hidden whitespace-nowrap flex gap-2 items-center mb-2">
                {[...Array(20)].map((_, i) => (
                  <p
                    key={i}
                    className="animate-marquee text-2xl font-bold text-white inline-block "
                  >
                    {video.description}
                  </p>
                ))}
              </div>
              <div className="video-image  flex gap-4 px-0 m-0">
                <div
                  onClick={() => setSelectedVideo(video.url)}
                  className="relative"
                >
                  <img
                    src={video.image}
                    // alt={video.title}
                    alt="image"
                    className="image-title "
                  />
                  <IoMdPlay className="absolute IoMdPlay top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white p-1 cursor-pointer" />
                </div>
                <div className="">
                  <h2 className="custom-text-gold lg:text-xl md:text-base font-bold">
                    {video.title}
                  </h2>
                  <a
                    target="_blank"
                    href={video.url}
                    className="text-white underline  lg:text-base md:text-xs font-bold link"
                  >
                    WATCH NOW
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-70 overflow-hidden">
          <div className=" relative w-full max-w-[350px] md:max-w-[550px] lg:max-w-[700px] contents object-cover">
            <div className=" absolute IoCloseOutline ">
              <IoCloseOutline
                onClick={() => setSelectedVideo(null)}
                className="custom-text-gold cursor-pointer text-4xl lg:text-5xl "
              />
            </div>
            <ReactPlayer
              controls={true}
              config={{ file: { attributes: { preload: "metadata" } } }}
              url={selectedVideo}
              className="w-full min-w-[300px] min-h-[250px]  md:max-w-[500px] md:max-h-[350px] xl:max-w-[700px] xl:max-h-[400px] mx-2 border-2 border-amber-700"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Update;
