/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

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

// Import Swiper styles

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <div>
    </div>
  );
}
