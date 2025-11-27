import React from "react";
import ArrowIcon from "@/components/Icons/ArrowIcon";

export default function Testimonials() {
  return (

    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16  mb-32"> 
    <div className="grid w-full grid-cols-1 md:grid-cols-2 bg-[#FDF2ED] p-12 mt-12 rounded-3xl">
      <div>
        <h4>Guest Experiences</h4>
        <h2 className="font-bold text-2xl">What our Customers Say</h2>
        <h2 className="font-bold text-2xl mb-8">About us</h2>
       
             <button className="bg-[#FFC107] h-12 px-8 text-white rounded-md cursor-pointer">Read More</button>
      </div>

      <div>
        <div></div>

        <div>
          <p>
            Check out our Weekends getaway Packages – ideal for anyone looking
            to have a quick holiday Check out our Weekends getaway Packages –
            ideal for anyone looking to have a quick holiday..
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-6">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div>
              <h2>Arjun Kumar</h2>
              <div className="flex gap-2">

              </div>
            </div>
          </div>

          <div className="flex gap-2">
              <button className="bg-[#FFC107] h-12 w-12 text-white rounded-md flex items-center justify-center cursor-pointer"><ArrowIcon className="w-6 h-6 text-white -scale-x-100" /></button>
              <button className="bg-[#FFC107] h-12 w-12 text-white rounded-md flex items-center justify-center cursor-pointer"> <ArrowIcon className="w-6 h-6 text-white" /></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
