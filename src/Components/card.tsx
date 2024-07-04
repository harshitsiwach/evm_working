"use client";
import { cn } from "@/Utils/cn";
import Image from "next/image";
import Link from "next/link";
export function CardDemo() {
  return (
    <div className=" w-full h-full group/card">
      <div
        className={cn(
          "  overflow-hidden  relative card h-full rounded-md shadow-xl w-full   mx-auto backgroundImage flex flex-col justify-end p-4",
          "bg-[url(/xyz9.png)] bg-cover bg-center "
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60 z-10"></div>
        
        <div className=" z-20 flex justify-center items-center gap-5">
        <Link href="https://store.hyperplay.xyz/game/evmwarfare" target="blank">
        <Image 
                className="h-auto w-auto sm:h-[100px] sm:w-[290px] m-4 hover:cursor-pointer"
                src='/HyperPlayCustomBadge_2.png'
                alt=''
                height={300}
                width={300}
                />
                </Link>
                  <Link href="https://onedrive.live.com/download?resid=9B503E22AA6AE809!1660&authkey=!AAUxRXEVfW12zvE" target="blank">
                  <div className="flex flex-row items-center m-4 justify-center z-20 h-auto w-auto  sm:h-[100px] sm:w-[300px] bg-[#F42339] text-white rounded-md hover:cursor-pointer">
           <div className="flex items-center justify-end h-full w-3/6 ">
           
               <Image
               src="/logoBlackT.png"
               alt=""
               height={100}
               width={100}
               />
               
           </div>
           <div className="flex flex-col items-start h-full w-full justify-center "style={{fontFamily : "PressStart2P"}}>
           <div className="text-[9px] sm:text-md">
                Download on
           </div>
           <div className="text-md sm:text-2xl">
            Launcher
           </div>
           </div>
        </div>
           </Link>
        </div>
      </div>
    </div>
  );
}
