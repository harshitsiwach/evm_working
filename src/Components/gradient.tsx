import React from 'react';
import { BackgroundGradientAnimation } from "@/Components/ui/background-gradient-animation";
import Image from 'next/image';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const NeuralBackground = dynamic(
  () => import('@/Components/mukbg'),
  { ssr: false }
);

function Gradient() {
  return (
    <div className='h-screen w-screen'>
      <NeuralBackground  ><div className='absolute'>
        <div className='flex justify-center items-center h-full'>
          <div className='text-xs gap-7 z-20 flex flex-col items-center justify-center relative sm:top-[110px] top-[100px] sm:left-[30px] left-[15px]'>
            <div className='flex flex-col items-center w-[50px]'>
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
            
            <div className='flex flex-col items-center w-[50px]'>
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

            <div className='flex flex-col items-center w-[50px]'>
             <Link className='flex flex-col items-center w-[50px]' href="/characters">
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
            <div className='flex flex-col items-center w-[50px]'>
              <Image
                src="/Icons/satanic (1).png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Media</span>
            </div>
            </Link>
            <Link href='/team'>
            <div className='flex flex-col items-center w-[50px]'>
              <Image
                src="/Icons/666.png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Team</span>
            </div>
            </Link>
            <Link href='/socials'>
            <div className='flex flex-col items-center w-[50px]'>
              <Image
                src="/Icons/mummy.png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Social</span>
            </div>
            </Link>
            <div className='flex flex-col items-center w-[50px]'>
              <Link target="_blank" rel="noopener noreferrer" className='flex flex-col items-center w-[50px]' href="https://docs.evmwarfare.com/">
              <Image
                src="/Icons/satanism.png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Docs</span>
              </Link>
            </div>
            <div className='flex flex-col items-center w-[50px] group relative group-hover:opacity-100'>
              <Link  className='flex flex-col items-center w-[50px]' href="">
              <Image
                
                src="/Icons/illuminati.png"
                alt='home image'
                height={40}
                width={40}
              />
              <span>Store</span>
              </Link>
              <div className='p-2 relative w-[100px] left-3 rounded-md bg-[#F52239] text-black bottom-0 opacity-0 group-hover:opacity-100 transition-opacity'>
                coming soon...
              </div>
            </div>
          </div>
        </div>
        </div>
      </NeuralBackground>

      </div>
    
  );
}

export default Gradient;