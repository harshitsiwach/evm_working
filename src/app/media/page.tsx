"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './custom-swiper.css'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const SwiperComponent: React.FC = () => {
  const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');

  // A function to update the swiper direction based on the window width
  const updateDirection = () => {
    const windowWidth = window.innerWidth;
    const newDirection = windowWidth <= 760 ? 'vertical' : 'horizontal';
    setDirection(newDirection);
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    updateDirection();
    // Adding event listener to resize for window to handle responsive
    window.addEventListener('resize', updateDirection);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateDirection);
  }, []);

  return (
    <>
    <div className='h-screen w-screen flex items-center justify-center overflow-hidden'>
     <div className='h-[600px] w-3/4  overflow-hidden flex items-center justify-center'>
      <Swiper
        className=' w-full h-full flex items-center justify-center'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       
        slidesPerView={ "auto"}
        
        loop={true}
        direction={'horizontal'}
       
        onResize={() => {/* updateDirection logic here */}}
      >
      
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Game Ui/p1.1.png'
        alt=''
        height={900}
        width={900}
        />
      </SwiperSlide> 
   
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Game Ui/p2.1.2.png'
        alt=''
        height={900}
        width={900}
        />
      </SwiperSlide> 
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Game Ui/p3.2.png'
        alt=''
        height={900}
        width={900}
        />
      </SwiperSlide> 
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Game Ui/p4.1.png'
        alt=''
        height={900}
        width={900}
        />
      </SwiperSlide> 
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Game Ui/p5.1.png'
        alt=''
        height={900}
        width={900}
        />
      </SwiperSlide> 
      <SwiperSlide className=' h-[550px] w-full '>
        <Image
        className='h-full  w-full'
        src='/Game Ui/p6.1.png'
        alt=''
        height={900}
        width={900}
        />
      </SwiperSlide> 

  
      <div className="swiper-button-prev text-red-600"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
    </div>
    </div>
    </>
  );
};

export default SwiperComponent;
