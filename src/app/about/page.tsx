"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './custom-swiper.css';
function page() {
  return (
 
    <div className='  h-screen flex items-center justify-center '>
        <div className='w-[900px]  '>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
      
        <SwiperSlide>
            <div className='ml-9'>
                GAME MODES
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
     
      </Swiper>
      </div>
      </div>
  )
}

export default page