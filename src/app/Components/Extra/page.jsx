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
              
              <div className="">
                <div className="">
                <h1 className="text-xl font-bold text-slate-900">{items.title}</h1>
                </div>

                <div className="">
                  
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
