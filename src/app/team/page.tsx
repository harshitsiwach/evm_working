
import Image from "next/image"

function page() {
  return (
    <div className='flex flex-col sm:mt-0 mt-[80px] items-center justify-center sm:h-screen overflow-hidden  gap-5 sm:flex sm:flex-row sm:justify-center sm:items-center'>
        <div className='h-[50px] hover:h-[500px] sm:h-[500px] sm:w-[100px] sm:hover:w-[400px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
          
            <Image
            className="object-cover h-full"
            src='/Team/7984686.jpg'
            alt="star"
            height={400}
            width={400}
          
            />
            <div className="opacity-0 hover:opacity-100 ml-5  ease-in-out duration-300  h-full  relative  overflow-hidden bottom-[450px] ">
              Artist <br />
              HAZARD
            </div>
            
        </div>

        <div className='h-[50px] hover:h-[500px] sm:h-[500px] sm:w-[100px] sm:hover:w-[400px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7989547.jpg'
            alt="star"
            height={400}
            width={400}
            />
        </div>

        <div className='h-[50px] hover:h-[500px] sm:h-[500px] sm:w-[100px] sm:hover:w-[400px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7989559.jpg'
            alt="star"
            height={400}
            width={400}
            />
        </div>

        <div className='h-[50px] hover:h-[500px] sm:h-[500px] sm:w-[100px] sm:hover:w-[400px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7989562.jpg'
            alt="star"
            height={400}
            width={400}
            />

        </div>

        <div className='h-[50px] hover:h-[500px] sm:h-[500px] sm:w-[100px] sm:hover:w-[400px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7989565.jpg'
            alt="star"
            height={400}
            width={400}
            />
        </div>

        <div className='h-[50px] hover:h-[500px] sm:h-[500px] sm:w-[100px] sm:hover:w-[400px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7984696.jpg'
            alt="star"
            height={400}
            width={400}
            />
        </div>

        <div className='h-[50px] hover:h-[500px] sm:h-[500px] sm:w-[100px] sm:hover:w-[400px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7989556.jpg'
            alt="star"
            height={400}
            width={400}
            />
        </div>

        <div className='h-[50px] hover:h-[500px] sm:h-[500px] sm:w-[100px] sm:hover:w-[400px] ease-in-out duration-300 cursor-pointer bg-red-800 '>
            <Image
            className="object-cover h-full"
            src='/Team/7993350.jpg'
            alt="star"
            height={400}
            width={400}
            />
        </div>
    </div>
  )
}

export default page