"use client"
import React, { useState, useEffect } from "react";
import { TypingAnimation } from "../../animation/typinganimation";
import { motion, AnimatePresence } from "framer-motion";

export default function Aboutus() {
  const textChanger = [
    "Established under section 10 of the Societies Act, CHANF Community Health Services (CHANF-CNS) is based in Kitengela, Kajiado County, Kenya.",
    "We foster a comprehensive approach to well-being in the community, family, workplace, and schools, with a focus on health, nutrition, and industrial relationships.",
    "Our services extend beyond healthcare, reaching into community development, public health, and family support.",
    "We believe that a healthy community is key to the overall development of a nation."
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === textChanger.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [textChanger.length]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  return (
    <div className="py-[3%] max-w-screen-xl mx-auto">
      <div className="text-3xl text-blue-600 font-bold">
        <TypingAnimation text="learn more about us" />
        <hr className="w-20" />
      </div>

      {/* Text content with smooth transition */}
      <div className="mt-8 bg-blue-600 p-6 rounded-md text-white w-full">

        {/* First flex is added now...*/}
        <div className="flex flex-col justify-center items-start">
          <div className="py-3">
            <h1 className="text-2xl font-bold">ABOUT US</h1>
            <h1 className="text-xl">CHANF Community Health Services</h1>
          </div>

          {/* Auto text transition */}
          <div className="mt-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTextIndex} // Change text by index
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
                className="text-lg"
              >
                {textChanger[currentTextIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* My second flex is added now */}
        
      </div>
    </div>
  );
}
