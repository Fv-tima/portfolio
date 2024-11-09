"use client"
import { useState, useEffect } from 'react';
import Website from './website/page';
import Image from 'next/image';
import Footer from './components/Footer';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);


  return isMobile ? <MobileHome /> : <Website />;
}

function MobileHome() {
  return (
    <div className='py-6 mt-14 sm:mt-0'>
    <div className="text-lightText display flex items-center text-center flex-col gap-2 sm:gap-4 justify-center p-8 bg-darkBg w-full " >
    <Image src="/image/profile.jpeg" width={200} height={200} alt="profile" className="rounded-full" />
      <h1 className="text-xl font-bold mb-4">Hello, I&apos;m Fatima Oluwalogbon.</h1>
      <p className="text-lightText max-w-md">
        I&apos;m a <span className="text-subtleText text-sm"> Frontend Engineer </span> dedicated to building engaging <span className="text-subtleText"> websites and mobile interfaces. </span> I focus on solving <span className="text-subtleText">problems </span> through frontend technology and am passionate about <span className="text-subtleText"> user experience, accessibility, design engineering, web animations, and emerging fields like web3.</span>
      </p>
    </div>
    <Footer />
  </div>
  );
}