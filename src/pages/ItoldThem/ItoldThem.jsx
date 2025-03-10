import React, { useState } from "react";
import "./ItoldThem.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ReactPlayer from "react-player";
import { IoMdPlay } from "react-icons/io";
import { Gallery } from "../../utils/Burna";
const ItoldThem = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="py-5">
      <Navbar />
      <div className="lg:container mx-auto px-3 py-10">
        <div className="flex flex-col gap-y- xl:flex-row justify-between ">
          <div className="flex flex-col gap-3 w-full xl:max-w-[450px]">
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
          <div className="w-100 xl:w-[700px] h-full">
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
            <div className="relative">
              {playing ? (
                <ReactPlayer
                  controls
                  autoplay
                  playing={true}
                  url={"https://youtu.be/BlnzhvAmZ38/video.mp4"}
                  className="w-100 xl:max-w-[700px] h-full"
                />
              ) : (
                <di>
                  <img
                    className="w-100 xl:max-w-[700px]  h-full cursor-pointer "
                    onClick={() => setPlaying(true)}
                    src="https://www.onaspaceship.com/sites/g/files/g2000019656/files/artcleimage_1_0.jpg"
                    alt=""
                  />
                  <div
                    onClick={() => setPlaying(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer  border-2 rounded-full w-[40px]  h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]"
                  >
                    <IoMdPlay className=" text-white p-1  text-2xl  xl:text-6xl font-bold  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </di>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container mx-auto">
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
      <Footer />
    </div>
  );
};

export default ItoldThem;
