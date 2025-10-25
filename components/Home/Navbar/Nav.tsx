import React from 'react'
import { FaCode } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-10000 fixed w-full'>
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            {/* logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='w-5 h-5 text-black' />
                </div>
                <h1 className='text-white text-2xl hidden sm:block md:text-2xl font-bold'>Mark</h1>
            </div>
        </div>
    </div>
  )
}

export default Nav
