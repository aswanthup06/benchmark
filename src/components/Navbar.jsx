'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-black py-4">
      <div className="px-4 sm:px-6 md:px-8 lg:px-28 flex justify-between items-center">

        {/* Logo */}

        <div className='flex gap-2'>

          <img className='rounded-full w-12 h-12' src="images/logoB.png" alt="" />

          <div>
            <h1 className="text-xl font-bold">BENCHMARK</h1>
            <h5 className='text-xs'>Incentive & Leisure Travels </h5>
          </div>

        </div>
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/services" className="hover:text-gray-400">Services</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        <button className='text-white bg-[#FFC107] rounded-md px-6 h-12'>Quick Enquiry</button>

        {/* Mobile Button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-gray-900 p-4 rounded-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
