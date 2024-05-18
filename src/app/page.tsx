import Image from "next/image";
import HomePage from "./home/page";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}
