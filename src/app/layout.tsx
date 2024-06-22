
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header"
import Footer from "../Components/Footer";
import { ThirdwebProvider } from "@/Components/ThirdwebProvider";

import {BaseSepoliaTestnet} from "@thirdweb-dev/chains";
import {Taiko} from "@thirdweb-dev/chains"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EVM Warfare -  Third-Person Shooter on Blockchain",
  description: "EVM Warfare is a visceral third-person shooter built on Unreal Engine 5. It seamlessly integrates with all Ethereum Virtual Machine (EVM) compatible blockchains, allowing players to experience unparalleled interoperability and strategic depth.",
  icons :{
    icon : ['/Favicon/favicon.ico'],
    apple : ['/Favicon/apple-touch-icon.png'],
    android : ['/Favicon/android-chrome-512x512.png', '/Favicon/android-chrome-192x192.png']
    
}as any,
openGraph :{
  title:"EVM Warfare -  Third-Person Shooter on Blockchain",
  description: "EVM Warfare is a visceral third-person shooter built on Unreal Engine 5. It seamlessly integrates with all Ethereum Virtual Machine (EVM) compatible blockchains, allowing players to experience unparalleled interoperability and strategic depth.",
  type: 'website',
  locale : "en_US",
  url: "https://evmwarfare.com/",
  siteName : "Evm Warfare",
  
}
};

// const baseSepolia = defineChain({
//   id: 84532,
//   name: "Base Sepolia",
//   nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
//   blockExplorers: [
//     {
//       name: "Basescan",
//       url: "https://sepolia.basescan.org",
//       apiUrl: "https://api-sepolia.basescan.org/api",
//     },
//   ],
//   testnet: true,
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <ThirdwebProvider
       activeChain={BaseSepoliaTestnet}
       clientId="e49353adfb5220e9425d0ed9f0a7bac7"
       supportedChains={[Taiko]}
    
       >
        <Header/>
        
        {children}
      
        <Footer/>
        </ThirdwebProvider>
       
        </body>
    </html>
  );
}
