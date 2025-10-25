"use client";
import { NavLink } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { BiDownload } from 'react-icons/bi';
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useState } from 'react';

type Props = {
  openNav: () => void;
}

const Nav = ({openNav} :Props) => {
    
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
      const handler=()=>{
        if(window.scrollY >=90) setNavBg(true)
        if(window.scrollY < 90) setNavBg(false)
      };

    window.addEventListener('scroll', handler);

    return()=> window.removeEventListener('scroll', handler);
    }, [])
   
  return (
<div className={`transition-all ${navBg ? 'bg-[#B5B5B5] ':' fixed'} duration-200 h-[12vh] z-10000 fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            {/* logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='w-5 h-5 text-white' />
                </div>
                <h1 className='text-black text-2xl hidden sm:block md:text-2xl font-bold'>Mark</h1>
            </div>
            {/* NavLinks */}
            <div className='hidden lg:flex items-center space-x-10'>
              {NavLink.map((link)=>{
                return <Link key={link.id} href={link.url} className='text-base hover:text-gray-200 text-black
                font-medium transition-all duration-200'>
                <p>{link.label}</p>
                </Link>
              } )}
            </div>
            {/* Buttons */}
            <div className='flex items-center space-x-4'>
              {/* CV button */}
              <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-500 hover:bg-blue-700
              transition-all duration-300 text-white flex items-center space-x-2'>
                <BiDownload className='w-5 h-5'/>
                <span className=''>Download CV</span>
              </button>
              {/* Burger Menu */}
              <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Nav
