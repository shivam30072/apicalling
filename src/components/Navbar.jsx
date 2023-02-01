import React from 'react'

const Navbar = () => {
  return (
    <div className='lg:flex lg:justify-between w-full h-[8vh] border-b-2 border-black lg:items-center flex justify-between'>
        <div className='ml-4 sm:w-[10%]'>
            <h1 className='text-2xl font-bold text-blue-500'>logo</h1>
        </div>
        <div className='hidden sm:flex list-none sm:w-[80%] sm:justify-center'>
            <li className='m-3 font-semibold cursor-pointer'>Products</li>
            <li className='m-3 font-semibold cursor-pointer'>Market</li>
            <li className='m-3 font-semibold cursor-pointer'>About us</li>
            <li className='m-3 font-semibold cursor-pointer'>Contact</li>
        </div>
        <div className='mr-4 sm:w-[10%] sm:flex'>
            <button className='border border-black lg:pl-2 lg:pr-2 pt-1 pb-1 mt-1 rounded-2xl bg-blue-300 font-semibold text-white hover:text-black hover:bg-white'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar