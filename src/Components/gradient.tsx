import React from 'react';
import { BackgroundGradientAnimation } from "@/Components/ui/background-gradient-animation";
import Image from 'next/image';

function Gradient() {
  return (
    <div className='h-screen w-screen'>
      <BackgroundGradientAnimation className='absolute'>
        <div className='flex justify-center items-center h-full'>
          <div className='text-xs gap-7 z-20 flex flex-col items-center justify-center relative top-40  md:left-[100px]'>
            <div className='flex flex-col items-center w-[70px]'>
              <Image
                src="/Icons/pentagram.png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>About</span>
            </div>
            
            <div className='flex flex-col items-center w-[70px]'>
              <Image
                src="/Icons/satanism (1).png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Story</span>
            </div>

            <div className='flex flex-col items-center w-[70px]'>
              <Image
                src="/Icons/goat.png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Characters</span>
            </div>
            
            <div className='flex flex-col items-center w-[70px]'>
              <Image
                src="/Icons/satanic (1).png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Media</span>
            </div>
            
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
