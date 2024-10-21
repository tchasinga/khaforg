/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import ImgOne from '../Images/Groupone/general-accident-logo-png-transparent-e1719813867612-2048x1099.png'
import ImgTwo from '../Images/Groupone/alison.jpg'
import ImgThree from '../Images/Groupone/images-e1719813819405.jpeg'
import ImgFour from '../Images/Groupone/images-e1719814724456.png'
import ImgFive from '../Images/Groupone/lang.jpg'
import ImgSix from '../Images/Groupone/nhif.jpg'
import ImgSeven from '../Images/Groupone/nita.png'
import ImgEight from '../Images/Groupone/pacis-2.jpg'
import ImgNine from '../Images/Groupone/power.jpg'
import ImgTen from '../Images/Groupone/pps-e1719813999374.jpg'

const ArrayImages = [ImgOne, ImgTwo, ImgThree, ImgFour, ImgFive, ImgSix, ImgSeven, ImgEight, ImgNine, ImgTen]

export default function Slider() {

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
        exit: { opacity: 0, y: 50, transition: { duration: 0.8 } }
      };

      // Animation variants for the container
const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.8,
        staggerChildren: 0.3, // Stagger animation between children
      },
    },
  };
      
  return (
    <motion.div className='mygridtemplateTwoIng'
    initial="hidden"
    whileInView="visible"
    variants={containerVariants}
    >
        {
            ArrayImages.map((img, index) => (
                <div key={index} className='flex justify-center items-center border rounded-3xl'
                variants={itemVariants}
                >
                    <Image src={img} alt="img" width={100} height={100} />
                </div>
            ))
        }
    </motion.div>
  );
}
