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
        <div className='w-full sm:w-4/6 h-full flex justify-center items center '>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper  ">
      
        <SwiperSlide >
            <div className=' h-full text-3xl gap-10 w-full flex flex-col items-center justify-center sm:text-7xl p-4 '>
                WHAT IS EVM WARFARE
                <div className='text-sm text-center flex items-center justify-center'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum esse natus accusamus, consequuntur  <br />
              Pariatur iure earum nisi ea, consequuntur ipsam placeat, nulla autem illum vel libero doloremque quis  <br />
              Quod, amet? Rerum exercitationem sunt ipsum nam aliquam aspernatur qui explicabo laudantium autem sed  <br />
            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide >
            <div className=' h-full text-3xl gap-10 w-full flex flex-col items-center justify-center sm:text-7xl p-4 '>
                WHAT IS EVM WARFARE
                <div className='text-sm text-center  flex items-center justify-center'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum esse natus accusamus, consequuntur  <br />
              Pariatur iure earum nisi ea, consequuntur ipsam placeat, nulla autem illum vel libero doloremque quis  <br />
              Quod, amet? Rerum exercitationem sunt ipsum nam aliquam aspernatur qui explicabo laudantium autem sed  <br />
            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide >
            <div className=' h-full  text-3xl gap-10 w-full flex flex-col items-center justify-center sm:text-7xl p-4 '>
                WHAT IS EVM WARFARE
                <div className='text-sm text-center flex items-center justify-center'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum esse natus accusamus, consequuntur  <br />
              Pariatur iure earum nisi ea, consequuntur ipsam placeat, nulla autem illum vel libero doloremque quis  <br />
              Quod, amet? Rerum exercitationem sunt ipsum nam aliquam aspernatur qui explicabo laudantium autem sed  <br />
            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide >
            <div className=' h-full text-3xl gap-10 w-full flex flex-col items-center justify-center sm:text-7xl p-4 '>
                WHAT IS EVM WARFARE
                <div className='text-sm text-center flex items-center justify-center'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum esse natus accusamus, consequuntur  <br />
              Pariatur iure earum nisi ea, consequuntur ipsam placeat, nulla autem illum vel libero doloremque quis  <br />
              Quod, amet? Rerum exercitationem sunt ipsum nam aliquam aspernatur qui explicabo laudantium autem sed  <br />
            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide >
            <div className=' h-full text-3xl gap-10 w-full flex flex-col items-center justify-center sm:text-7xl p-4 '>
                WHAT IS EVM WARFARE
                <div className='text-sm flex text-center items-center justify-center'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum esse natus accusamus, consequuntur  <br />
              Pariatur iure earum nisi ea, consequuntur ipsam placeat, nulla autem illum vel libero doloremque quis  <br />
              Quod, amet? Rerum exercitationem sunt ipsum nam aliquam aspernatur qui explicabo laudantium autem sed  <br />
            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide >
            <div className=' h-full text-3xl gap-10 w-full flex flex-col items-center justify-center sm:text-7xl p-4 '>
                WHAT IS EVM WARFARE
                <div className='text-sm flex text-center items-center justify-center'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum esse natus accusamus, consequuntur  <br />
              Pariatur iure earum nisi ea, consequuntur ipsam placeat, nulla autem illum vel libero doloremque quis  <br />
              Quod, amet? Rerum exercitationem sunt ipsum nam aliquam aspernatur qui explicabo laudantium autem sed  <br />
            </div>
            </div>
           
        </SwiperSlide>
       
     
      </Swiper>
      </div>
      </div>
  )
}

export default page