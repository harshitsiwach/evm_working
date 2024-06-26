"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';
import './custom-swiper.css'

// import required modules
import { Scrollbar, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  return (
    <>
    <div className='dark:bg-black h-screen w-screen flex items-center justify-center overflow-hidden'>
     <div className='h-[600px] w-3/4  overflow-hidden flex items-center justify-center'>
      <Swiper
       rewind={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{
          hide: true,
        }}
        pagination={{
          clickable: true,
         
        }}
        navigation={true}
        modules={[Scrollbar, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Media2/x_1.png'
        alt=''
        height={2000}
        width={2000}
        />
      </SwiperSlide> 
   
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Media2/x_2.png'
        alt=''
        height={2000}
        width={2000}
        />
      </SwiperSlide> 
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Media2/x_3.png'
        alt=''
        height={2000}
        width={2000}
        />
      </SwiperSlide> 
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Media2/x_4.png'
        alt=''
        height={2000}
        width={2000}
        />
      </SwiperSlide> 
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Media2/ss3.png'
        alt=''
        height={2000}
        width={2000}
        />
      </SwiperSlide> 
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Media2/2.png'
        alt=''
        height={2000}
        width={2000}
        />
      </SwiperSlide> 
      </Swiper>
      </div>
      </div>
    </>
  );
}
