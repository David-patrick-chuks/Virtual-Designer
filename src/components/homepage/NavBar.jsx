import React, { useEffect, useState } from 'react'
import { DataBase } from '../../assets/data/DataBase'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const ToggleMenuBtn = () => {
    setMenuOpen(!menuOpen)
  }

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const ScrollEvtFn = () => {
      window.scrollY > 10 ? setSticky(true) : setSticky(false);
    }
    window.addEventListener("scroll", ScrollEvtFn)
    return () => window.removeEventListener("scroll", ScrollEvtFn)
  }, []);

  const NavLinks = [
    { link: 'About' },
    { link: 'Work' },
    { link: 'Contact' },
  ]

  return (
    <>
      <nav className={` sticky top-0 z-20 ${sticky ? "bg-[#ececec] opacity-90 " : ""} bg-white flex lg:py-4 px-4 lg:px-20 py-2 items-center text-black justify-between`}>
        <p className='font-EpilogueRegular text-black font-bold text-lg lg:text-xl '>Logo</p>
        <ul className=' hidden lg:flex lg:gap-x-5 lg:font-EpilogueRegular'>
          {NavLinks.map((nav, id) => (
            <li key={id}> {nav.link}</li>
          ))}
        </ul>
        <button className="lg:hidden" onClick={ToggleMenuBtn}>
          {menuOpen ? <MdClose size={35} color='black' /> : <GiHamburgerMenu color='black' size={30} />}
        </button>
      </nav>
      <div>
        {
          menuOpen && (
            <nav className='lg:hidden bg-black text-white py-5 w-screen fixed border-gray-300 border-t '>
              <ul className='text-[18px] space-y-5 text-center font-EpilogueRegular '>
                {NavLinks.map((nav, id) => (
                  <li key={id}> {nav.link}</li>
                ))}
              </ul>
            </nav>
          )
        }
      </div>

    </>
  )
}

export default NavBar










