import React from 'react'
import NavBar from './NavBar'
import { Hero } from './Hero'
import { BrandLogo } from './BrandLogo'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Testimonial } from './Testimonial'
import { Footer } from './Footer'


export const Homepage = () => {
    return (
        <div className='no-scrollbar' >
            <NavBar />
            <Hero />
            <BrandLogo />
            <Skills />
            <Projects />
            <Testimonial />
            <Footer />
        </div>
    )
}
