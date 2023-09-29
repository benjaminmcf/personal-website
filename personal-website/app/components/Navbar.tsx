"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">Your Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link href="#" className='text-white'>Home</Link>
          <Link href="/about" className='text-white'>About</Link>
          <Link href="/blog" className='text-white'>Blog</Link>
          <a href="/blog" className="text-white">Blog</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
        </div>
        <div className="md:hidden">
          <button
            className="text-white text-xl"
            onClick={toggleNavbar}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 items-center mt-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Blog</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;