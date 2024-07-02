import React from 'react'
import { BsGoogle } from 'react-icons/bs'
import { DiApple } from 'react-icons/di'
import { SiAdidas, SiNike, SiSamsung } from 'react-icons/si'

export const BrandLogo = () => {
    return (
            <div className='flex  lg:mt-6 mt-9 flex-wrap justify-center items-center bg-white text-black'>
                <div className=' font-EpilogueRegular lg:w-[20%]  font-bold text-xl flex justify-center'><BsGoogle />oogle</div>
                <SiNike size={80} className=' hover:text-gray-900 w-[33.33%] lg:w-[20%] ' />
                <SiSamsung size={80} className=' hover:text-gray-900 w-[33.33%] lg:w-[20%] ' />
                <DiApple size={50} className=' hover:text-gray-900 w-[33.33%] lg:w-[20%] ' />
                <SiAdidas size={60} className=' hover:text-gray-900 w-[33.33%] lg:w-[20%]  ' />
            </div>
    )
}
