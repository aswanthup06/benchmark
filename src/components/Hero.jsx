import React from "react";
import Navbar from "./Navbar";
import LocationIcon from "@/components/Icons/LocationIcon";
import LandmarkIcon from "@/components/Icons/LandmarkIcon";
import CalendarIcon from "@/components/Icons/CalendarIcon";



export default function Hero() {
  return (
    <div className="mb-32">
      <div className="h-fit pb-6 md:h-[800px] bg-[url('/images/hero1.jpg')] bg-cover bg-center bg-no-repeat">
        <Navbar />

        <div className="flex flex-col md:flex-row justify-between mt-24 gap-8 px-4 sm:px-6 md:px-8 lg:px-28">
          <div className="flex flex-col justify-between">
            <div className="relative">
              <div className="relative  z-20">
                <h5 className="text-[#FFC107] text-center md:text-left">
                  YOUR DREAM DESTINATION NOW REALITY
                </h5>
                <h1 className="text-5xl lg-text-6xl font-bold text-white text-center md:text-left">
                  Travel Now And
                </h1>
                <h1 className="text-5xl lg-text-6xl font-bold text-white text-center md:text-left">Pay Later</h1>

                <div className="flex justify-center md:justify-start">

                <h3 className="text-white bg-[#FFC107] p-2 px-4 w-fit rounded-sm text-sm mt-6 text-center md:text-left">
                  Enjoy 0% EMI And No Down Payment Up To 1 Year
                </h3>
</div>

              </div>
              <div className="absolute top-0 z-10">
                <img
                  className="w-[550px] h-auto"
                  src="/images/dot.png"
                  alt=""
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg text-white mb-4 mt-6 text-center md:text-left">
                Choose the best fit for you
              </h3>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <button className="bg-white py-3 px-6 rounded-md text-sm w-[120px]">
                  1 Lakhs
                </button>
                <button className="bg-white py-3 px-6 rounded-md text-sm w-[120px]">
                  1.2 Lakhs
                </button>
                <button className="bg-white py-3 px-6 rounded-md text-sm w-[120px]">
                  1.5 Lakhs
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-2xl w-full md:max-w-[420px] lg:max-w-[488px]">
              <h3 className=" mb-4 font-medium text-lg">
                Search your Dream Holiday
              </h3>

              <div className="flex flex-col gap-6">
     <div className="relative group">
  <LocationIcon
    className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 
               text-gray-400 
               group-focus-within:text-[#FFC107] 
               duration-300"
  />

  <input
    type="text"
    placeholder="Enter your name"
    className="
      text-sm font-light
      bg-[#F2F2F2]
      w-full h-12
      pl-10 pr-3
      border border-[#F2F2F2]
      focus:outline-none
      focus:border-[#FFC107]
      focus:ring-0
      rounded-md
      placeholder:text-gray-500
      duration-500
    "
  />
</div>


                <div className="grid grid-cols-2 gap-6">
                      <div className="relative group">
  <CalendarIcon
    className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 
               text-gray-400 
               group-focus-within:text-[#FFC107] 
               duration-300"
  />

  <input
    type="text"
    placeholder="No of Days (Min)"
    className="
      text-sm font-light
      bg-[#F2F2F2]
      w-full h-12
      pl-10 pr-3
      border border-[#F2F2F2]
      focus:outline-none
      focus:border-[#FFC107]
      focus:ring-0
      rounded-md
      placeholder:text-gray-500
      duration-500
    "
  />
</div>
                       <div className="relative group">
  <CalendarIcon
    className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 
               text-gray-400 
               group-focus-within:text-[#FFC107] 
               duration-300"
  />

  <input
    type="text"
    placeholder="No of Days (Max)"
    className="
      text-sm font-light
      bg-[#F2F2F2]
      w-full h-12
      pl-10 pr-3
      border border-[#F2F2F2]
      focus:outline-none
      focus:border-[#FFC107]
      focus:ring-0
      rounded-md
      placeholder:text-gray-500
      duration-500
    "
  />
</div>
                </div>
                  <div className="relative group">
  <CalendarIcon
    className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 
               text-gray-400 
               group-focus-within:text-[#FFC107] 
               duration-300"
  />

  <input
    type="text"
    placeholder="Date"
    className="
      text-sm font-light
      bg-[#F2F2F2]
      w-full h-12
      pl-10 pr-3
      border border-[#F2F2F2]
      focus:outline-none
      focus:border-[#FFC107]
      focus:ring-0
      rounded-md
      placeholder:text-gray-500
      duration-500
    "
  />
</div>
                    <div className="relative group">
  <LandmarkIcon
    className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 
               text-gray-400 
               group-focus-within:text-[#FFC107] 
               duration-300"
  />

  <input
    type="text"
    placeholder="All Category Type"
    className="
      text-sm font-light
      bg-[#F2F2F2]
      w-full h-12
      pl-10 pr-3
      border border-[#F2F2F2]
      focus:outline-none
      focus:border-[#FFC107]
      focus:ring-0
      rounded-md
      placeholder:text-gray-500
      duration-500
    "
  />
</div>

                <button className="bg-[#FFC107] w-full text-white h-12 rounded-md">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
