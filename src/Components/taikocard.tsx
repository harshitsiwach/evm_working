"use client"
import { NeonGradientCard } from "@/Components/magicui/neon-gradient-card";
import Image from "next/image";
import { useContract, useAddress } from "@thirdweb-dev/react";
import React, { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "@/Components/ui/tailwindcss-buttons";

export  function NeonGradientCardDemo() {
    const address = useAddress();
    const { contract } = useContract("0xF13F673b00bfbDAB289019A776B3ff9690B3e9b5");
    
    const [amount, setAmount] = useState<number>(1);
    const [count, setCount] = useState<number>(0)

                                        // taikoconnectivity
    const handleTransaction = async () => {
        console.log(contract);
        try {
          if (!contract) {
            console.error("Contract is not loaded");
            return;
          }
    
          if (!address) {
            console.error("Address is not defined");
            return;
          }
    
          const tx = await contract.call("mint", [address, amount]); // Pass arguments as an array
          console.log("Transaction submitted", tx.transactionHash);
    
          // Optional: wait for the transaction to be confirmed
          const receipt = await tx.wait();
          console.log("Transaction confirmed", receipt.transactionHash);
        } catch (error) {
          console.error("Transaction error", error);
        }
      };


                                // button
    const decrement = () => {
        if(count === 0 ){
          return
        }
        setCount(prevCount => prevCount - 1);
      };
    
      const increment = () => {
        setCount(prevCount => prevCount + 1);
      };
  return (
    <NeonGradientCard className=" w-[400px] h-auto   ">
        <div className="">
     <div className=" h-[380px] rounded-2xl p-1">
        <Image
        className="h-full w-full rounded-2xl"
        src='/taiko/Taikoxd_1_2.gif'
        alt=""
        height={100}
        width={100}
        />
     </div>
      <div className="flex w-full flex-col justify-evenly items-center gap-14 h-full ">
      <div className="flex w-2/6 justify-between items-center">
       
          <div className="h-full flex items-center justify-center"><button  onClick={decrement} className="text-2xl w-[30px] h-[35px] flex items-center justify-center font-extralight text-[#F52239] hover:bg-[#878687]">&lt;</button></div>
          <div className="text-xl flex items-center justify-center h-[40px]  border-2 w-[45px] border-[#878687] ">{count}</div>
          <button className="text-2xl w-[30px] h-[35px] flex items-center justify-center font-extralight text-[#F52239] hover:bg-[#878687]" onClick={increment}>&gt;</button>
        </div>
        <div className="flex gap-5 mb-14">
        <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-[#F52239] rounded-lg" />
        <div className="w-[150px] h-[45px] flex items-center justify-center bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Buy with Eth   
        </div>
      </button>
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-[#F52239] rounded-lg" />
        <div className="w-[150px] h-[45px]  flex items-center justify-center bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Buy with Taiko
        </div>
      </button>
        </div>
      </div>
      </div>
    </NeonGradientCard>
  );
}
