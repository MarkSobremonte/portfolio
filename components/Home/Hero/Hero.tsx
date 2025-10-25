'use client'
import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-black overflow-hidden flex-col'>
      <div className='relative z-10 flex flex-col items-center'>
        <Image 
        src="/images/s1.jpg" 
        alt="heroimage" 
        width={200}
        height={150}
        className="rounded-full border-5 border-[#000000]"/> 
      </div>
    </div>
  );
};

export default Hero
