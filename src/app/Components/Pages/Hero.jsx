"use client";
import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RiContactsLine } from "react-icons/ri";
import Seecontact from "./Seecontact";
import imageUrls from "../../Data/imageUrls";
import CountUp from 'react-countup';

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
              <div className="text-white text-5xl absolute bottom-1/4 left-[4%]  ">
                <h1 className="font-bold">{imagurl.title}</h1>
               <div className="w-[60%]">
               <h3 className=" text-slate-100 text-lg font-normal">{imagurl.description}</h3>
               </div>
              </div>
              <div className="absolute top-[10%] right-[6%] cursor-pointer bg-blue-600 hover:bg-green-700 p-4 rounded-full" onClick={handlerClicksViews}>
                <RiContactsLine className="text-white text-2xl hover:font-bold duration-500" />
              </div>

              {/* my new side of design */}
              <div className="absolute flex items-end gap-5 top-[88%] rounded-tl-3xl right-0 justify-end p-4  myblicker">

                <div className="flex flex-col text-blue-600 items-center">
                  <h1 className="text-xl font-bold">
                  <CountUp end={20} suffix="+" duration={9}/>
                  </h1>
                  <p className="font-semibold text-sm">Best achivement</p>
                </div>

                <div className="flex flex-col text-blue-600 items-center">
                  <h1 className="text-xl font-bold">
                  <CountUp end={95} suffix="+" duration={13}/>
                  </h1>
                  <p className="font-semibold text-sm">Best achivement</p>
                </div>

                <div className="flex flex-col text-blue-600 items-center">
                  <h1 className="text-xl font-bold">
                  <CountUp end={100} suffix="+" duration={12}/>
                  </h1>
                  <p className="font-semibold text-sm">Best achivement</p>
                </div>

                <div className="flex flex-col text-blue-600 items-center">
                  <h1 className="text-xl font-bold">
                  <CountUp end={150} suffix="+" duration={11}/>
                  </h1> 
                  <p className="font-semibold text-sm">Best achivement</p>
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
