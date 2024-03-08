"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    
    <Swiper
      spaceBetween={30} // Space between slides
      centeredSlides={true} // Active slide will be centered
      slidesPerView={'auto'} // Adjust 'auto' or specific number as per design
      loop={true} // Enables loop mode
      navigation // Enables navigation buttons
      pagination={{ clickable: true }} // Enables and configures pagination
      // You can adjust "centeredSlidesBounds" and "slidesOffsetBefore/after" to control the visibility of previous/next images
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="/Game UI/1.png" alt="Slide 1"/></SwiperSlide>
      <SwiperSlide><img src="/Game UI/1.png" alt="Slide 2"/></SwiperSlide>
      <SwiperSlide><img src="/Game UI/1.png" alt="Slide 3"/></SwiperSlide>
      {/* ...more slides */}
    </Swiper>
      
    </>
  );
}
