import React from "react";
import WordRotate from "../../animation/wordrotate.tsx";
import OurServi from "@/app/Data/OurServi.js";
import { GrValidate } from "react-icons/gr";

const words = [
  "our services",
  "we provide services",
  "in PATIENT SERVICES",
  "OUT PATIENT SERVICES",
  "TRAINING SERVICES",
];

export default function OurServices() {
  return (
    <div className="py-[3%] max-w-screen-xl mx-auto">
      <div className="">
        <h1 className="text-slate-800 text-2xl font-bold flex justify-center uppercase pb-[4%]">
          <WordRotate words={words} />
        </h1>
      </div>

      <div className="mygridtemplateTwo">
        {OurServi.map((items, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border-2 p-20 rounded-xl relative"
          >
            <div className="text-6xl py-3 text-blue-600 font-bold">
              {items.icon}
            </div>
            <div>
              <h1 className="uppercase text-xl font-bold text-blue-700">{items.name}</h1>
            </div>
            <div className="bg-blue-600 hover:bg-green-700 p-3 w-[150px] flex justify-center items-center rounded-2xl duration-500 cursor-pointer text-white ">
              <p>{items.moreLears}</p>
            </div>
            <div className="absolute top-[-10%] right-[-4%] spining cursor-pointer text-white text-2xl bg-blue-600 hover:bg-green-700 p-10 rounded-full">
              <GrValidate />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
