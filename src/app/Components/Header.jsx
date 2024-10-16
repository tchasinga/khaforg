/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import mylogo from '../icon/image-removebg-preview-59.png'
import 'animate.css';

const Header = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"OUR SERVICES",link:"/"},
        {name:"ABOUT US",link:"/"},
        {name:"OUR DOCTORS",link:"/"},
        {name:"CONTACT US",link:"/"},
        {name:"TRAINING",link:"/"},
        {name:"FAQ",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='w-full myblick fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-whiter py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className="">
               <Image src={mylogo} alt="logo" className=" w-[150px] object-fill" />
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex flex-wrap md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-white duration-500'>{link.name}</a>
                    </li>))
                }
                <button className='btn animate__shakeX animate__animated bg-blue-600 text-white md:ml-8 font-semibold px-3 py-2 rounded duration-500 md:static'>Apply now</button>

            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;
