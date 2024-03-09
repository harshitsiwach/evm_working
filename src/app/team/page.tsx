
import Image from "next/image"

function page() {
  return (
    <div className='h-screen overflow-hidden  gap-5 flex justify-center items-center'>
        <div className='h-[500px] w-[100px] hover:w-[400px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
          
            <Image
            className="object-cover h-full"
            src='/Team/7984686.jpg'
            alt="star"
            height={500}
            width={500}
          
            />
            <div className="opacity-0 hover:opacity-100 ml-5  ease-in-out duration-300  h-full  relative  overflow-hidden bottom-[450px] ">
              Artist <br />
              HAZARD
            </div>
            
        </div>

        <div className='h-[500px] w-[100px] hover:w-[500px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7989547.jpg'
            alt="star"
            height={500}
            width={500}
            />
        </div>

        <div className='h-[500px] w-[100px] hover:w-[500px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7989559.jpg'
            alt="star"
            height={500}
            width={500}
            />
        </div>

        <div className='h-[500px] w-[100px] hover:w-[500px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7989562.jpg'
            alt="star"
            height={500}
            width={500}
            />

        </div>

        <div className='h-[500px] w-[100px] hover:w-[500px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7989565.jpg'
            alt="star"
            height={500}
            width={500}
            />
        </div>

        <div className='h-[500px] w-[100px] hover:w-[500px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7984696.jpg'
            alt="star"
            height={500}
            width={500}
            />
        </div>
    </div>
  )
}

export default page