import React from 'react'
import SparklesText from '../../animation/SparklesText'
import WordRotate from '../../animation/wordrotate'
import AddingServicesData from '../../Data/AddingServicesData.js'
import { MdAttachEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import InPatientService from '../../Data/InPatientService.js'

import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";

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

const texting =[
  "Operation Theatre",
  "Paeditric Care",
  "Maternity Care",
  "Critical care",
  "Adult ward"
]

export default function Givenservices() {
  return (
    <div className='pt-[6%] max-w-screen-xl mx-auto'>
      {/* Title with sparkles */}
      <div className="text-3xl py-[3%] uppercase font-bold text-blue-600 text-start">
        <SparklesText text="OUR SERVICES" />
        <hr className="w-20 border-blue-600" />
      </div>

      {/* Rotating words */}
      <div className="">
        <h1 className="text-blue-600 text-2xl font-bold flex justify-center uppercase pb-[4%]">
          <WordRotate words={words} />
        </h1>
      </div>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {AddingServicesData.map((items, index) => (
          <div 
            key={index} 
            className="border  border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white "
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl myb">
              <Image 
                src={items.myImg} 
                alt={items.title} 
                className="p-3 h-52 w-full object-cover rounded-xl hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Text content */}
            <div className="text-start p-4">
              {/* Title and rating */}
              <div className="flex items-center justify-between mb-3">
                <h1 className="text-xl font-bold text-gray-900">{items.title}</h1>
                <div className="flex gap-1 items-center">
                  {[...Array(Math.floor(items.rating))].map((_, index) => (
                    <svg key={index} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.195 1.187-5.92 5.764 1.394 8.174L12 18.897l-7.337 3.85 1.394-8.174-5.92-5.764 8.195-1.187L12 .587z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="">
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{items.description}</p>
              </div>
              

              {/* Book now button */}
              <div className="text-start flex items-center  gap-2">
                <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold text-sm hover:from-blue-500 hover:to-blue-300 transition-colors duration-300 transform hover:scale-105">
                  Book now
                </button>

                <div className="p-3 rounded-full bg-green-600 cursor-pointer hover:bg-blue-600">
                    <FaWhatsapp className='text-white text-xl  rounded-full '/>
                </div>

                <a target="_blank" href={`mailto:reception@chan-f.or.ke`} className='' >
                <div className="p-3 rounded-full bg-green-600 hover:bg-blue-600 duration-500">
                    <MdAttachEmail className='text-white text-xl  rounded-full'/>
                </div>
                </a>

                <div className="p-3 rounded-full bg-green-600 cursor-pointer hover:bg-blue-600 duration-500">
                    <IoCallOutline className='text-white text-xl  rounded-full'/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Second card grid  */}
        {/* Title with sparkles */}
        <div className="">
        <h1 className="text-blue-600 text-2xl font-bold flex justify-center uppercase py-[4%]">
          <WordRotate words={texting} />
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pb-[5%]">
        {
          InPatientService.map((ItemsData, index) =>(
            <div key={index} className='border rounded-3xl h-[300px] flex flex-col'>
               <div className="bg-blue-700 relative h-[150px] rounded-b-full">
               <div className="flex justify-center items-center absolute right-0 left-28 top-24 text-center bg-green-600 p-4 rounded-full text-5xl w-20 h-20">
                  <h1 className='text-white'>{ItemsData.icons}</h1>
               </div>
               </div>
               <div className="">
                   <h1 className="">{ItemsData.title}</h1>
               </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
