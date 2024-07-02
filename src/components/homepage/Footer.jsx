import React from 'react'
import { ContactUs } from './ContactUs'
import { FaBehance, FaDiscord, FaFacebook, FaInstagram } from 'react-icons/fa6'
import { FaDribbble } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='flex w-full lg:flex-row flex-col justify-between px-10 py-10 items-start'>
            <div className='lg:w-[50%] font-EpilogueMedium'>
                <p className='mb-6 font-bold text-2xl lg:text-4xl'>Lets work together</p>
                <p className='lg:text-lg text-lg font-EpilogueRegular'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <span className=' mt-5 flex gap-9 items-center text-2xl'>
                    <FaDiscord />
                    <FaFacebook />
                    <FaDribbble />
                    <FaInstagram />
                    <FaBehance />
                </span>
            </div>
            <ContactUs />
        </div>
    )
}
