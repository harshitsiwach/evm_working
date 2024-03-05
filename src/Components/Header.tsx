"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const MyComponent: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

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

  return (
    <>
      <div className="h-[80px] z-20 top-0 w-screen flex fixed">
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>
          <Image src="/TextLogo_44.png" alt="My Image" width={100} height={100} />
          </Link>
          
          <div className='font-bold cursor-pointer text-red-600 hover:text-white'  ><ConnectButton/></div>
          <div className='w-[65px] mr-9'>
          <div className='text-red-600' >{currentTime}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;