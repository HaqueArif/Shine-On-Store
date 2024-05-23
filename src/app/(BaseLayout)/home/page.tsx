import FlashSale from "@/components/FlashSale";
import Navbar from "@/components/shared/Navbar";
import TrendingProducts from "@/components/pages/TrendingProducts";
import React from "react";
import HeroSection from "@/components/pages/HeroSection";
import Categories from "@/components/pages/Categories";

const HomePage = () => {
  return (
    <div className=" min-h-screen ">
      <HeroSection />
      <FlashSale />
      <TrendingProducts />
      <Categories />
    </div>
  );
};

export default HomePage;
