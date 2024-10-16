import React from 'react'
import WordRotate from "../../animation/wordrotate.tsx";

const words = [
  "Dev service",
  "Frontend",
  "Backend",
  "App dev",
  "Database",
  "Apis config",
  "Design",
  "Ui design",
];
export default function OurServices() {

    
  return (
    <div className='py-[5%] max-w-screen-2xl mx-auto'>
          <div className="">
          <h1 className="text-slate-800 text-2xl font-bold">
            <WordRotate words={words} />
          </h1>
          </div>
    </div>
  )
}
