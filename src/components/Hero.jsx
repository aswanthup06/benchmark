import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div>
      <div className="h-[800px] bg-[url('/images/hero1.jpg')] bg-cover bg-center bg-no-repeat">
        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div>
              <h3 className="font-bold">Choose the best fit for you</h3>
              <div className="flex gap-6">
                <button className="bg-white py-4 px-6 rounded-lg text-sm">
                  1 Lakhs
                </button>
                <button className="bg-white py-4 px-6 rounded-lg text-sm">
                  1.2 Lakhs
                </button>
                <button className="bg-white py-4 px-6 rounded-lg text-sm">
                  1.5 Lakhs
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-md font-bold">Search your Dream Holiday</h3>

              <div>
               <input
  type="text"
  placeholder="Enter your name"
  className="
    bg-[#F2F2F2] 
    w-full 
    h-10 
    px-3
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
  );
}
