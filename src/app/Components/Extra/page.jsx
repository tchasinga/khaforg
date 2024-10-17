import React from 'react'
import SparklesText from '../../animation/SparklesText'
import WordRotate from '../../animation/wordrotate'
import AddingServicesData from '../../Data/AddingServicesData.js'
import { GrValidate } from 'react-icons/gr';
import Image from 'next/image';


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

      {/* my data rendening */}
      <div className="">
        <div className="mygridtemplateTwoIng max-w-5xl mx-auto">
          {AddingServicesData.map((items, index) => (
            <div key={index} className="border-2 border-slate-400 rounded-lg">
              <div className="">
              <Image src={items.myImg} alt={items.title} className="p-3 h-52 object-fill rounded-2xl " />
              </div>

              <div className="text-start p-3">
              
              <div className="flex items-center justify-between">
                <div className="">
                <h1 className="text-xl font-bold text-slate-900">{items.title}</h1>
                </div>

                <div className="flex gap-1 items-center">
                {[...Array(Math.floor(items.rating))].map((_, index) => (
    <svg key={index} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.431 8.195 1.187-5.92 5.764 1.394 8.174L12 18.897l-7.337 3.85 1.394-8.174-5.92-5.764 8.195-1.187L12 .587z" />
    </svg>
))}
                </div>
              </div>

               <p className="text-gray-500 py-2 text-sm">{items.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
