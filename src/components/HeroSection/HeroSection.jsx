import React, { useState } from "react";
import Update from "../HeroSection/Update";
import Merch from "../HeroSection/Merch";
import Features from "../HeroSection/Features";
import BeautyFashion from "../HeroSection/BeautyFashion";
import Features1 from "../HeroSection/Features1";
import Tech from "../HeroSection/Tech";
import "../HeroSection/HeroSection.css";

const Video = () => {
  return (
    <div className=" lg:container mx-auto py-5 md:pb-6 overflow-hidden justify-center items-center px-2 ">
      <Update />
      <Merch />
      <Features />
      <BeautyFashion />
      <Features1 />
      <Tech />
    </div>
  );
};

export default Video;
