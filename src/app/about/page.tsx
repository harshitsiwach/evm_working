
import React from 'react';

import Image from 'next/image';
import Marquee from "react-fast-marquee";
function page() {
  
  return (
 
    <div className='dark:bg-black h-auto sm:h-screen mt-[80px] mb-[160px] overflow-auto gap-5 flex flex-col items-center justify-center '>
         <div className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F52239] font-PressStart2p"style={{fontFamily : "PressStart2P"}}>
            ABOUT
          </div>
          <div className="text-[#F52239] w-5/6 sm:w-[700px]  flex flex-col justify-start"style={{fontFamily : "PressStart2P"}}>
          What is EVM Warfare? <br />
            <div className="text-white  text-sm"style={{fontFamily : "PlusJakarta"}}>
            EVM Warfare is a visceral third-person shooter built on Unreal Engine 5. It seamlessly integrates with all Ethereum Virtual Machine (EVM) compatible blockchains, allowing players to experience unparalleled interoperability and strategic depth. Immerse yourself in the EVM Wars, a high-stakes arena where the fight for survival transcends the boundaries of the digital world.            </div>
          </div>
          <div className=" text-[#F52239] w-5/6 sm:w-[700px] flex flex-col justify-start"style={{fontFamily : "PressStart2P"}}>
          Features <br />
            <div className="text-white"style={{fontFamily : "PlusJakarta"}}>
            Fight, Earn, Dominate.

            Thrilling third-person shooter powered by Unreal Engine 5. Deposit via EVM blockchain. Dominate deathmatches, claim instant rewards based on performance. Enter the EVM: Desperation Protocol. Skill meets blockchain glory.              </div>
           </div>
           <div className=" text-[#F52239] w-5/6 sm:w-[700px] flex flex-col justify-start"style={{fontFamily : "PressStart2P"}}>
            Features 
            <div className="text-white"style={{fontFamily : "PlusJakarta"}}>
            Effortlessly manage your digital assets with our integrated, universal EVM wallet 

            Dualsense /Xbox Controller Support 

            Deposit and withdraw funds seamlessly across all EVM-compatible blockchains. Create a new wallet or import your existing one with a single click.Send and receive funds to anyone within the game. Check Live GAS, Balance and Block info.            </div>
          </div>
          <div className=" text-[#F52239] w-5/6 sm:w-[700px] flex flex-col justify-start"style={{fontFamily : "PressStart2P"}}>
          Upcoming 
            <div className="text-white"style={{fontFamily : "PlusJakarta"}}>
            Gasless Transactions 

            Two-Factor Authentication (2FA)

            Cross-Chain ERC-20 Tokens

            In-Game Cross-Chain Decentralized Exchange (DEX) and NFT Marketplace            </div>
          </div>
          <div className=" text-[#F52239] w-5/6 sm:w-[700px] flex flex-col justify-start"style={{fontFamily : "PressStart2P"}}>
          Building Community - [gamers/developers] 
            <div className="text-white"style={{fontFamily : "PlusJakarta"}}>
            Cultivating Gamers:

          Elevating the competitive spirit, we will be introducing prizes for leaderboard champions on both testnet and mainnet. By recognizing top performers, we aim to ignite excitement and camaraderie among players, driving engagement and excellence within our gaming ecosystem.               </div>
          </div>

          {/* <div className=" text-[#F52239] w-5/6 sm:w-[700px] flex flex-col justify-start"style={{fontFamily : "PressStart2P"}}>
          Building Community - [gamers/developers]
            <div className="text-white"style={{fontFamily : "PlusJakarta"}}>
            Farming Developers:

Embracing transparency and collaboration, we will be open-sourcing our codebase and providing comprehensive educational resources. This initiative invites aspiring developers to learn, innovate, and contribute to our project, fostering a dynamic community of creators dedicated to pushing the boundaries of blockchain gaming technology.               </div>
          </div> */}
      <div className='fixed bg-black bottom-0 w-screen sm:w-screen flex items-center justify-center h-[150px]'>
      <div className='fixed bg-black bottom-0 w-screen sm:w-3/6 h-[150px]'>
      <Marquee className='flex flex-row gap-4 corner-fade bg-black  'gradient={true} gradientColor='black'>
       <div className='flex flex-row justify-center items-center gap-6'>
      <Image
      className='h-[50px] w-[50px]'
      src='/chains/Avalanche_AVAX_RedWhite.png'
      alt=''
      height={100}
      width={100}
      />
    



<Image
      className='h-[50px] w-[50px]'
      src='/chains/base.png'
      alt=''
      height={100}
      width={100}
      />

<Image
      className='h-[50px] w-[50px]'
      src='/chains/ethereum.png'
      alt=''
      height={50}
      width={100}
      />

<Image
      className='h-[50px] w-[50px]'
      src='/chains/Linea Black.png'
      alt=''
      height={100}
      width={100}
      />

<Image
      className='h-[50px] w-[50px]'
      src='/chains/b8db9a2ac5004c1685a39728cdf4e100.png'
      alt=''
      height={100}
      width={100}
      />
      
      <Image
      className='h-[50px] w-[50px]'
      src='/chains/Scroll_Logomark.673577c8260b63ae56867bc9af6af514.png'
      alt=''
      height={100}
      width={100}
      />

      <Image
      className='h-[50px] w-[50px]'
      src='/chains/blast.png'
      alt=''
      height={100}
      width={100}
      />



      <Image
      className='h-[50px] w-[50px]'
      src='/chains/taiko-icon-wht-2x.png'
      alt=''
      height={100}
      width={100}
      />

<Image
      className='h-[50px] w-[50px]'
      src='/chains/Epic_Games.png'
      alt=''
      height={100}
      width={100}
      />

<Image
      className='h-[50px] w-[50px]'
      src='/chains/CITYPNG.COMHD_Unreal_Engine_White_Logo_Icon_PNG_-_3000x3000.png'
      alt=''
      height={100}
      width={100}
      />
</div>
      </Marquee>
      </div>
      </div>
      </div>
  )
}

export default page