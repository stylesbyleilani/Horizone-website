


"use client"

import React, { useState } from 'react'
import { 
  MenuIcon, 
  XIcon 
} from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen)
  }

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "/#rooms", label: "Rooms" },
    { href: "/#service", label: "Facilities" },
    { href: "/#contact", label: "Offers" },

  ];
  const phoneNumber = "07015910621";
  const message = "Hello! I'm interested in booking a room at Horizone Hotel.";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <nav className='fixed w-full  top-0 z-50'
>


      <div className="container mx-auto px-4 py-3   flex justify-between items-center">
        
          <span className='text-lg sm:text-xl font-bold text-neutral-50 tracking-tight'>
            Horizone
          </span>
        

        <ul className='hidden lg:flex space-x-4 xl:space-x-8 font-medium'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className='text-sm xl:text-base text-neutral-50 hover:text-green-50 transition-colors'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block" onClick={handleClick}
        >
          <button
            className='text-sm xl:text-base   px-5 py-3 xl:px-4 xl:py-2 rounded-sm bg-white text-black   transition-colors'
          >
            Contact
          </button>
        </div>

        <div className="lg:hidden">
          <button 
            onClick={toggleNavbar} 
            className='text-neutral-800 focus:outline-none'
          >
            {mobileOpen ? (
              <XIcon className='text--100 w-6 h-6 sm:w-8 sm:h-8' />
            ) : (
              <MenuIcon className='w-6 text-gray-100 h-6 sm:w-8 sm:h-8' />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className='fixed inset-0 bg-[#212222] z-40 lg:hidden overflow-y-auto'>
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <span className='text-xl font-bold text-neutral-100'>Horizone</span>
              <button onClick={toggleNavbar}>
                <XIcon className='text-gray-100 w-8 h-8' />
              </button>
            </div>

            <ul className='space-y-6 text-center'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className='text-lg sm:text-xl text-neutral-100 hover:text-blue-600'
                    onClick={toggleNavbar}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center"onClick={handleClick} >
              <button 
                className=' text-black bg-white px-6 py-3 rounded-md text-lg'
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}