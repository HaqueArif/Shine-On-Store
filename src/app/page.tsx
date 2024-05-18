import Image from "next/image";
import HomePage from "./home/page";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import HomepageLayout from "@/layout/HomepageLayout";

export default function Home() {
  return (
    <>
      <HomepageLayout />
    </>
  );
}
