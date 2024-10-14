import Image from 'next/image'


export default function BrandAssets() {
  return (
    <div className="bg-black px-16 text-white pt-24 "style={{fontFamily:'conthrax'}}>
      {/* Our brand assets section */}
      <section className="h-screen  flex flex-col">
        <h1 className="text-4xl font-semibold text-[56px] mb-8">Our <span className="text-[#F52239]">brand</span> assets</h1>
        <div className="flex justify-between items-start ">
          <h2 className="text-[30px] font-semibold text-[#F52239]">EVM Warfare logos</h2>
          <button  className="border-2 border-[#F52239] text-white hover:bg-[#F52239]/90  px-4 rounded-[40px] py-2 text-md">
            Download Logos
          </button>
        </div>
        <div className=" grid grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col justify-center">
            <Image src="/logoBlackT.png" alt="Logo 1" width={200} height={200} className="" />
            <Image src="/TextLogo_44.png" alt="Logo 2" width={200} height={200} />
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <div className="border-2 ">
              <Image src="/xyz9.png" alt="Large Graphic" width={500} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette section */}
      <section className="h-screen  flex flex-col">
        <h2 className="text-[40px] text-[#F52239] mb-8">Color Palette</h2>
        <div className="h-[400px] rounded-[20px] relative grid grid-cols-4 gap-10 text-black">
          <div className="flex flex-col">
            <div className="h-[400px] rounded-[20px] relative bg-[#F52239]">
            <span className="mt-2 absolute bottom-3 right-3 font-semibold">#F52239</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[400px] rounded-[20px] relative bg-[#FFE7DF]">
            <span className="mt-2 absolute bottom-3 right-3 font-semibold">#FFE7DF</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[400px] rounded-[20px] relative bg-black border border-[#F52239]">
            <span className="mt-2 absolute bottom-3 right-3 font-semibold text-[#F52239]">#000000</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[400px] rounded-[20px] relative bg-white">
            <span className="mt-2 absolute bottom-3 right-3 font-semibold">#FFE7DF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Typography section */}
      <section className="h-screen  flex flex-col">
        <h2 className="text-[40px] text-[#F52239] mb-8">Typography</h2>
        <div className=" grid grid-cols-2 gap-4">
          <div className="bg-[#4D0000] p-4 flex items-center rounded-[20px] w-3/5">
            <div className="bg-[#FFE7DF] text-black text-2xl py-5 px-5 font-bold mr-4 rounded-[20px]">Aa</div>
            <div className="text-white">Dash</div>
          </div>
          <div className="bg-[#4D0000] p-4 flex items-center rounded-[20px] w-3/5">
            <div className="bg-[#FFE7DF] text-black text-2xl py-5 px-5 font-normal  mr-4 rounded-[20px]"style={{fontFamily:'conthrax'}}>Aa</div>
            <div className="text-white"style={{fontFamily:'conthrax'}}>Conthrax</div>
          </div>
          <div className="bg-[#4D0000] p-4 flex items-center rounded-[20px] w-3/5">
            <div className="bg-[#FFE7DF] text-black text-2xl py-5 px-5 font-light mr-4 rounded-[20px]">Aa</div>
            <div className="text-white">Dracula</div>
          </div>
          <div className="bg-[#4D0000] p-4 flex items-center rounded-[20px] w-3/5">
            <div className="bg-[#FFE7DF] text-black text-2xl py-5 px-5  mr-4 rounded-[20px]"style={{fontFamily:'PressStart2p'}}>Aa</div>
            <div className="text-white"style={{fontFamily:'PressStart2p'}}>PressStart2p</div>
          </div>
        </div>
      </section>
    </div>
  )
}