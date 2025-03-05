import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
      <Outlet />
    </div>
  );
};

export default RootLayout;
