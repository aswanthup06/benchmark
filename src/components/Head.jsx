"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black py-4">
      <div className="text-white  flex gap-8 ">
        <div className="flex">
          <div></div>
          <h2 className="font-light text-[14px]">enquiry@benchmarkilt.com</h2>
        </div>

        <div className="flex ">
          <div></div>
          <h2 className="font-light text-[14px]">+91 8040 844 000</h2>
        </div>
      </div>
      <div className="flex gap-8 ">
        <h3 className="text-white font-light text-[14px]">About Us</h3>
        <h3 className="text-white font-light text-[14px]">Gift Cards</h3>
        <h3 className="text-white font-light text-[14px]">Blogs</h3>
        <h3 className="text-white font-light text-[14px]">Contact Us</h3>
      </div>
    </div>
  );
}
