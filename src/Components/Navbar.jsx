import React from 'react'
import { useState } from 'react'
// import {HiMenu} from "@heroicons/react/outline"
import {HiMenu, HiX} from "react-icons/hi"
export const Navbar = () => {
    const [nav , dropNav] = useState(false);
    const handleClick =()=> dropNav(!nav);

  return (
    <div className='w-screeen h-[80px] z-10 bg-teal-700 drop-shadow-lg'>
        <div className='px-2 w-full h-full flex justify-between'>
            <div className='flex items-center'>
                <h1 className='text-white text-xl font-bold text-center my-6 mr-2 '> IrriManager. </h1>
                <ul className='hidden pl-8 md:flex'>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
            <div className='hidden md:flex items-center justify-end pr-8' >
                <button className='h-12  p-1 px-4 text-slate-900 font-bold border border-white  bg-slate-300  hover:bg-transparent hover:text-white   rounded-md'> 
                Get started </button>

            </div>

          <div className='md:hidden ' onClick={handleClick}>
            { !nav ? <HiMenu className='my-6 w-12 h-7 fill-white hover:cursor-pointer'/> : <HiX className='my-6 w-12 h-7 fill-white hover:cursor-pointer'/> }
          

          </div>
            

        </div>
   
    <ul className={!nav ? 'hidden':'absolute bg-teal-700 w-full px-8'}>
      <li className='border-b-2 border-teal-300 w-full'>Home</li>
      <li className='border-b-2 border-teal-300 w-full'>About</li>
      <div className='flex flex-col mr-3'>
    <button className=' mb-4 mt-4 h-12 py-3  p-1 px-4 text-slate-900 font-bold border border-white  bg-slate-300  hover:bg-transparent hover:text-white   rounded-md'> 
                Get started </button>

    </div>
    </ul>
    
    </div>
  )
}
