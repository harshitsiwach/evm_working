    "use client";

import React, { useState, useEffect } from 'react'
import { Tweet } from 'react-tweet'
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/Components/ui/tracing-beam";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/Components/ui/hero-highlight";
import Image from 'next/image';
import Marquee from "react-fast-marquee";
export default function page() {
      const [isClient, setIsClient] = useState(false);

      useEffect(() => {
        // Component did mount in client
        setIsClient(true);
      }, []);
  return (
    <>
    <HeroHighlight >
      
    <div className=' w-screen h-auto  gap-3 flex justify-start items-start'>
    <TracingBeam className="z-0">

      <div className='mt-3 w-full flex justify-start items-start'>
        <div className='h-full flex flex-col justify-between items-between'>
        <div className='border border-red-500 p-3 m-3'>
          <h1 className='text-[#F52239]' style={{fontFamily : "PressStart2P"}}>
        Community
        </h1>
        <p style={{fontFamily : "PlusJakarta"}}>
        Join our vibrant Discord community to chat live with the developers and other players! Get the latest updates, participate in community events, and have your say in our game's development.
        </p>
        </div>
        <div className='h-auto rounded-sm w-[490px] flex justify-start items-start'>
        <Tweet  id="1707418634849861856" />
        </div>
        </div>
        <div className=''>
        {isClient && ( <iframe className='mt-3' src="https://discord.com/widget?id=1088556262511349801&theme=dark" width="400" height="480" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>)}
        </div>
     </div>


{/* // yt and iframe */}

     <div className='mt-[20px] w-full flex flex-row items-start justify-start '>
      <div className=' border border-red-500 p-3 m-3 w-[400px]'>
          <h1 className='text-[#F52239]' style={{fontFamily : "PressStart2P"}}>
        Early Access
        </h1>
         <p style={{fontFamily : "PlusJakarta"}}>
         Visit our Itch.io page to get early access to game builds and exclusive content. Support us directly by trying out prototypes and giving your valuable feedback.
        </p>
        </div>
        
    
        <div className='m-3'>
        {isClient && ( <iframe 
        frameBorder="0" 
        src="https://itch.io/embed/2570965?bg_color=222222&fg_color=eeeeee&link_color=be2424&border_color=363636" 
        width="552" 
        height="167" 
        style={{border: 'none'}}  // Ensure border style is applied correctly
    >
        <a href="https://evmwarfare.itch.io/evmwarfare">EVM Warfare by evmwarfare</a>
    </iframe>
        )}
</div>
   

     
    </div>
    <div className='mt-5  w-full flex flex-row items-center justify-center '>
    {isClient && (<iframe width="660" height="315" src="https://www.youtube.com/embed/IRSmYXty8z0?si=A9Y7V8qNBF9nGDPB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)}
    </div>
    <div className=' mt-[100px]  w-full flex flex-row items-center justify-center sm:w-[1000px] h-[150px]'>
      <div className=' w-screen sm:w-4/6 h-[150px]'>
      <Marquee className='flex flex-row gap-4 corner-fade 'gradient={true} gradientColor='black'>
       <div className='flex flex-row justify-center items-center gap-6'>
      <Image
      className='h-[50px] w-[50px]'
      src='/chains2/avalanche.png'
      alt=''
      height={100}
      width={100}
      />
    



<Image
      className='h-[50px] w-[50px]'
      src='/chains2/base.png'
      alt=''
      height={100}
      width={100}
      />

<Image
      className='h-[50px] w-[50px]'
      src='/chains2/ethereum.png'
      alt=''
      height={50}
      width={100}
      />

<Image
      className='h-[50px] w-[50px]'
      src='/chains2/lenia.png'
      alt=''
      height={100}
      width={100}
      />

<Image
      className='h-[50px] w-[50px]'
      src='/chains2/polygon.png'
      alt=''
      height={100}
      width={100}
      />
      
      <Image
      className='h-[50px] w-[50px]'
      src='/chains2/scroll.png'
      alt=''
      height={100}
      width={100}
      />

      <Image
      className='h-[50px] w-[50px]'
      src='/chains2/Untitled-1.png'
      alt=''
      height={100}
      width={100}
      />



      <Image
      className='h-[50px] w-[50px]'
      src='/chains2/taiko.png'
      alt=''
      height={100}
      width={100}
      />

<Image
      className='h-[50px] w-[50px]'
      src='/chains2/epic.png'
      alt=''
      height={100}
      width={100}
      />

<Image
      className='h-[50px] w-[50px]'
      src='/chains2/unreal.png'
      alt=''
      height={100}
      width={100}
      />
</div>
      </Marquee>
      </div>
      </div>
    </TracingBeam>
    </div>
   
    </HeroHighlight>
    </>
  )
}
