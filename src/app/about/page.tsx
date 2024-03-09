"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './custom-swiper.css';
import Image from 'next/image';

function page() {
  
  return (
 
    <div className=' h-screen flex flex-col items-center justify-center '>
        <div className='w-full sm:w-5/6 h-full flex justify-center items center '>
          
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper  ">
     
        <SwiperSlide >
            <div className=' h-full gap-10  w-full flex flex-col items-start justify-center  text-[#F52239] p-4 'style={{fontFamily : "PressStart2P"}}>
                <div className='text-3xl ml-10 mr-5 sm:text-5xl'>
                
                What Is EVM Warfare
                </div>
                <div className='text-md text-white ml-10 mr-5  ' style={{fontFamily : "PlusJakarta"}}>
               
                EVM Warfare is a visceral third-person shooter built on Unreal Engine 5. It seamlessly integrates with all Ethereum Virtual Machine (EVM) compatible blockchains, allowing players to experience unparalleled interoperability and strategic depth. Immerse yourself in the EVM Wars, a high-stakes arena where the fight for survival transcends the boundaries of the digital world.
            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide >
        <div className=' h-full gap-10  w-full flex flex-col items-start justify-center  text-[#F52239] p-4 'style={{fontFamily : "PressStart2P"}}>
                <div className='text-3xl ml-10 mr-5 sm:text-5xl'>
                
                Features
                </div>
                <div className='text-md text-white ml-10 mr-5  ' style={{fontFamily : "PlusJakarta"}}>
               
                Fight, Earn, Dominate. <br />
                <br />

                Thrilling third-person shooter powered by Unreal Engine 5. Deposit via EVM blockchain. Dominate deathmatches, claim instant rewards based on performance. Enter the EVM: Desperation Protocol. Skill meets blockchain glory.
            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide >
        <div className=' h-full gap-10  w-full flex flex-col items-start justify-center  text-[#F52239] p-4 'style={{fontFamily : "PressStart2P"}}>
                <div className='text-3xl ml-10 mr-5 sm:text-5xl'>
                
                Features
                </div>
                <div className='text-md text-white ml-10 mr-5  ' style={{fontFamily : "PlusJakarta"}}>
                Effortlessly manage your digital assets with our integrated, universal EVM wallet <br />
                <br />
                Dualsense /Xbox Controller Support <br />
                <br />
                Deposit and withdraw funds seamlessly across all EVM-compatible blockchains. Create a new wallet or import your existing one with a single click.Send and receive funds to anyone within the game. Check Live GAS, Balance and Block info.            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide >
        <div className=' h-full gap-10  w-full flex flex-col items-start justify-center  text-[#F52239] p-4 'style={{fontFamily : "PressStart2P"}}>
                <div className='text-3xl ml-10 mr-5 sm:text-5xl'>
                Upcoming
                </div>
                <div className='text-md text-white ml-10 mr-5  ' style={{fontFamily : "PlusJakarta"}}>
                Gasless Transactions <br />
                <br />
                Two-Factor Authentication (2FA) <br />
                <br />
                Cross-Chain ERC-20 Tokens <br />  
                <br />
                In-Game Cross-Chain Decentralized Exchange (DEX) and NFT Marketplace            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide >
        <div className=' h-full gap-10  w-full flex flex-col items-start justify-center  text-[#F52239] sm:p-4 p-2 'style={{fontFamily : "PressStart2P"}}>
                <div className='text-md sm:ml-10 ml-0 sm:mr-5 mr-0 sm:text-5xl'>
                Building Community - [gamers/developers]

                </div>
                <div className='text-xl ml-10 mr-5 sm:text-3xl'>
                Cultivating Gamers:
                </div>
                <div className='text-md text-white ml-10 mr-5  ' style={{fontFamily : "PlusJakarta"}}>
                Elevating the competitive spirit, we will be introducing prizes for leaderboard champions on both testnet and mainnet. By recognizing top performers, we aim to ignite excitement and camaraderie among players, driving engagement and excellence within our gaming ecosystem.           </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide >
        <div className=' h-full gap-10  w-full flex flex-col items-start justify-center  text-[#F52239] sm:p-4 p-2'style={{fontFamily : "PressStart2P"}}>
                <div className='text-md sm:ml-10 ml-0 sm:mr-5 mr-0 sm:text-5xl'>
                Building Community - [gamers/developers]
                </div>
                <div className='text-xl ml-10 mr-5 sm:text-3xl'>
                Farming Developers:
                </div>
                <div className='text-md text-white ml-10 mr-5  ' style={{fontFamily : "PlusJakarta"}}>
                Embracing transparency and collaboration, we will be open-sourcing our codebase and providing comprehensive educational resources. This initiative invites aspiring developers to learn, innovate, and contribute to our project, fostering a dynamic community of creators dedicated to pushing the boundaries of blockchain gaming technology.          </div>
            </div>
           
        </SwiperSlide>
       
     
      </Swiper>
      </div>


      <div className='mb-[80px] h-[100px] flex items-center  overflow-hidden  w-3/6'>
        <div className=' gap-10 flex justify-between w-full flex-row whitespace-nowrap'>
          <svg className='ml-5  w-full max-w-xs h-[50px]' width="1503" height="1504" viewBox="0 0 1503 1504" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="287" y="258" width="928" height="844" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z" fill="#E84142"/>
          </svg>

          <svg className=' w-full max-w-xs h-[50px]' width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H3.9565e-07C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" fill="#0052FF"/>
          </svg>

          <svg className='= w-full max-w-xs h-[50px]' width="200" height="208" viewBox="0 0 200 208" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="199.4" height="207.623" fill="#121212"/>
          <g clip-path="url(#clip0_2303_643)">
          <path d="M132.369 155.99H49.7001V68.8854H68.6148V139.109H132.369V155.981V155.99Z" fill="white"/>
          <path d="M132.369 85.7575C141.687 85.7575 149.241 78.2036 149.241 68.8855C149.241 59.5673 141.687 52.0134 132.369 52.0134C123.05 52.0134 115.497 59.5673 115.497 68.8855C115.497 78.2036 123.05 85.7575 132.369 85.7575Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_2303_643">
          <rect width="99.5407" height="103.977" fill="white" transform="translate(49.7001 52.0134)"/>
          </clipPath>
          </defs>
          </svg>

            <svg className=' w-[5px] h-[50px]' width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

            <g fill="none">

            <circle fill="#6F41D8" cx="16" cy="16" r="16"/>

            <path d="M21.092 12.693c-.369-.215-.848-.215-1.254 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0l-4.244 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409z" fill="#FFF"/>

            </g>

            </svg>
          
          <Image
          className=' w-full max-w-xs h-[50px]'
          src='/Logos/SHARDEUM.png'
          alt='shradeum'
          height={100}
          width={100}
          />
        </div>
      </div>
      </div>
  )
}

export default page