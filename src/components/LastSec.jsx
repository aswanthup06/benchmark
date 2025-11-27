import React from "react";
import TelegramIcon from "@/components/Icons/TelegramIcon";


export default function LastSec() {
  return (
    <div className="w-full mx-auto  mb-32">
      <div className="flex gap-8 justify-center">
        <div className=" bg-[url('/images/lastone.png')] bg-cover bg-center bg-no-repeat w-[573px] h-[248px] rounded-2xl p-6">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold mb-1">
                Ready for your Vacation?
              </h2>
              <p className="text-white text-sm font-light">
                our travel experts can help you
              </p>
              <p className="text-white text-sm font-light"> book now!</p>
            </div>
            <div className="flex gap-3 items-center">
              <button className="bg-[#FFC107] h-12 px-6 text-white rounded-md">
                Quick Enquiry
              </button>
              <div>
                <h3 className="text-white text-sm font-light">
                  Speak to our experts
                </h3>
                <h2 className="text-[#FFC107] text-2xl font-bold">
                  0 80408 44000
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[url('/images/lasttwo.png')] bg-cover bg-center bg-no-repeat w-[573px] h-[248px] rounded-2xl p-6">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold mb-1">
                To Get Our Latest offers
              </h2>
              <p className="text-white text-sm font-light">
               As our very name suggests – “Benchmark” means
              </p>
              <p className="text-white text-sm font-light"> “Standards”. Our team is dedicated </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="h-12">
                   <input className="bg-white h-full rounded-sm" type="text" />
              </div>
              <button className="bg-[#FFC107] h-12 w-12 flex items-center justify-center text-white rounded-sm">
                <TelegramIcon className="w-6 h-6 text-white" />

              </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
