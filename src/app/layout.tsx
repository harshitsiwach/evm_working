import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header"
import Footer from "../Components/Footer";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EVM WARFARE",
  description: "EVM WARFARE",
  icons :{
    icon : ['/Favicon/favicon.ico'],
    apple : ['/Favicon/apple-touch-icon.png'],
    android : ['/Favicon/android-chrome-512x512.png', '/Favicon/android-chrome-192x192.png']
    
}as any
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Providers>
        <Header/>
      
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  );
}
