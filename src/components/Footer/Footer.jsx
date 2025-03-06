import React from "react";
import "./Footer.css";
import {
  RiTwitterXFill,
  RiYoutubeLine,
  RiFacebookCircleFill,
  RiSpotifyFill,
  RiAppleFill,
} from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FaSoundcloud } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="py-5 container mx-auto  overflow-hidden px-3">
      <div className="flex flex-col md:flex-row gap-x-32 gap-y-10  justify-center items-center lg:py-20 py-10">
        <div className="flex flex-col gap-4 ">
          <h3 className="text-3xl text-white ">
            Subscribe For Burna <br /> Boy Updates
          </h3>
          <div className="flex  custom-text-gold gap-4 text-xl  ">
            <a
              target="_blank"
              href="https://web.facebook.com/Officialburnaboy/?_rdc=1&_rdr#"
            >
              <RiFacebookCircleFill className="" />
            </a>
            <a target="_blank" href="https://www.instagram.com/burnaboygram/">
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
        <div className="flex flex-col gap-3 justify-center items-center ">
          <div className="flex justify-between items-center divide-x  border rounded w-screen max-w-[400px]  mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="bg-inherit text-white px-2   focus:outline-none"
            />
            <div>
              <FaArrowRightLong className="custom-text-gold  py-2 text-5xl" />
            </div>
          </div>
          <div className="text-white footer underline ">TERMS</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-center md:justify-between pt-5 footer">
        <p className="text-white  cursor-pointer">
          &copy; 2025 Atlantic Records{" "}
        </p>
        <p className="text-white text-sm cursor-pointer">
          <a href="https://privacy.wmg.com/atlantic/privacy-policy"></a>Privacy
          Policy
        </p>
        <p className="text-white  cursor-pointer">
          <a href="https://www.atlanticrecords.com/terms-of-use">
            Terms of use
          </a>
        </p>
        <p className="text-white  cursor-pointer">
          <a href="https://www.wminewmedia.com/cookies-policy/?ot=7f920412-fbb4-4cfb-8787-415e89eeec47&url=www.onaspaceship.com">
            Cookies Policy
          </a>
        </p>
        <p className="text-white  cursor-pointer">Cookies Settings</p>
      </div>
    </div>
  );
};

export default Footer;

