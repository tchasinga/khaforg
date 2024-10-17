"use client";
import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RiContactsLine } from "react-icons/ri";
import Seecontact from "./Seecontact";
import imageUrls from "../../Data/imageUrls";

export default function Hero() {
  const [OpenSetSeeContact, setOpenSeeContact] = useState(false);
 
  const handlerClicksViews = () => {
    setOpenSeeContact(true);
  };

  return (
    <div className="pt-[4%]">
      <Swiper
        modules={[Navigation]} 
        navigation
      >
        {imageUrls.map((imagurl) => (
          <SwiperSlide key={imagurl}>
            <div
              className="h-[650px] relative object-fill"
              style={{
                background: `linear-gradient(to right, rgba(0, 123, 255, 0.9), rgba(173, 216, 230, 0)), url(${imagurl.url}) center no-repeat`,
                backgroundSize: "cover",
                objectFit: "fill",
              }}
            >
              {/* Optional text content for each slide */}
              <div className="text-white text-4xl absolute bottom-1/4 left-[4%] px-5 ">
                <h1 className="font-bold">{imagurl.title}</h1>
               <div className="w-[50%]">
               <h3 className=" text-slate-100 text-lg font-normal">{imagurl.description}</h3>
               </div>
              </div>
              <div className="absolute top-[10%] right-[6%] cursor-pointer bg-blue-600 hover:bg-green-700 p-4 rounded-full" onClick={handlerClicksViews}>
                <RiContactsLine className="text-white text-2xl hover:font-bold duration-500" />
              </div>

              {/* my new side of design */}
              <div className="absolute flex items-center gap-5 top-[88%] left-[64%] p-4 justify-center myblicker">

                <div className="flex flex-col items-center">
                  <h1>20+</h1>
                  <p className="">Best achivement</p>
                </div>

               <div className="">
                  <h1>20+</h1>
                  <p className="">Best achivement</p>
                </div>

               <div className="">
                  <h1>20+</h1>
                  <p className="">Best achivement</p>
                </div>

               <div className="">
                  <h1>20+</h1>
                  <p className="">Best achivement</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {OpenSetSeeContact && <Seecontact handleClose={() => setOpenSeeContact(false)} />}
    </div>
  );
}
