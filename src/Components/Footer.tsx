import Image from "next/image"
import Link from "next/link"
function Footer() {
  return (
    <div className=" p-5 bottom-0 flex fixed w-full justify-between items-center h-[80px] ">
        <div className="text-xs font-bold md:text-xs  gap-5  md:gap-9 flex text-red-600">
            <div >
                <Link className="hover:text-white" href={"/about"}>
                ABOUT
                </Link>
               </div>
            <div>GENERAL</div>
        </div>
        <div className="">
            <Link href={"/"}>
            <Image className="transition-transform hover:scale-110 cursor-pointer" src='/logoBlack2.png' alt="image" width={70} height={80}/>
            </Link>
            
        </div>
        <div className="flex text-xs md:text-xs font-bold gap-3 items-center">
            <div >
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="40" viewBox="0 0 48 48">
            <path fill="#F52239" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
            </svg>

            </div>
            <div >
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="40" viewBox="0 0 24 24">
                <path fill="#F52239" d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
            </div>
            <div className="text-red-600">SOCIALS</div>
        </div>
    </div>
  )
}

export default Footer