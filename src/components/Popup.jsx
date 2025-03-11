import React, { useState } from "react";
import StarOutline from "../assets/images/spiky-circle-desktop1.png";
import {
  RiTwitterXFill,
  RiYoutubeLine,
  RiFacebookCircleFill,
  RiSpotifyFill,
  RiAppleFill,
} from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FaSoundcloud, FaArrowRightLong } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer  ">
        <GoMail className="text-white md:text-5xl text-3xl" />
      </div>
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="place-items-end">
            <IoCloseOutline
              onClick={() => setIsOpen(false)}
              className="text-white cursor-pointer text-6xl"
            />
          </div>
          <img
            src={StarOutline}
            alt="staroutline"
            className="w-100 min-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] max-h-[100vh] relative "
          />
          <div className=" absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-10 ">
            <div className="place-items-center text-center text-white ">
              <h3 className="font-bold md:text-4xl text-base w-100 ">
                Subscribe <br /> For Burna Boy <br />
                Updates
              </h3>
            </div>
            <div className="flex flex-col gap-1 items-center py-3 xl:py-10">
              <div className="flex place-content-center w-full ">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="border-2  px-2 text-white bg-inherit border-white focus:outline-none w-3/4  rounded-l-lg"
                />
                <FaArrowRightLong className="bg-white custom-text-gold  text-4xl rounded-r-lg" />
              </div>
              <p className="text-white">Terms</p>
            </div>
            <div className=" text-white flex flex-col gap-3 pt-3 items-center  text-xl ">
              <div className="flex gap-2  xl:gap-4">
                <a
                  target="_blank"
                  href="https://web.facebook.com/Officialburnaboy/?_rdc=1&_rdr#"
                >
                  <RiFacebookCircleFill className="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/burnaboygram/"
                >
                  <FiInstagram className="" />
                </a>
                <a target="_blank" href="https://x.com/burnaboyo">
                  <RiTwitterXFill className="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCEzDdNqNkT-7rSfSGSr1hWg"
                >
                  <RiYoutubeLine className="" />
                </a>
              </div>
              <div className="flex gap-2  xl:gap-4">
                <a
                  target="_blank"
                  href="https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa"
                >
                  <RiSpotifyFill className="" />
                </a>
                <a
                  target="_blank"
                  href="https://music.apple.com/us/artist/burna-boy/591899010"
                >
                  <RiAppleFill className="" />
                </a>
                <a target="_blank" href="https://soundcloud.com/burnaboyc">
                  {" "}
                  <FaSoundcloud className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
