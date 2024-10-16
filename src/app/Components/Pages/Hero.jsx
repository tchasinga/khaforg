"use client";
import React, { useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import imageUrls from "@/app/Data/imageUrls.js";
import { RiContactsLine } from "react-icons/ri";
import Seecontact from "./Seecontact";

export default function Hero() {
  const [OpenSetSeeContact, setOpenSeeContact] = useState(false);
 
  const handlerClicksViews = () => {
    setOpenSeeContact(true)
  }

  return (
    <div className="pt-[4%]">
      <Swiper
        modules={[Navigation, Autoplay]} 
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
              <div className="text-white text-4xl absolute bottom-10 right-0 left-0 px-5 ">
                <h1>{imagurl.title}</h1>
                <h3 className=" text-slate-100 text-lg font-thin">{imagurl.description}</h3>
              </div>
              <div className="absolute top-[10%] right-[6%] cursor-pointer bg-blue-600 hover:bg-green-700 p-4 rounded-full" onClick={handlerClicksViews}>
              <RiContactsLine className="text-white text-2xl hover:font-bold duration-500" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {OpenSetSeeContact && <Seecontact handleClose={() => setOpenSeeContact(false)} />}
    </div>
  );
}
