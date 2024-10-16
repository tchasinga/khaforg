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
    <div className=''>
          <div className="">
          <WordRotate words={words} />
          </div>
    </div>
  )
}
