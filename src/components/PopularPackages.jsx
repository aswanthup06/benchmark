import React from "react";
import ArrowIcon from "./Icons/ArrowIcon";

const packages = [
  {
    id: 1,
    location: "Bali",
    title: "Essence of Bali - 5N6D - Group Tour",
    price: "₹ 104,900",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    location: "Dubai",
    title: "Luxury Dubai Escape - 4N5D",
    price: "₹ 89,500",
    image:
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    location: "Maldives",
    title: "Maldives Honeymoon Package - 3N4D",
    price: "₹ 129,000",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    location: "Thailand",
    title: "Amazing Thailand - 6N7D",
    price: "₹ 74,999",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PopularPackages() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-28 mb-14 md:mb-24 lg:mb-32">
      {/* Heading */}
      <div className="flex flex-col gap-4 items-center justify-center mb-10">
        <h1 className="text-4xl font-bold">Popular Packages</h1>
        <p className="max-w-md text-center text-md">
          Check out our Weekend getaway Packages – ideal for anyone looking to
          have a quick holiday!
        </p>
      </div>

           <div className="flex justify-between">
               <button className="mb-8 flex items-center gap-3 bg-black hover:bg-black/90  duration-500 h-12 px-6  rounded-md cursor-pointer">
               
               
               <span  style={{ fontWeight:350 }} className="text-white text-sm">International</span> 

<ArrowIcon className="w-4 h-4 text-yellow-400 rotate-90" />


              </button>
   <button  style={{ fontWeight:350 }} className="mb-8 bg-[#FFC107] hover:bg-amber-500text-sm duration-500 h-12 px-6 text-white rounded-md cursor-pointer">
                View More
              </button>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((item) => (
          <div key={item.id} className="">
            <div className="rounded-xl relative overflow-hidden group mb-4">
              <img
                src={item.image}
                alt={item.location}
                className="rounded-xl w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-4 bg-black/40 text-white px-4 py-1 rounded-md font-light text-sm shadow backdrop-blur-md">
                {item.location}
              </div>
            </div>

            <h2 className="font-medium text-md leading-snug w-[90%] truncate">
              {item.title}
            </h2>

            <h4 className="text-[#FFC107] text-sm">Starting from</h4>

            <h2 className="font-semibold text-2xl">{item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
