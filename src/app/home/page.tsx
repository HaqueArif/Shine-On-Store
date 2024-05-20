import FlashSale from "@/components/shared/FlashSale";
import Navbar from "@/components/shared/Navbar";
import TrendingProducts from "@/components/shared/TrendingProducts";
import React from "react";

const HomePage = () => {
  return (
    <div className=" min-h-screen">
      <FlashSale />
      <TrendingProducts />
    </div>
  );
};

export default HomePage;
