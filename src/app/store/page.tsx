"use client"
import { useContract, useAddress } from "@thirdweb-dev/react";
import React, { useState } from "react";

const Page: React.FC = () => {
  const address = useAddress();
  const { contract } = useContract("0xF13F673b00bfbDAB289019A776B3ff9690B3e9b5");
  const [count, setCount] = useState<number>(0)

  const [amount, setAmount] = useState<number>(1);

  const decrement = () => {
    if(count === 0 ){
      return
    }
    setCount(prevCount => prevCount - 1);
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

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

  return (
    <div className="mt-[90px] h-screen w-full flex justify-center items-center">
      <div>
        <div className="flex w-full justify-center items-center gap-4 h-[100px]">
          <button onClick={decrement} className="">-</button>
          <div>{count}</div>
          <button onClick={increment}>+</button>
        </div>
        <button onClick={handleTransaction} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Confirm Transaction
        </button>
      </div>
    </div>
  );
}

export default Page;
