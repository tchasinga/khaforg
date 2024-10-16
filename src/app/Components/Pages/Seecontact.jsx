import firstContact from '@/app/Data/firstContact.js'
import React from 'react'

export default function Seecontact() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-black opacity-100'>
        <div className="max-w-md w-full bg-white p-5 rounded-xl">
            <div className="mygridtemplate">
                {
                    firstContact.map((item) => (
                     <>
                       <div className="flex items-center gap-3 p-3 border-2 border-gray-400 rounded-xl">
                       <div className='flex items-center gap-3 text-2xl text-blue-600 font-bold'>
                            {item.icons}
                        </div>
                         <div className="w-full">
                            <h1 className='text-xs  w-full'>{item.name}</h1>
                         </div>
                       </div>
                     </>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
