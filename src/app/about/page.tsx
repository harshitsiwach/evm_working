"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './custom-swiper.css';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
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
      
      <div className='w-3/6 h-[200px]'>
      <Marquee className=' corner-fade mb-[80px]  'gradient={true} gradientColor='black'>
       
      <svg width="100" height="50" viewBox="0 0 1503 1504" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="287" y="258" width="928" height="844" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z" fill="#E84142"/>
      </svg>

      <svg width="100" height="50" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H3.9565e-07C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" fill="#0052FF"/>
      </svg>

      <svg width="100" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g>
      <g>
        <g>
          <polygon style={{ fill: "#80D8FF" }} points="7.62,18.83 16.01,30.5 16.01,24.1" />
        </g>
        <g>
          <polygon style={{ fill: "#42A5F5" }} points="16.01,30.5 24.38,18.78 16.01,24.1" />
        </g>
        <g>
          <polygon style={{ fill: "#FFF176" }} points="16.01,1.5 7.62,16.23 16.01,12.3" />
        </g>
        <g>
          <polygon style={{ fill: "#FF8A80" }} points="24.38,16.18 16.01,1.5 16.01,12.3" />
        </g>
        <g>
          <polygon style={{ fill: "#C1AEE1" }} points="16.01,21.5 24.38,16.18 16.01,12.3" />
        </g>
        <g>
          <polygon style={{ fill: "#55FB9B" }} points="16.01,12.3 7.62,16.23 16.01,21.5" />
        </g>
      </g>
      <g>
        <path style={{ fill: "#455A64" }} d="M16.01,22c-0.09,0-0.18-0.03-0.27-0.08l-8.39-5.27c-0.23-0.14-0.3-0.44-0.17-0.67l8.39-14.73c0.18-0.31,0.69-0.31,0.87,0l8.36,14.68c0.13,0.23,0.06,0.53-0.17,0.67l-8.36,5.32C16.2,21.97,16.11,22,16.01,22z M8.3,16.06l7.71,4.85l7.69-4.89L16.01,2.51L8.3,16.06z" />
        <path style={{ fill: "#455A64" }} d="M16.01,31c-0.28,0-0.5-0.22-0.5-0.5v-6.4c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5v6.4C16.51,30.78,16.29,31,16.01,31z" />
        <path style={{ fill: "#455A64" }} d="M16.01,31c-0.16,0-0.31-0.08-0.41-0.21L7.22,19.12c-0.14-0.19-0.12-0.46,0.04-0.63c0.16-0.17,0.43-0.21,0.63-0.08l8.12,5.11l8.1-5.15c0.2-0.13,0.47-0.1,0.63,0.08c0.16,0.17,0.18,0.44,0.04,0.63l-8.36,11.72C16.33,30.92,16.16,30.98,16.01,31z M9.52,20.61l6.49,9.03l6.47-9.06l-6.2,3.94c-0.16,0.1-0.37,0.1-0.53,0L9.52,20.61z" />
        <path style={{ fill: "#455A64" }} d="M16.01,22c-0.09,0-0.18-0.03-0.27-0.08l-8.39-5.27c-0.15-0.1-0.24-0.27-0.23-0.45s0.12-0.34,0.29-0.42l8.39-3.93c0.13-0.06,0.29-0.06,0.42,0l8.36,3.88c0.17,0.08,0.28,0.24,0.29,0.42c0.01,0.18-0.08,0.36-0.23,0.45l-8.36,5.32C16.2,21.97,16.11,22,16.01,22z M8.67,16.29l7.34,4.62l7.33-4.66l-7.32-3.4L8.67,16.29z" />
        <path style={{ fill: "#455A64" }} d="M16.01,22c-0.28,0-0.5-0.22-0.5-0.5v-20c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5v20C16.51,21.78,16.29,22,16.01,22z" />
      </g>
    </g>
      </svg>

      <svg width="100" height="50" viewBox="0 0 200 208" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      <svg width="100" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

        <g fill="none">

        <circle fill="#6F41D8" cx="16" cy="16" r="16"/>

        <path d="M21.092 12.693c-.369-.215-.848-.215-1.254 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0l-4.244 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409z" fill="#FFF"/>

        </g>

      </svg>
      
      <Image
      className='h-[70px] w-[70px]'
      src='/Logos/Scroll_Logomark.673577c8260b63ae56867bc9af6af514.png'
      alt=''
      height={50}
      width={100}
      />

      <Image
      className='h-[70px] w-[70px]'
      src='/Logos/blast.png'
      alt=''
      height={50}
      width={100}
      />

      <svg width="100" height="50" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M270.018 219.255L226.941 160.73C222.262 154.37 215.332 150.56 207.953 149.72C206.273 149.526 204.773 148.551 203.933 147.081C203.078 145.611 202.988 143.826 203.663 142.266C206.618 135.457 206.798 127.552 203.618 120.323L174.476 53.7586C170.156 43.8745 160.392 37.5 149.608 37.5C138.824 37.5 129.06 43.8895 124.74 53.7586L95.5975 120.323C92.4327 127.552 92.5977 135.457 95.5525 142.266C96.2274 143.826 96.1224 145.611 95.2825 147.081C94.4276 148.551 92.9427 149.526 91.2628 149.72C83.8834 150.56 76.9541 154.37 72.2745 160.73L29.1981 219.255C22.8086 227.939 22.1637 239.578 27.5482 248.922C32.9478 258.251 43.3569 263.516 54.066 262.331L126.285 254.292C134.129 253.422 140.894 249.327 145.303 243.358C146.308 241.993 147.913 241.183 149.608 241.183C151.303 241.183 152.893 241.993 153.913 243.358C158.322 249.327 165.087 253.422 172.931 254.292L245.15 262.331C255.859 263.531 266.268 258.266 271.668 248.922C277.052 239.578 276.407 227.939 270.018 219.255ZM114.436 128.677L143.623 62.0379C144.673 59.6531 147.028 58.1082 149.623 58.1082C152.218 58.1082 154.572 59.6531 155.622 62.0379L184.81 128.677C185.725 130.777 185.53 133.207 184.27 135.127C183.01 137.047 180.88 138.201 178.57 138.201H120.66C118.366 138.201 116.221 137.047 114.961 135.127C113.701 133.207 113.506 130.777 114.421 128.677H114.436ZM129.42 230.129C128.385 232.184 126.375 233.563 124.095 233.818L51.8012 241.858C49.2214 242.143 46.7016 240.883 45.3967 238.633C44.0918 236.383 44.2568 233.578 45.8017 231.479L88.923 172.894C90.2879 171.049 92.4778 169.999 94.7726 170.134C97.0674 170.254 99.1372 171.529 100.292 173.523L100.337 173.598L129.21 223.604L129.255 223.679C130.41 225.674 130.47 228.104 129.435 230.144L129.42 230.129ZM155.547 207.511C154.318 209.625 152.068 210.945 149.608 210.945C147.163 210.945 144.898 209.64 143.668 207.526L121.485 169.114C120.255 166.999 120.255 164.374 121.485 162.259C122.715 160.145 124.965 158.825 127.425 158.825H171.776C174.221 158.825 176.486 160.115 177.716 162.244C178.945 164.374 178.945 166.984 177.716 169.099L155.547 207.511ZM253.834 238.633C252.529 240.883 250.024 242.158 247.43 241.873L175.136 233.833C172.856 233.578 170.846 232.199 169.811 230.144C168.776 228.089 168.836 225.659 169.991 223.679L170.036 223.604L198.909 173.598L198.954 173.523C200.109 171.529 202.178 170.254 204.473 170.134C206.768 170.014 208.958 171.049 210.323 172.894L253.444 231.479C254.989 233.578 255.139 236.383 253.849 238.633H253.834Z" fill="#E81899"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="50" viewBox="0,0,256,256">
      <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M10,3c-3.31,0 -6,2.69 -6,6v32.24023l21,6.29883l21,-6.29883v-32.24023c0,-3.31 -2.69,-6 -6,-6zM11,8h4v3h-4v7h3v3h-3v7h4v3h-4c-1.66,0 -3,-1.34 -3,-3v-17c0,-1.66 1.34,-3 3,-3zM17,8h6c1.66,0 3,1.34 3,3v7c0,1.66 -1.34,3 -3,3h-3v10h-3zM28,8h3v23h-3zM36,8h3c1.66,0 3,1.34 3,3v4h-3v-4h-3v17h3v-4h3v4c0,1.66 -1.34,3 -3,3h-3c-1.66,0 -3,-1.34 -3,-3v-17c0,-1.66 1.34,-3 3,-3zM20,11v7h3v-7zM9,34h4c0.55,0 1,0.45 1,1v1h-1v-0.75c0,-0.14 -0.11,-0.25 -0.25,-0.25h-3.5c-0.14,0 -0.25,0.11 -0.25,0.25v3.5c0,0.14 0.11,0.25 0.25,0.25h3.5c0.14,0 0.25,-0.11 0.25,-0.25v-0.75h-1v-1h2v2c0,0.55 -0.45,1 -1,1h-4c-0.55,0 -1,-0.45 -1,-1v-4c0,-0.55 0.45,-1 1,-1zM18,34h1l3,6h-1l-0.5,-1h-4l-0.5,1h-1zM23,34h1l2,4l2,-4h1v6h-1v-4l-1.5,3h-1l-1.5,-3v4h-1zM30,34h5v1h-4v1.5h2v1h-2v1.5h4v1h-5zM37,34h4c0.55,0 1,0.45 1,1v0.5h-1v-0.25c0,-0.14 -0.11,-0.25 -0.25,-0.25h-3.5c-0.14,0 -0.25,0.11 -0.25,0.25v1c0,0.14 0.11,0.25 0.25,0.25h3.75c0.55,0 1,0.45 1,1v1.5c0,0.55 -0.45,1 -1,1h-4c-0.55,0 -1,-0.45 -1,-1v-0.5h1v0.25c0,0.14 0.11,0.25 0.25,0.25h3.5c0.14,0 0.25,-0.11 0.25,-0.25v-1c0,-0.14 -0.11,-0.25 -0.25,-0.25h-3.75c-0.55,0 -1,-0.45 -1,-1v-1.5c0,-0.55 0.45,-1 1,-1zM18.5,35l-1.5,3h3z"></path></g></g>
      </svg>


      <svg fill="#FFFFFF" width="100" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0c-8.766 0-15.865 7.161-15.865 16s7.099 16 15.865 16c8.76 0 15.865-7.161 15.865-16s-7.104-16-15.87-16zM16 0.703c4.047 0 7.859 1.594 10.724 4.479 2.859 2.875 4.453 6.766 4.443 10.818 0 4.083-1.578 7.927-4.443 10.818-2.828 2.87-6.693 4.484-10.724 4.479-4.031 0.005-7.896-1.609-10.724-4.479-2.859-2.875-4.458-6.766-4.448-10.818 0-4.083 1.583-7.927 4.443-10.818 2.828-2.875 6.698-4.49 10.729-4.479zM15.203 6.333c-2.583 0.693-4.974 2.021-8.161 5.677s-2.583 6.677-2.583 6.677c0 0 0.88-2.078 2.995-4.266 1.005-1.036 1.75-1.385 2.266-1.385 0.458-0.026 0.844 0.344 0.844 0.802v7.422c0 0.734-0.474 0.896-0.911 0.885-0.37-0.005-0.714-0.135-0.714-0.135 2.172 3.156 7.37 3.599 7.37 3.599l2.281-2.438 0.052 0.047 2.089 1.781c3.823-2.271 5.667-6.479 5.667-6.479-1.708 1.802-2.792 2.224-3.438 2.224-0.573-0.005-0.797-0.339-0.797-0.339-0.031-0.156-0.083-2.417-0.104-4.677-0.021-2.339 0-4.682 0.115-4.688 0.661-1.24 2.766-3.74 2.766-3.74-3.932 0.776-6.073 3.354-6.073 3.354-0.635-0.5-1.927-0.417-1.927-0.417 0.604 0.333 1.208 1.302 1.208 2.104v7.896c0 0-1.318 1.161-2.333 1.161-0.604 0-0.974-0.328-1.177-0.599-0.078-0.104-0.146-0.219-0.198-0.344v-9.75c-0.141 0.104-0.313 0.161-0.484 0.167-0.219 0-0.443-0.109-0.594-0.427-0.115-0.24-0.188-0.599-0.188-1.125 0-1.797 2.031-2.99 2.031-2.99z"/>
      </svg>

      <svg  width="100" height="50" fill="#FFFFFF" version="1.1" id="layer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 652 652"  xmlSpace="preserve">
    <path d="M330.9,104.3l2.9,19.5h39.5l-11.4-52.3H309l-32.3,52.3h43.3C319.9,123.8,330.9,104.3,330.9,104.3z M373.7,208L359,138.1
      h-39.5l2.9,19.5h-28.1l11.4-19.5h-43.3L219.6,208h46.6l10-18.1h51.4l2.9,18.1C330.4,208,373.7,208,373.7,208z M496.4,199.4
      c13.8-5.7,24.3-14.3,31.4-24.7c7.1-10.5,10.9-22.4,10.9-36.6h-45.2c0,1.4,0.5,2.4,0.5,3.8c0,10-3.3,17.6-10.5,23.3
      c-7.1,5.7-16.2,8.6-27.6,8.6h-17.1l7.1-35.7h-43.8L388,208h59.9C466.5,208,482.6,205.1,496.4,199.4z M464.1,105.7h17.6
      c9.1,0,15.7,1.9,20,5.2c3.3,2.9,5.7,7.1,6.2,12.9H553v-0.5c0-17.1-5.7-30-16.7-39c-10.9-8.6-27.1-13.3-49-13.3h-59.9l-10.9,52.8
      h43.3L464.1,105.7L464.1,105.7z M618.7,164.2l21.9-26.2h-76.1l10.5,24.3l-9.5,45.7h44.2L618.7,164.2L618.7,164.2z M654.9,123.8
      l44.7-52.3H652l-34.7,43.3l-16.7-43.3h-45.7l23.8,52.3H654.9L654.9,123.8z M26.4,101.9h19c6.2,0,10.9,0.9,13.3,2.4
      c2.9,1.4,3.8,4.3,3.8,8.1c0,5.7-2.9,9.5-8.6,11.4h48.1c1.6-4.6,2.4-9.4,2.4-14.3c0-11.9-4.3-21.4-13.3-28.1c-9-6.7-20.9-10-36.2-10
      H-9.8l-6.2,30.4H26.4L26.4,101.9z M245.7,71.5H135.4l-6.7,30.9h110.8L245.7,71.5L245.7,71.5z M183.9,128.5l1.4-6.7h-59.5l-1.4,6.7
      l-4.8,23.8h59.5C179.1,152.3,183.9,128.5,183.9,128.5z M214.3,177.1H102L95.9,208h112.3C208.1,208,214.3,177.1,214.3,177.1z
      M154.4,349.8H92.5l7.1-34.7H55.4L41.2,385h106.1C147.2,385,154.4,349.8,154.4,349.8z M69.7,300.8h44.2l10.5-52.3H80.6L69.7,300.8z
      M218.1,366.9H269l3.3,18.1h43.3L300.4,315h-39l2.9,19.5h-28.1l10.9-19.5h-42.8L161.5,385h46.6L218.1,366.9L218.1,366.9z M251,248.4
      l-32.4,52.3h42.8l10.9-19.5l3.3,19.5h39l-10.9-52.3C303.8,248.4,251,248.4,251,248.4z M349.4,339.3l-9.5,45.7h44.2l9-43.8l21.9-26.2
      h-76.6C338.5,315,349.4,339.3,349.4,339.3z M426.5,248.4l-34.7,43.3l-16.7-43.3h-45.7l23.3,52.3h76.6l44.7-52.3
      C474.1,248.4,426.5,248.4,426.5,248.4z M-5.5,277c6.2,0,10.9,0.9,13.3,2.4c2.9,1.4,3.8,3.8,3.8,7.6c0,9-6.7,13.3-20.5,13.8h59.9
      c2.4-5.2,3.3-11.4,3.3-18.1c0-12.4-4.3-21.9-12.4-28.1c-8.6-6.2-20.9-9.5-37.6-9.5h-61.4l-6.7,31.9C-63.5,277-5.5,277-5.5,277z
      M37.4,315H-82.5L-97.3,385h42.3l8.1-37.6h18.6c21.4,0,38.1-4.3,50.4-13.3C28.8,329.2,34.1,322.6,37.4,315z M-0.2,168h20.9
      l16.2,40.4h46.6l-21.9-47.1c9-3.8,16.2-9,20.9-15.7c1.9-2.4,3.3-5.2,4.3-8.1H-35.4L-49.7,208h40.9L-0.2,168z M600.1,248.9H489.3
      l-6.2,30.9h110.4L600.1,248.9z M473.6,331.7h59.5l5.7-30.4h-59.5L473.6,331.7z M450.3,385.4h112.3l6.2-30.9H456.5
      C456.5,354.5,450.3,385.4,450.3,385.4z M728.6,258.4c-9-6.7-20.9-10-36.2-10h-64.7l-6.2,30.4h61.4c6.2,0,10.9,0.9,13.3,2.4
      c2.9,1.4,3.8,4.3,3.8,8.1c0,5.7-2.9,9.5-8.6,11.4h48c1.6-4.6,2.4-9.4,2.4-14.3C741.9,274.6,737.2,265.1,728.6,258.4z M720,322.2
      c1.9-2.4,3.3-5.2,4.3-8.1H602.1L587.8,385h40.9l8.6-40.4h20.9l16.2,40.4H721l-21.9-47.1C708.1,334.1,715.3,328.8,720,322.2z
      M204.8,465.8h110.4l6.7-31.4H211C211,434.4,204.8,465.8,204.8,465.8z M260.5,486.8H201l-6.2,30.4h59.5
      C254.3,517.2,260.5,486.8,260.5,486.8z M172,571h111.8l6.7-30.9H178.2L172,571z M20.2,486.8h70.9l-12.4-52.3H31.2
      C31.2,434.4,20.2,486.8,20.2,486.8z M192.9,434.4h-50.4l-33.8,52.3h73.7L192.9,434.4z M81.6,521.5L76.8,501H6L-8.3,571h39.5l12.4-59
      l12.8,59h31.9l37.6-60.4L113.5,571h40.4l14.3-69.9H94.4C94.4,501,81.6,521.5,81.6,521.5z"/>
    </svg>

      </Marquee>
      </div>
      </div>
  )
}

export default page