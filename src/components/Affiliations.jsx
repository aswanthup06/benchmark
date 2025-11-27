import React from "react";
import Image from "next/image";

export default function Affiliations() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16  mb-32">
      <div className="w-full flex flex-col gap-4 items-center justify-center mb-20">
        <h1 className="text-4xl font-bold">Our Affiliations</h1>
        <p className="w-[30%] text-center text-md">
          Check out our Weekends getaway Packages – ideal for anyone looking to
          have a quick holiday !
        </p>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="bg-white rounded-md h-[100px] flex justify-center hover:shadow-md duration-500 p-2 border border-slate-200">
          <img
            src="/images/company1.jpg"
            alt="Hero image"
            className="rounded-lg h-full w-auto"
          />
        </div>
        <div className="bg-white rounded-md h-[100px] flex justify-center hover:shadow-md duration-500 p-2 border border-slate-200">
          <img
            src="/images/company2.jpg"
            alt="Hero image"
            className="rounded-lg h-full w-auto"
          />
        </div>
        <div className="bg-white rounded-md h-[100px] flex justify-center hover:shadow-md duration-500 p-2 border border-slate-200">
          <img
            src="/images/company3.jpg"
            alt="Hero image"
            className="rounded-lg h-full w-auto"
          />
        </div>
        <div className="bg-white rounded-md h-[100px] flex justify-center hover:shadow-md duration-500 p-2 border border-slate-200">
          <img
            src="/images/company4.jpg"
            alt="Hero image"
            className="rounded-lg h-full w-auto"
          />
        </div>
        <div className="bg-white rounded-md h-[100px] flex justify-center hover:shadow-md duration-500 p-2 border border-slate-200">
          <img
            src="/images/company5.jpg"
            alt="Hero image"
            className="rounded-lg h-full w-auto"
          />
        </div>
      </div>
    </div>
  );
}
