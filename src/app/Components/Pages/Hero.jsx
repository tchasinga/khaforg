"use client";
import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import imageUrls from "@/app/Data/imageUrls.js";

export default function Hero() {
 

  return (
    <div className="pt-[4%]">
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
              className="h-[650px] relative object-cover"
              style={{
                background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${imagurl.url}) center no-repeat`,
                backgroundSize: "cover",
              }}
            >
              {/* Optional text content for each slide */}
              <div className="text-white text-4xl absolute bottom-10 right-0 left-0 px-5 font-bold">
                <h1>{imagurl.title}</h1>
                <h3 className="text-xs text-slate-100">{imagurl.description}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
