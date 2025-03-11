import React, { useState } from "react";
import "./ItoldThem.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ReactPlayer from "react-player";
import { IoMdPlay } from "react-icons/io";
import PhotoGallery from "../../components/PhotoGallery";
import { ImageVideo } from "../../utils/Burna";
const ItoldThem = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      <div className=" md:container mx-auto py-5 overflow-hidden px-3">
        <Navbar />
        <div className="flex flex-col gap-y-5 xl:flex-row justify-between px-3 mb-10 ">
          <div className="flex flex-col gap-3 w-full xl:max-w-[490px]">
            <h1 className="custom-text-gold text-2xl md:text-4xl xl:text-6xl">
              I TOLD THEM POP UP
            </h1>
            <div className="flex flex-col gap-y-4 text-white text-base md:text-xl xl:text-2xl">
              <p>
                Burna Boy hosted the ‘I Told Them’ magazine merch pop-up and
                signing event in the heart of Lagos, Nigeria on January 27th,
                2024.
              </p>
              <p>
                Fans were able to participate in an interactive signing with
                Burna, experience various pop-up moments such as the Giza
                Grocery & City Boy Cuts, as well as shop around for ‘I Told
                Them’ merch. Check out the recap video and photo gallery!
              </p>
            </div>
          </div>
          <div className="w-full xl:max-w-[680px] ">
            <div className="overflow-hidden whitespace-nowrap flex gap-2 items-center border-b-2 mb-3">
              {[...Array(20)].map((_, i) => (
                <p
                  key={i}
                  className="animate-marquee flex text-2xl font-bold text-white"
                >
                  CHECK OUT THE RECAP VIDEO
                </p>
              ))}
            </div>
            {ImageVideo.map((data) => {
              return (
                <div
                  key={data.id}
                  className="relative w-full  max-w-2xl aspect-video"
                >
                  {playing ? (
                    <ReactPlayer
                      controls
                      autoplay
                      url={data.url}
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <div onClick={() => setPlaying(true)} className="w-full">
                      <img
                        src={data.image}
                        alt="image"
                        className="w-full cursor-pointer"
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  cursor-pointer  border-2 rounded-full w-[55px]  h-[55px]  xl:w-[80px] xl:h-[80px]">
                        <IoMdPlay className=" text-5xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 " />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <PhotoGallery />
      </div>
      <Footer />
    </div>
  );
};

export default ItoldThem;
