import React from 'react'

export const ContactUs = () => {
  return (
    <div className=' pt-10 lg:pl-5 gap-5 font-EpilogueRegular flex flex-col w-[100%] lg:w-[40%]'>
        <input className='h-12 bg-[#F3F3F3] placeholder-black px-4 focus:outline-none' type="text" placeholder='Name' />
        <input className='h-12 bg-[#F3F3F3] placeholder-black px-4 focus:outline-none' type="email" placeholder='Email' />
        <p className='bg-black text-white lg:py-4 lg:px-7 lg:w-2/6 lg:text-xl text-lg w-2/4 py-3 text-center'>Submit</p>
    </div>
  )
}
