import Image from "next/image"

function page() {
  return (
    <div className="h-screen gap-5 w-screen flex items-center justify-center">
      <div className=" border relative rounded-lg border-gray-800 overflow-hidden ">
        <Image
         className="hover:blur-sm  hover:scale-125 ease-linear cursor-pointer transition-transform duration-300 "
        src="/Characters/C1.png"
        alt="alt"
        height={280}
        width={280}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-linear">
        <p className="text-white text-xl">Your Text Here</p>
       </div>
        </div>
        <div className=" border rounded-lg border-gray-800 overflow-hidden ">
        <Image
        className="hover:blur-sm  hover:scale-125 ease-linear cursor-pointer transition-transform duration-300  "
        src="/Characters/C5.png"
        alt="alt"
        height={280}
        width={280}
        />
        </div>
        <div className=" border rounded-lg border-gray-800 overflow-hidden ">
        <Image
        className="hover:blur-sm  hover:scale-125 ease-linear cursor-pointer transition-transform duration-300  "
        src="/Characters/C3.png"
        alt="alt"
        height={280}
        width={280}
        />
        </div>
        <div className=" border rounded-lg border-gray-800 overflow-hidden ">
        <Image
        className="hover:blur-sm  hover:scale-125 ease-linear cursor-pointer transition-transform duration-300  "
        src="/Characters/C4.png"
        alt="alt"
        height={280}
        width={280}
        />
      </div>
      <div className=" border rounded-lg border-gray-800 overflow-hidden ">
        <Image
        className="hover:blur-sm  hover:scale-125 ease-linear cursor-pointer transition-transform duration-300  "
        src="/Characters/C2.png"
        alt="alt"
        height={280}
        width={280}
        />
        </div>
    </div>
  )
}

export default page