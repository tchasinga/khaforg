"use client"
import React from 'react'
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {

    SwiperCore.use([Navigation]);
    const imageUrls = [
        "",
    ]

  return (
    <div>
       <Swiper navigation>
            {imageUrls.map((imagurl) => (
              <SwiperSlide key={imagurl}>
                <div className="h-[550px] relative object-cover" style={{background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${imagurl}) center no-repeat`, backgroundSize: "cover",}}>
                  {/* <div className="text-white text-4xl absolute bottom-10 right-0 left-0 px-5 font-bold">
                     <h1>{sharing.publicrole}</h1>
                     <h3 className="text-xs text-gray-500">{sharing.email}</h3>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
  )
}
