import Image from "next/image"

function page() {
  return (
    <div className=" sm:flex sm:flex-row sm:h-screen h-4/6 sm:mt-0 sm:mb-0 mt-[80px] mb-[80px] gap-5 w-screen flex flex-col items-center justify-center">
      <div className="grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer border  rounded-lg border-gray-800 relative group ">
        <Image
          className="transition duration-300 ease-in-out"
        src="/Characters/C1.png"
        alt="alt"
        height={280}
        width={280}
        />
         <div className="absolute bottom-0 left-0 w-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out backdrop-blur-sm "   >
        <p className="text-white text-xl">SHINBI</p>
        <p className="text-xs">Heir to the House of Ryeong, one of the 12 powerful families of the Kingdom of Rinn, and the only blade dancer in the empire</p>
        </div>
        </div>
{/* --------------------------------------SECOND CARD ----------------------------------------------- */}
        <div className="grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer border  rounded-lg border-gray-800 relative group ">
        <Image
          className="transition duration-300 ease-in-out"
        src="/Characters/C2.png"
        alt="alt"
        height={280}
        width={280}
        />
         <div className="absolute bottom-0 left-0 w-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear backdrop-blur-md" >
        <p className="text-white text-xl">COUNTESS</p>
        <p className="text-xs">From a young age, she is been trained to kill. This dual wielding assassin moves through shadows to quickly end enemies.</p>
        </div>
        </div>
{/* --------------------------------------THIRD CARD ----------------------------------------------- */}
        <div className="grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer border  rounded-lg border-gray-800 relative group ">
        <Image
          className="transition duration-300 ease-in-out"
        src="/Characters/C3.png"
        alt="alt"
        height={280}
        width={280}
        />
         <div className="absolute bottom-0 left-0 w-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear backdrop-blur-md" >
        <p className="text-white text-xl">WRAITH</p>
        <p className="text-xs">Born on Rutas as the son of a famous politician of the Shakkadian Empire, Wraith suffered from a critical burn during an accident.</p>
        </div>
        </div>
{/* --------------------------------------FOURTH CARD ----------------------------------------------- */}
        <div className="grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer border  rounded-lg border-gray-800 relative group ">
        <Image
          className="transition duration-300 ease-in-out"
        src="/Characters/C4.png"
        alt="alt"
        height={280}
        width={280}
        />
         <div className="absolute bottom-0 left-0 w-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear backdrop-blur-md" >
        <p className="text-white text-xl">TWINBLAST</p>
        <p className="text-xs">A bounty hunter who suddenly appeared some time ago and made the world take notice</p>
        </div>
        </div>
        {/* --------------------------------------FIFTH CARD ----------------------------------------------- */}
        <div className="grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer border  rounded-lg border-gray-800 relative group ">
        <Image
          className="transition duration-300 ease-in-out"
        src="/Characters/C1.png"
        alt="alt"
        height={280}
        width={280}
        />
         <div className="absolute bottom-0 left-0 w-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear backdrop-blur-md" >
        <p className="text-white text-xl">ZENA</p>
        <p className="text-xs">Virtual idol trainee from another dimension who was summoned by Shinbi phantom wolves to the planet Prime.</p>
        </div>
        </div>
    </div>
  )
}

export default page