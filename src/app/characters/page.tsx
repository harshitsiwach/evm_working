import Image from "next/image"

function page() {
  return (
    <div className="h-screen gap-5 w-screen flex items-center justify-center">
      
        <Image
         className="hover:blur-sm ease-linear cursor-pointer border rounded-lg border-gray-800 "
        src="/Characters/C1.png"
        alt="alt"
        height={280}
        width={280}
        />
        
        <Image
        className="hover:blur-sm ease-linear cursor-pointer border rounded-lg border-gray-800 "
        src="/Characters/C5.png"
        alt="alt"
        height={280}
        width={280}
        />
        <Image
        className="hover:blur-sm ease-linear cursor-pointer border rounded-lg border-gray-800 "
        src="/Characters/C3.png"
        alt="alt"
        height={280}
        width={280}
        />
        <Image
        className="hover:blur-sm ease-linear cursor-pointer border rounded-lg border-gray-800 "
        src="/Characters/C4.png"
        alt="alt"
        height={280}
        width={280}
        />
        <Image
        className="hover:blur-sm ease-linear cursor-pointer  border rounded-lg border-gray-800 "
        src="/Characters/C2.png"
        alt="alt"
        height={280}
        width={280}
        />
    </div>
  )
}

export default page