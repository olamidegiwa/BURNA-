import React from "react";
import "./Tour.css";
import DaminiTour from "../../assets/images/ITT Tour - no dates_0.jpg";
import {
  RiTwitterXFill,
  RiYoutubeLine,
  RiFacebookCircleFill,
  RiSpotifyFill,
  RiAppleFill,
} from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FaSoundcloud } from "react-icons/fa6";
import { Tours } from "../../utils/Burna";
const Tour = () => {
  return (
    <div className=" pb-4">
      <img src={DaminiTour} alt="Tour-image" className="w-[100vw] " />
      <div className="flex flex-col gap-8 justify-center items-center  py-8 px-3">
        <div className="flex  text-white gap-4 text-2xl  ">
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

        <div>
          <p className="text-white text-base">
            SIGN UP TO BE FIRST TO HEAR ABOUT NEW LIVE SHOWS
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center w-full max-w-[450px]">
          <div className="flex justify-between items-center divide-x  border w-full max-w-[400px]">
            <input
              type="email"
              placeholder="Email"
              className="bg-inherit text-white px-2   focus:outline-none"
            />
            <div>
              <p className="text-black bg-white px-4 py-2 text-base">JOIN</p>
            </div>
          </div>
          <div>
            <p className="text-white text-xs ">TERMS</p>
          </div>
        </div>
      </div>
      <div className="py-10 text-center justify-center md:hidden text-base">
        {Tours.map((data) => {
          return (
            <div key={data.id} class="text-white  py-4">
              <table className="w-1/2 mx-auto place-content-center items-center  ">
                <tbody className="flex flex-col ">
                  <td>{data.date}</td>
                  <td>{data.arena}</td>
                  <td>{data.country}</td>
                  <td>
                    {" "}
                    <a href={data.url} className="underline">
                      TICKETS
                    </a>
                  </td>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
      <table className="w-full md:flex hidden text-white text-base place-content-center items-center  py-10">
        <tbody>
          {Tours.map((data) => {
            return (
              <tr key={data.id}>
                <td className="py-5 pe-10">{data.date}</td>
                <td className="py-5 px-10">{data.arena}</td>
                <td className="py-5 px-10">{data.country}</td>
                <td className="py-5 underline  ps-10">
                  <a href={data.url}></a>TICKETS
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex xl:hidden   flex-col gap-3  w-full  justify-center items-center px-3">
        <div className="flex justify-between border w-full max-w-[450px] place-items-center p-3 ">
          <p className="text-white text-base text-bold leading-4 ">
            {" "}
            NEW ALBUM <br /> OUT NOW
          </p>
          <a
            target="_blank"
            href="https://burna.lnk.to/LoveDamini"
            className="bg-white text-black text-base  p-1  hover:bg-gray-600"
          >
            GET IT NOW
          </a>
        </div>
        <div className="flex justify-between border w-full max-w-[450px] place-items-center p-3 ">
          <p className="text-white text-base text-bold leading-4 ">
            {" "}
            BURNA BOY <br /> STORE
          </p>
          <a
            target="_blank"
            href="https://burna.lnk.to/BurnaBoyStore"
            className="bg-white text-black text-base  p-1 hover:bg-gray-600"
          >
            SHOP HERE
          </a>
        </div>
      </div>
      <div className="flex-col gap-3 xl:flex hidden w-full xl:fixed xl:bottom-2 xl:left-2 ">
        <div className="flex justify-between border  md:max-w-[300px]  xl:max-w-[230px] place-items-center p-2 ">
          <p className="text-white text-sm text-bold leading-4 ">
            {" "}
            NEW ALBUM <br /> OUT NOW
          </p>
          <a
            target="_blank"
            href="https://burna.lnk.to/LoveDamini"
            className="bg-white text-black text-sm  p-1 hover:bg-gray-600"
          >
            GET IT NOW
          </a>
        </div>
        <div className="flex justify-between border md:max-w-[300px] xl:max-w-[230px] place-items-center p-2 ">
          <p className="text-white text-sm text-bold leading-4 ">
            {" "}
            BURNA BOY <br /> STORE
          </p>
          <a
            target="_blank"
            href="https://burna.lnk.to/BurnaBoyStore"
            className="bg-white text-black text-sm  p-1 hover:bg-gray-600"
          >
            SHOP HERE
          </a>
        </div>
      </div>

      <div className="w-100 flex flex-col xl:flex-row gap-x-2 gap text-white place-content-center  items-center privacy-policy pt-20 py-2 ">
        <p className="">&copy; 2025 ATLANTIC RECORDS</p>
        <div className="flex gap-2 ">
          <a
            target="_blank"
            href="https://www.atlanticrecords.com/privacy-policy"
            className="hover:text-gray-300"
          >
            PRIVACY POLICY
          </a>
          <a
            target="_blank"
            href="https://www.atlanticrecords.com/terms-of-use"
            className="hover:text-gray-300"
          >
            TERMS OF USE
          </a>
          <a
            target="_blank"
            href="https://www.wminewmedia.com/cookies-policy/?ot=7f920412-fbb4-4cfb-8787-415e89eeec47&url=www.onaspaceship.com"
            className="hover:text-gray-300"
          >
            COOKIES POLICY
          </a>
          <a
            target="_blank"
            href=""
            className="hover:text-gray-300 cursor-pointer"
          >
            COOKIES SETTINGS
          </a>
        </div>
      </div>
    </div>
  );
};
export default Tour;
