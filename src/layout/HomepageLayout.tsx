import HomePage from "@/app/home/page";
import Container from "@/components/Container";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const HomepageLayout = () => {
  return (
    <div className="bg-base-200">
      <Navbar />
      <Container>
        <HomePage />
      </Container>
      <Footer />
    </div>
  );
};

export default HomepageLayout;
