import React from "react";

const companies = [
  "/images/company1.jpg",
  "/images/company2.jpg",
  "/images/company3.jpg",
  "/images/company4.jpg",
  "/images/company5.jpg",
];

export default function Affiliations() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-28 mb-14 md:mb-24 lg:mb-32">
      <div className="w-full flex flex-col gap-4 items-center justify-center mb-20">
        <h1 className="text-4xl font-bold">Our Affiliations</h1>
        <p className="max-w-md text-center text-md">
          Check out our Weekends getaway Packages – ideal for anyone looking to
          have a quick holiday !
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {companies.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded-md h-[100px] flex justify-center hover:shadow-md duration-500 p-2 border border-slate-200"
          >
            <img
              src={logo}
              alt={`Company ${index + 1}`}
              className="rounded-lg h-full w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
