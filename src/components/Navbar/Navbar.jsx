import React from "react";
import "./Navbar.css";
import BurnaLogo from "../../assets/images/Burnalogo.png";
import { Link } from "react-router-dom";
import Popup from "../Popup";

const Navbar = () => {
  return (
    <div className="container mx-auto py-2 md:pb-6   sticky z-10 top-0 left-0  right-0 bg-black px-3 ">
      <div className="flex place-content-between items-center ">
        <div className="flex flex-col md:gap-2 gap-1 cursor-pointer">
          <span className="sm:h-[2px] sm:w-[36px] h-[2px] w-[20px] bg-white"></span>
          <span className="sm:h-[1px] sm:w-[36px]  h-[2px] w-[20px] bg-white"></span>
          <span className="sm:h-[2px] sm:w-[36px]  h-[2px] w-[20px] bg-white"></span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img
            src={BurnaLogo}
            alt="burnaImg"
            className=" max-w-[160px] h-100 cursor-pointer"
          />
          <ul className="custom-text-white md:flex hidden md:gap-20 gap-6 md:text-xl text-base">
            <li className=" hover:text-gray-400 cursor-pointer">
              <a target="_blank" href="https://burna.lnk.to/Music">
                Music
              </a>
            </li>
            <li className=" hover:text-gray-400 cursor-pointer">
              {" "}
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCEzDdNqNkT-7rSfSGSr1hWg"
              >
                Video
              </a>
            </li>
            <Link to={"/tour"} className=" hover:text-gray-300 cursor-pointer">
              Show
            </Link>
            <li className=" hover:text-gray-400 cursor-pointer">
              {" "}
              <a target="_blank" href="https://burna.lnk.to/BurnaBoyStore">
                Store
              </a>
            </li>
          </ul>
        </div>

        <div className="cursor-pointer ">
          <Popup />
        </div>
      </div>
      <ul className="custom-text-white flex place-content-between md:hidden md:text-xl text-base ">
        <li className=" hover:text-gray-400 cursor-pointer">
          <a target="_blank" href="https://burna.lnk.to/Music">
            Music
          </a>
        </li>
        <li className=" hover:text-gray-400 cursor-pointer">
          {" "}
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCEzDdNqNkT-7rSfSGSr1hWg"
          >
            Video
          </a>
        </li>
        <Link to={"/tour"} className=" hover:text-gray-300 cursor-pointer">
          Show
        </Link>
        <li className=" hover:text-gray-400 cursor-pointer">
          {" "}
          <a target="_blank" href="https://burna.lnk.to/BurnaBoyStore">
            Store
          </a>
        </li>
      </ul>
      <hr className="bg-white h-[2px] lg:mt-6 mt-1" />
    </div>
  );
};

export default Navbar;
