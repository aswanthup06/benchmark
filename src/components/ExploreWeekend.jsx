import React from "react";

export default function ExploreWeekend() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-28  mb-14 md:mb-24 lg:mb-32">
      <div className="mb-12 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Explore Weekend Getaways</h1>
        <p className="max-w-md text-center text-md">
          Check out our Weekends getaway Packages – ideal for anyone looking to
          have a quick holiday!
        </p>
      </div>


      <div className="flex justify-end">
   <button  style={{ fontWeight:350 }} className="mb-8 bg-[#FFC107] hover:bg-amber-500  text-sm duration-500 h-12 px-6 text-white rounded-md cursor-pointer">
                View More
              </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  w-full">
      
        <div
          className="rounded-2xl bg-cover bg-center h-[260px] md:h-[430px]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        />

       
        <div className="flex flex-col justify-between h-full gap-[30px]">
          <div
            className="h-[200px] w-full rounded-2xl bg-cover bg-center flex items-start p-5"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80)",
            }}
          >
            <span className="text-white font-semibold text-lg drop-shadow-lg">
              Yercaud
            </span>
          </div>

          <div
            className="h-[200px] w-full rounded-2xl bg-cover bg-center flex items-start p-5"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80)",
            }}
          >
            <span className="text-white font-semibold text-lg drop-shadow-lg">
              Chikmagalur
            </span>
          </div>
        </div>

      
        <div className="flex flex-col md:flex-row lg:flex-col justify-between h-full gap-[30px]  md:col-span-2 lg:col-span-1">
          <div
            className="h-[200px] w-full rounded-2xl bg-cover bg-center flex items-start p-5"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80)",
            }}
          >
            <span className="text-white font-semibold text-lg drop-shadow-lg">
              Mahabaleshwar
            </span>
          </div>

          <div
            className="h-[200px] w-full rounded-2xl bg-cover bg-center flex items-start p-5"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80)",
            }}
          >
            <span className="text-white font-semibold text-lg drop-shadow-lg">
              Coorg
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
