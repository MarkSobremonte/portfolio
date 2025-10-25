'use client'
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './ParticleBackground';

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-black overflow-hidden flex-col'>

      <ParticlesHero/>

      <div className='relative z-10 flex flex-col items-center'>
        <Image 
        src="/images/s1.jpg" 
        alt="heroimage" 
        width={120}
        height={150}
        className="rounded-full border-3 border-[#242121cd]"/> 
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
          Developing web products,<br/>brands
          <span className='text-blue-500'> and experiences.</span>
        </h1>
        <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
          Hi! I&apos;m Mark - A Passionate
          <span className='text-blue-500 font-bold'>
            <Typewriter options={{
              strings:[
                'Web Developer',
                'Software Developer'
              ],
              autoStart:true,
              loop:true,
              delay:75,
              deleteSpeed:50,
              wrapperClassName:'pl-2',
            }}/>
          </span>
        </h2>
        <button className='mt-6 px-10 py-4 bg-blue-500 hover:bg-blue-600 transition-all duration-300
        cursor-pointer rounded-full text-lg font-medium text-white'>
          <span>See my work</span>
          <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
        </button>
      </div>
    </div>
  );
};

export default Hero
