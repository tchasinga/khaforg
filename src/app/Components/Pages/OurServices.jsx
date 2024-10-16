
"use client"
import React from "react";
import WordRotate from "../../animation/wordrotate.tsx";
import OurServi from "@/app/Data/OurServi.js";
import { GrValidate } from "react-icons/gr";
import { motion } from "framer-motion";

// Words for rotating animation
const words = [
  "our services",
  "we provide services",
  "in PATIENT SERVICES",
  "OUT PATIENT SERVICES",
  "TRAINING SERVICES",
];

// Animation variants for individual service items
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.8 } }
};

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.8,
      staggerChildren: 0.3, // Stagger animation between children
    },
  },
};

export default function OurServices() {
  return (
    <div className="py-[3%] max-w-screen-xl mx-auto">
      <div className="">
        <h1 className="text-slate-800 text-2xl font-bold flex justify-center uppercase pb-[4%]">
          <WordRotate words={words} />
        </h1>
      </div>

      {/* Motion div for the container */}
      <motion.div
        className="mygridtemplateTwo"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }} // Ensure animation runs once when in view
      >
        {OurServi.map((items, index) => (
          // Motion div for each item
          <motion.div
            key={index} // Ensure to use 'index' if there is no unique ID
            variants={itemVariants}
            className="flex flex-col justify-center items-center border-2 p-20 rounded-xl relative"
          >
            <div className="text-6xl py-3 text-blue-600 font-bold">
              {items.icon}
            </div>
            <div className="pb-3">
              <h1 className="uppercase text-xl font-bold text-blue-700">
                {items.name}
              </h1>
            </div>
            <div className="bg-blue-600 hover:bg-green-700 p-3 w-[150px] flex justify-center items-center rounded-2xl duration-500 cursor-pointer text-white pt-3">
              <p>{items.moreLears}</p>
            </div>
            <div className="absolute top-[-10%] right-[-4%] spining cursor-pointer text-white text-3xl bg-blue-600 hover:bg-green-700 p-8 rounded-full">
              <GrValidate />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
