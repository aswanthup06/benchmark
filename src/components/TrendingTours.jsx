import React from "react";

export default function TrendingTours() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-28 mb-14 md:mb-24 lg:mb-32">
      <div className="w-full flex flex-col gap-4 items-center justify-center mb-12 md:mb-24">
        <h1 className="text-4xl font-bold">TrendingTours</h1>
        <p className="w-[80%] md:w-[60%] lg:w-[30%] text-center text-md">
          Check out our Weekends getaway Packages – ideal for anyone looking to
          have a quick holiday !
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className="flex items-center  justify-center ">
          <img
            className="h-[300px] md:h-[400px] w-auto"
            src="images/left.png"
            alt=""
          />
        </div>

        <div className="flex items-center md:justify-end lg:justify-center">
          <div className="relative  flex-col w-full lg:w-fit md:flex-row flex justify-end lg:flex-col gap-6 h-fit">
            <div className="w-full lg:w-[350px] h-[190px] relative">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1709154958618-8d6b27b598bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Maldives"
              />
              <div
                style={{ fontWeight: 500 }}
                className="absolute top-4 right-0 bg-white text-black px-3 py-2 rounded-l-md text-sm"
              >
                Luxury Cruise
              </div>
            </div>

            <div className="img-ab z-10 w-full lg:absolute md:left-[-100px] lg:left-[-150px] lg:top-1/2 lg:-translate-y-1/2 lg:mt-0">
              <div className="w-full lg:w-[350px] h-[190px] relative">
                <img
                  className="w-full  h-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1560935044-1f25ce5380e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Switzerland"
                />
                <div
                  style={{ fontWeight: 500 }}
                  className="absolute  bottom-4 left-0 bg-white text-black px-3 py-2 rounded-r-md text-sm"
                >
                  Japan Blossom
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[350px] h-[190px] relative">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
                alt="Bali"
              />
              <div
                style={{ fontWeight: 500 }}
                className="absolute bottom-4 right-0 bg-white text-black px-3 py-2 rounded-l-md text-sm"
              >
                Rare Scandinavia
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
