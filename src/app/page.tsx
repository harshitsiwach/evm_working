"use client"
import Kursor from "kursor";
import "kursor/dist/kursor.css";
import React, { useEffect } from 'react';
import Gradient from "../Components/gradient";


export default function Home() {

    new Kursor({
      type: 3,
      color: '#F52239',
      removeDefaultCursor: true
    });
  
  return (
  
   <Gradient/>

    
  );
}
