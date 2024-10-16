"use client";
import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

export default function Hero() {
  const imageUrls = [
    "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6516209/pexels-photo-6516209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/25599838/pexels-photo-25599838/free-photo-of-woman-sitting-and-exercising.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8769168/pexels-photo-8769168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3931116/pexels-photo-3931116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3758124/pexels-photo-3758124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14921377/pexels-photo-14921377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9376270/pexels-photo-9376270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11869770/pexels-photo-11869770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Autoplay]} // Use modules here
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {imageUrls.map((imagurl) => (
          <SwiperSlide key={imagurl}>
            <div
              className="h-[550px] relative object-cover"
              style={{
                background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${imagurl}) center no-repeat`,
                backgroundSize: "cover",
              }}
            >
              {/* Optional text content for each slide */}
              {/* <div className="text-white text-4xl absolute bottom-10 right-0 left-0 px-5 font-bold">
                <h1>Slide Title</h1>
                <h3 className="text-xs text-gray-500">Additional Information</h3>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
