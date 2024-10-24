import React from "react";
import MarqueeDemo from '../Pages/MarqueeDemo'

export default function Awardservices() {
  return (
    <div className="py-[3%] max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-end items-end text-start py-[2%]">
        <h1 className="text-blue-600 text-2xl font-bold flex uppercase">
          Testimonials from Our Clients
        </h1>
        <div className="bg-blue-600 w-2/12 h-1 text-start"></div>
      </div>
      <div className="mb-[5%] p-3 bg-blue-600 rounded-md text-lg text-white">
          <p>Our services extend beyond healthcare, reaching into community development, public health, and family support.</p>
          <p>We believe that a healthy community is key to the overall development of a nation.</p>
        </div>
      <MarqueeDemo />
    </div>
  );
}
