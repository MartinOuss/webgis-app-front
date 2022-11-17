import React from 'react'
// import {HiMenu} from "@heroicons/react/outline"
import {HiMenu, HiX} from "react-icons/hi"
export const Navbar = () => {
    
  return (
    <div className='w-screeen h-[80px] z-10 bg-teal-700 drop-shadow-lg'>
        <div className='px-2 w-full h-full flex justify-between'>
            <div className='flex items-center'>
                <h1 className='text-white text-xl font-bold text-center mr-2 '> IrriManager. </h1>
                <ul className='hidden pl-8 md:flex'>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
            <div className='hidden md:flex items-center justify-end pr-8'>
                <button className='h-12  p-1 px-4 text-slate-900 font-bold border border-white  bg-slate-300  hover:bg-transparent hover:text-white   rounded-md'> 
                Sign In </button>

            </div>
          

            <HiMenu className='my-2 w-16 h-7 fill-white hover:cursor-pointer'/>

        </div>
   
    
    </div>
  )
}
