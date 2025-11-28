'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-black py-4 relative">
      <div className="px-4 sm:px-6 md:px-8 lg:px-28 flex justify-between items-center">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img className="rounded-full w-12 h-12" src="images/logoB.png" alt="" />
          <div>
            <h1 className="text-xl font-bold">BENCHMARK</h1>
            <h5 className="text-xs">Incentive & Leisure Travels</h5>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/services" className="hover:text-gray-400">Services</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Desktop Enquiry Button */}
        <button  style={{ fontWeight:400 }} className="hidden md:block text-white bg-[#FFC107] hover:bg-amber-500 font-light text-sm duration-500 cursor-pointer rounded-md px-6 h-12">
          Quick Enquiry
        </button>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl z-50"
        >
          ☰
        </button>
      </div>

      {/* ✅ Right Sliding Mobile Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full justify-between">

          {/* Menu Links */}
          <ul className="flex flex-col gap-6 text-black text-lg">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>

          {/* ✅ Enquiry Button in Panel */}
          <button className="w-full h-12 mt-10 bg-[#FFC107] hover:bg-amber-500 text-white rounded-md text-sm font-medium transition">
            Quick Enquiry
          </button>
        </div>
      </div>
    </nav>
  );
}
