'use client'

import { useState, useRef, useEffect } from 'react'
import { BackgroundBeams } from '@/Components/ui/background-beams'
import Image from 'next/image'
import { CardDemo } from './card'

function Download() {
  const [showDiv, setShowDiv] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null);;

  const handleClick = () => {
    setShowDiv(!showDiv)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
      setShowDiv(false);
    }
  };

  useEffect(() => {
    if (showDiv) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDiv]);

  return (
    <div>
      <button onClick={handleClick} className="hover:text-white">DOWNLOAD</button>
      {showDiv && <div className=' fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-xs'>
        <div ref={targetRef} className=' relative h-[600px] w-screen sm:w-[1000px] border-2 border-[#f52239] bg-black z-50'>
          <BackgroundBeams/>
          <div className='flex h-full w-full items-center justify-center '>
            <div className='w-full h-full'>
               <CardDemo/>
            </div>
            

          </div>
        </div>
        </div>}
    </div>
  )
}

export default Download
