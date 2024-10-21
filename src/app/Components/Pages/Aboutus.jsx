"use client";
import React from 'react'


export default function Aboutus() {
  return (
    <div className='max-w-screen-xl mx-auto'>

      {/* Adding a flex design */}
      <div className="">

        {/* First section */}
        <div className="">
            <div className="flex flex-col items-start text-blue-600">
              <h1 className="text-4xl font-bold text-center">About Us</h1>
              <h1 className="text-center">We are a team of professionals</h1>
            </div>
            <div className="text-start text-sm">
              <div className="flex-col flex py-3 text-slate-700">
              <p className="">Established under section 10 of the Societies Act, CHANF Community</p>
              <p className="">Health Services (CHANF-CNS) is based in Kitengela, Kajiado County,</p>
              <p className="">Kenya. The foundation is registered as No.R.51863. At CHANF-CNS. We</p>
              </div>
              <div className="flex flex-col py-2 text-slate-700">
              <p className="">strive to foster a comprehensive approach to well-being in various</p>
              <p className="">aspects of life, including the community, family, workplace, and schools,</p>
              <p className="">with a particular focus on health, nutrition, and industrial relationships.</p>
              </div>
            </div>
            {/* Blog visit side */}
            <div className="flex flex-col items-center py-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Read More</button>
            </div>
        </div>
        
      </div>

    </div>
  )
}
