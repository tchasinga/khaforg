"use client"
import React from "react";
import TypingAnimation from "../../animation/typinganimation";

export default function Aboutus() {

  return (
    <div className="py-[3%] max-w-screen-xl mx-auto">
      <div className="text-3xl text-blue-600 font-bold">
        <h1 className="font-bold">
          <TypingAnimation text="Typing Animation" />
        </h1>
      </div>
    </div>
  );
}
