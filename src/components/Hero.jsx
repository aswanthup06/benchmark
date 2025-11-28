import React from "react";
import Navbar from "./Navbar";
import LocationIcon from "@/components/Icons/LocationIcon";

export default function Hero() {
  return (
    <div className="mb-32">
      <div className="h-fit pb-6 md:h-[800px] bg-[url('/images/hero1.jpg')] bg-cover bg-center bg-no-repeat">
        <Navbar />

      

        <div className="flex flex-col md:flex-row justify-between mt-24 gap-8 px-4 sm:px-6 md:px-8 lg:px-28">
          <div className="flex flex-col justify-between">
            <div className="relative">
              <div className="relative  z-20">
                <h5 className="text-amber-400">
                  YOUR DREAM DESTINATION NOW REALITY
                </h5>
                <h1 className="text-6xl font-bold text-white">
                  Travel Now And
                </h1>
                <h1 className="text-6xl font-bold text-white">Pay Later</h1>
                <h3 className="text-white bg-amber-400 p-2 px-4 w-fit rounded-sm text-sm mt-6">
                  Enjoy 0% EMI And No Down Payment Up To 1 Year
                </h3>
              </div>
              <div className="absolute top-0 z-10">
                <img className="w-[550px] h-auto" src="/images/dot.png" alt="" />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">
                Choose the best fit for you
              </h3>
              <div className="flex gap-6">
                <button className="bg-white py-3 px-6 rounded-md text-sm">
                  1 Lakhs
                </button>
                <button className="bg-white py-3 px-6 rounded-md text-sm">
                  1.2 Lakhs
                </button>
                <button className="bg-white py-3 px-6 rounded-md text-sm">
                  1.5 Lakhs
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-2xl w-full md:max-w-[488px]">
              <h3 className="text-md font-bold mb-4">
                Search your Dream Holiday
              </h3>

              <div className="flex flex-col gap-6">
                <div className="relative ">
                  <LocationIcon className="w-6 h-6 left-3 absolute top-1/2 -translate-y-1/2" />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
    bg-[#F2F2F2] 
    w-full 
    h-14
    pl-10
    pr-3
    border border-[#F2F2F2] 
    focus:outline-none
    focus:border-orange-500
    focus:ring-0
    rounded-md
    placeholder:text-gray-500
  "
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="relative ">
                    <LocationIcon className="w-6 h-6 left-3 absolute top-1/2 -translate-y-1/2" />

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="
    bg-[#F2F2F2] 
    w-full 
    h-14
    pl-10
    pr-3
    border border-[#F2F2F2] 
    focus:outline-none
    focus:border-orange-500
    focus:ring-0
    rounded-md
    placeholder:text-gray-500
  "
                    />
                  </div>

                  <div className="relative ">
                    <LocationIcon className="w-6 h-6 left-3 absolute top-1/2 -translate-y-1/2" />

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="
    bg-[#F2F2F2] 
    w-full 
    h-14
    pl-10
    pr-3
    border border-[#F2F2F2] 
    focus:outline-none
    focus:border-orange-500
    focus:ring-0
    rounded-md
    placeholder:text-gray-500
  "
                    />
                  </div>
                </div>
                <div className="relative ">
                  <LocationIcon className="w-6 h-6 left-3 absolute top-1/2 -translate-y-1/2" />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
    bg-[#F2F2F2] 
    w-full 
    h-14
    pl-10
    pr-3
    border border-[#F2F2F2] 
    focus:outline-none
    focus:border-orange-500
    focus:ring-0
    rounded-md
    placeholder:text-gray-500
  "
                  />
                </div>

                <div className="relative ">
                  <LocationIcon className="w-6 h-6 left-3 absolute top-1/2 -translate-y-1/2" />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
    bg-[#F2F2F2] 
    w-full 
    h-14
    pl-10
    pr-3
    border border-[#F2F2F2] 
    focus:outline-none
    focus:border-orange-500
    focus:ring-0
    rounded-md
    placeholder:text-gray-500
  "
                  />
                </div>

                <button className="bg-amber-400  w-full text-white h-14 rounded-md">
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
