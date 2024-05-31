"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "@/Components/ui/tailwindcss-buttons";
import { ConnectWallet } from "@thirdweb-dev/react";

// time function
const MyComponent: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const updateCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateCurrentTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <div  className={`h-[80px] z-20 top-0 w-screen flex fixed ${isScrolled ? 'bg-black' : 'bg-transparent sm:bg-transparent'}`}> 
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>
          <Image src="/TextLogo_44.png" alt="My Image" width={100} height={100} />
          </Link>
          
          {/* <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-red-800 bg-[linear-gradient(110deg,#000103,45%,#F52239,55%,#000103)] bg-[length:200%_100%] px-6 text-sm text-red-500 transition-colors  ">
         </button> */}
          <ConnectWallet
          
            
/>
          <div className='w-[65px] mr-9'>
          <div className='text-red-600' >{currentTime}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;