import React from "react";

export default function LastSec() {
  return (
    <div className="w-full mx-auto  mb-32">
      <div className="flex gap-8 justify-center">
       
       
        <div className="relative bg-[url('/images/hero1.jpg')] bg-cover bg-center bg-no-repeat w-[573px] h-[248px] rounded-2xl p-6">

  {/* CONTENT */}
  <div className="relative z-20 h-full flex flex-col justify-between">
    <div>
      <h2 className="text-white text-2xl font-bold">
        Ready for your Vacation?
      </h2>
      <p className="text-white">our travel experts can help you</p>
      <p className="text-white"> book now!</p>
    </div>
    <div className="flex gap-2 items-center">
      <button className="bg-[#FFC107] py-4 px-6 text-white rounded-md">
        Quick Enquiry
      </button>
      <div>
        <h3 className="text-white">Speak to our experts</h3>
        <h2 className="text-[#FFC107] text-2xl font-bold">
          0 80408 44000
        </h2>
      </div>
    </div>
  </div>

  {/* ✅ Progressive Blur Overlay */}
  <div
    className="absolute z-10 inset-0 rounded-2xl w-[300px]
    backdrop-blur-2xl bg-gradient-to-r from-white/70 via-white/30 to-transparent"
  ></div>

</div>


        <div className="bg-black/20 w-[573px] h-[248px] rounded-2xl "></div>
      </div>
    </div>
  );
}
