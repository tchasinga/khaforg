import React from 'react'
import WordRotate from "../../animation/wordrotate.tsx";

const words = [
  "our services",
  "we provide services",
  "PATIENT SERVICES",
  "OUT PATIENT SERVICES",
  "TRAINING SERVICES",
];
export default function OurServices() {

    
  return (
    <div className='py-[3%] max-w-screen-2xl mx-auto'>
          <div className="">
          <h1 className="text-slate-800 text-2xl font-bold flex justify-center uppercase">
            <WordRotate words={words} />
          </h1>
          </div>
    </div>
  )
}
