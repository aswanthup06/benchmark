import React from "react";
import TelegramIcon from "@/components/Icons/TelegramIcon";
import MailIcon from "./Icons/MailIcon";


export default function LastSec() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-28  mb-14 md:mb-24 lg:mb-32">
      <div className="flex flex-wrap gap-12 justify-center">
        <div className=" bg-[url('/images/lastone.png')] bg-cover bg-center bg-no-repeat w-[540px] h-[220px] rounded-2xl p-6">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold mb-1">
                Ready for your Vacation?
              </h2>
              <p  style={{ fontWeight:350 }} className="text-white text-sm ">
                our travel experts can help you
              </p>
              <p  style={{ fontWeight:350 }} className="text-white text-sm "> book now!</p>
            </div>
            <div className="flex gap-3 items-center">
              <button  style={{ fontWeight:400 }} className=" bg-[#FFC107] hover:bg-amber-500 text-sm duration-500 h-12 px-6 text-white rounded-md cursor-pointer">
                Quick Enquiry
              </button>
              <div>
                <h3  style={{ fontWeight:350 }} className="text-white text-sm">
                  Speak to our experts
                </h3>
                <h2 className="text-[#FFC107] text-2xl font-bold">
                  0 80408 44000
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('/images/lasttwo.png')] bg-cover bg-center bg-no-repeat w-[540px] h-[220px] rounded-2xl p-6">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold mb-1">
                To Get Our Latest offers
              </h2>
              <p  style={{ fontWeight:350 }} className="text-white text-sm ">
               As our very name suggests – “Benchmark” means
              </p>
              <p  style={{ fontWeight:350 }} className="text-white text-sm "> “Standards”. Our team is dedicated </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="h-12">
                       <div className="relative group">
  <MailIcon
    className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 
               text-gray-400 
               group-focus-within:text-[#FFC107] 
               duration-300"
  />

  <input
  style={{ fontWeight:350 }}
    type="text"
    placeholder="Enter Your Mail"
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
              <button className="bg-[#FFC107] h-12 w-12 flex items-center justify-center text-white hover:bg-amber-500 font-light text-sm duration-500 rounded-sm cursor-pointer">
                <TelegramIcon className="w-6 h-6 text-white" />

              </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
