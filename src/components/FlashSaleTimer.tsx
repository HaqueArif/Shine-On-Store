"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const FlashSaleTimer: NextPage = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("6/31/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex items-center gap-5">
        <h2 className="text-xl">Ending in:</h2>
        <div className="flex justify-center gap-1 items-center">
          <div className="flex flex-col justify-center  items-center bg-orange-600  p-2 text-white rounded-md">
            <span className="">{days}</span>
            <span className="text-black font-extrabold">D</span>
          </div>
          <span className="text-black font-extrabold text-xl">:</span>
          <div className="flex flex-col justify-center items-center bg-orange-600  p-2 text-white rounded-md">
            <span className="">{hours}</span>
            <span className="text-black font-extrabold">H</span>
          </div>
          <span className="text-black font-extrabold text-xl">:</span>
          <div className="flex flex-col justify-center items-center bg-orange-600  p-2 text-white rounded-md">
            <span className="">{minutes}</span>
            <span className="text-black font-extrabold">M</span>
          </div>
          <span className="text-black font-extrabold text-xl">:</span>
          <div className="flex flex-col justify-center items-center bg-orange-600  p-2 text-white rounded-md">
            <span className="">{seconds}</span>
            <span className="text-black font-extrabold">S</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSaleTimer;
