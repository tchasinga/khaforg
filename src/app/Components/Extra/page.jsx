import React from 'react'
import SparklesText from '../../animation/SparklesText'
import WordRotate from '../../animation/wordrotate'


// Words for rotating animation
const words = [
  "SPECIALIST CLINIC",
  "Gynaecology",
  "Family Planning",
  "Nutrition",
  "Comprehensive Care",
  "Men's Wellness",
  "Oncology",
  "Ear, Nose, and Throat",
   "Dermatology",
   "Gastrology",
   "Antenatal Clinic",
   "Optician",
    "Psychiatry",
    "Endoscopy",
];


export default function Givenservices() {
  return (
    <div className='pt-[6%] max-w-screen-xl mx-auto'>
        <div className="text-3xl py-[3%] uppercase  font-bold text-blue-600">
            <SparklesText text="OUR SERVICES" />
        <hr className="w-20" />
      </div>
      <div className="">
        <h1 className="text-blue-600 text-2xl font-bold flex justify-center uppercase pb-[4%]">
          <WordRotate words={words} />
        </h1>
      </div>
    </div>
  )
}
