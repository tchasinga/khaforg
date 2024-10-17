import React from 'react'
import Slider from '../Slider'

export default function Ourpartners() {
  return (
    <div className='py-[3%] max-w-screen-xl mx-auto flex flex-col'>
    <div className="flex flex-col justify-center items-center text-start py-[3%]">
        <h1 className='text-blue-600 text-2xl font-bold flex uppercase'>
            Our Partners    
        </h1>
        <div className="bg-blue-600 w-10 h-1 text-start"></div>
        </div>
        <Slider />
    </div>
  )
}
