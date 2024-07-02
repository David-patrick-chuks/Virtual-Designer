import React from 'react'
import HeroImage from "../../assets/images/HeaderImage.svg"
export const Hero = () => {
    return (
        <div className='font-EpilogueRegular lg:flex lg:py-11 px-4 lg:px-20 py-3 lg:justify-between '>
            <div className='flex flex-col lg:gap-7 gap-4 mt-5 mb-16 lg:mb-0'>
                <p className='font-bold lg:text-xl'>Branding | Image making </p>
                <p className='text-[75px] leading-[1.2] lg:text-7xl font-EpilogueMedium font-bold '>Visual Designer</p>
                <p className=' w-full lg:text-[22px] lg:w-3/4 text-[20px]'>This is a template Figma file, turned into code using Anima.
                    Learn more at AnimaApp.com</p>
                <p className='w-5/12 py-3 mt-4 lg:w-1/5 text-center px-4 lg:py-4 text-white bg-[#000000]'>Contact</p>
            </div>
            <img src={HeroImage} alt="Hero Image" />
        </div>
    )
}
