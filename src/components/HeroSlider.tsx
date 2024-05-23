"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 overflow-x-hidden py-20">
      <div className="md:w-[50%] lg:w-[40%] text-center md:text-start">
        <h1 className="text-4xl font-bold">COMMERCIAL CLEANING SUPPLIES</h1>
        <h3 className="text-xl font-bold text-slate-500 mt-5 mb-2">
          Shop Bulk Cleaning Supplies and Commercial Janitorial Supplies and
          Products.
        </h3>
        <p>
          At Shine-On, you will find the best bulk cleaning products to ensure
          that your office, school, gym or facility is a welcoming, clean space.
          To provide a comfortable experience for staff and clientele, it’s
          important to use quality janitorial cleaning supplies. That’s why we
          sell premium wholesale cleaning supplies for a wide range of
          applications at prices that you can afford.
        </p>
      </div>
      <div className="md:w-[50%] lg:w-[60%]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="https://i.postimg.cc/YCLY0H4m/Great-Value-Laundry-Stain-Remover-32-Oz-c4700553-acd5-4a83-91e0-88ff18c36827-b402146a457d6734e48c742.webp"
              layout="fill"
              objectFit="cover"
              alt="Supplies-Items"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://i.postimg.cc/cHFrT9gS/Oven-Cleaner.jpg"
              layout="fill"
              objectFit="cover"
              alt="Supplies-Items"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://i.postimg.cc/gJmZgLgv/Kellys-leather-cleaner-500-ml-150-taka.jpg"
              layout="fill"
              objectFit="cover"
              alt="Supplies-Items"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://i.postimg.cc/QxHWY3Jn/Microfiber-Cloths.webp"
              layout="fill"
              objectFit="cover"
              alt="Supplies-Items"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://i.postimg.cc/gJFDm0NJ/Citrus-Scented-Floor-Cleaner.jpg"
              layout="fill"
              objectFit="cover"
              alt="Supplies-Items"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://i.postimg.cc/Pq2XkLtb/Wood_Floor_Polish.jpg"
              layout="fill"
              objectFit="cover"
              alt="Supplies-Items"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://i.postimg.cc/Cxb59LBJ/Stainless-Steel-Wipes.jpg"
              layout="fill"
              objectFit="cover"
              alt="Supplies-Items"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://i.postimg.cc/mkZ7g1Mb/Furniture-Polish.jpg"
              layout="fill"
              objectFit="cover"
              alt="Supplies-Items"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://i.postimg.cc/zXtF3704/Dusting-Spray.jpg"
              layout="fill"
              objectFit="cover"
              alt="Supplies-Items"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
