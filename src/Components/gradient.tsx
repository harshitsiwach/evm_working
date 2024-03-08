import React from 'react';
import { BackgroundGradientAnimation } from "@/Components/ui/background-gradient-animation";
import Image from 'next/image';
import Link from 'next/link';
function Gradient() {
  return (
    <div className='h-screen w-screen'>
      <BackgroundGradientAnimation className=' absolute'>
        <div className='flex justify-center items-center h-full'>
          <div className='text-xs gap-7 z-20 flex flex-col items-center justify-center relative top-40  md:left-[20px]'>
            <div className='flex flex-col items-center w-[70px]'>
              <Link href="/about">
              <Image
                src="/Icons/pentagram.png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>About</span>
              </Link>
            </div>
            
            <div className='flex flex-col items-center w-[70px]'>
              <Link href="/story">
              <Image
                src="/Icons/satanism (1).png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Story</span>
              </Link>
            </div>

            <div className='flex flex-col items-center w-[70px]'>
             <Link className='flex flex-col items-center w-[70px]' href="/characters">
              <Image
                src="/Icons/goat.png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Characters</span>
              </Link>
            </div>
            <Link href="/media">
            <div className='flex flex-col items-center w-[70px]'>
              <Image
                src="/Icons/satanic (1).png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Media</span>
            </div>
            </Link>
            
            <div className='flex flex-col items-center w-[70px]'>
              <Image
                src="/Icons/666.png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Team</span>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}

export default Gradient;
