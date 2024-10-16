"use client"
import React from "react";
import { TypingAnimation } from "../../animation/typinganimation";

export default function Aboutus() {

  return (
    <div className="py-[3%] max-w-screen-xl mx-auto">
      <div className="text-3xl text-blue-600 font-bold">
          <TypingAnimation text="learn more about us" />
          <hr className="w-20"/>
      </div>

      {/* my flex function is addded now is the containant */}
      <div className="">
         
      </div>
    </div>
  );
}
