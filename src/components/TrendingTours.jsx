import React from 'react'

export default function TrendingTours() {
  return (

    <div className='px-4 sm:px-6 md:px-8 lg:px-28 mb-32'>
   
     <div className="w-full flex flex-col gap-4 items-center justify-center  mb-24">
      <h1 className='text-4xl font-bold'>TrendingTours</h1>
      <p className='w-[80%] md:w-[60%] lg:w-[30%] text-center text-md'>Check out our Weekends getaway Packages – ideal for anyone looking to have a quick holiday !</p>
    </div>

   <div className='flex flex-col md:flex-row justify-between'>
    <div>
      <img src="images/left.png" alt="" />
    </div>
    <div>


<div className="relative">

 
  <div className="w-full lg:w-[427px] h-[257px] relative">
    <img
      className="w-full h-full object-cover rounded-xl"
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      alt="Maldives"
    />
    <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
      Maldives
    </div>
  </div>

 

<div className=' md:absolute md:left-[-200px] md:top-1/2 md:-translate-y-1/2  mt-6'>

  <div className="w-full md:w-[427px] h-[257px] relative">
    <img
      className="w-full h-full object-cover rounded-xl"
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
      alt="Switzerland"
    />
    <div className="absolute  bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
      Switzerland
    </div>
  </div>
</div>

  <div className="w-full lg:w-[427px] h-[257px]  mt-6 relative">
    <img
      className="w-full h-full object-cover rounded-xl"
      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
      alt="Bali"
    />
    <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
      Bali, Indonesia
    </div>
  </div>

</div>



    </div>
   </div>


</div>






  )
}
