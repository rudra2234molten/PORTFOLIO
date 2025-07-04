import React from 'react'
import photo from '/src/assets/profile.png'
import { IoHome } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";


const NavLinks = [{ icon: <IoHome />, title: 'HOME', path: 'home' }, { icon: <FaUserGraduate />, title: 'ABOUT', path: 'about' }, { icon: <FaComputer />, title: 'PROJECTS', path: 'projects' }, { icon: <TbMailFilled />, title: 'CONTACT', path: 'contact' }]

const NavBar = () => {
  return (
    <>
      <nav className='sm:h-screen sm:w-36 sm:bg-[#2c2c2c] fixed h-15 w-full bg-black/70 z-1 flex sm:flex-col sm:text-[1rem] text-[0.9rem] font-semibold sm:font-normal'>
        <div className='hidden sm:block'>
          <a href="#"><img className='contrast-70 brightness-150' src={photo} alt="" /></a>
        </div>
        <ul className='flex sm:gap-0 sm:flex-col items-center justify-center w-full'>
          {NavLinks.map((links, index) => (
            <li className={`sm:w-full cursor-pointer sm:py-4 transition-all duration-300 ${index === 0 ? 'sm:bg-black sm:text-white sm:hover:text-black sm:hover:bg-[#CCCCCC]' : 'sm:hover:bg-black sm:text-white'} text-white hover:bg-[#CCCCCC] hover:text-white px-4.5 h-full content-center`} key={index}><a className='sm:flex sm:flex-col sm:justify-center sm:items-center' href={`#${links.path}`}>
              <span className='text-5xl sm:block hidden'>{links.icon}</span>
              <small className='py-2'>{links.title}</small>
            </a></li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavBar