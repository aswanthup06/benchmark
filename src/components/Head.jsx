"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black py-4">
      <div className="text-white  flex gap-8 ">
        <div className="flex">
          <div></div>
          <h2>enquiry@benchmarkilt.com</h2>
        </div>

          <div className="flex">
          <div></div>
          <h2>+91 8040 844 000</h2>
        </div>
      </div>
      <div className="flex gap-8 ">
        <h3 className="text-white font-light">About Us</h3>
        <h3 className="text-white font-light">Gift Cards</h3>
        <h3 className="text-white font-light">Blogs</h3>
        <h3 className="text-white font-light">Contact Us</h3>
      </div>
    </div>
  );
}
