import React from "react";

export default function WhyBenchmark() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 md:mb-24 lg:mb-32">
      <div>
        <h1 className="font-bold text-2xl mb-4">Why Benchmark Holidays</h1>
        <p className="font-sm">
          As our very name suggests – “Benchmark” means “Standards”. Our team is
          dedicated to ensure all customers receive the best of customer
          service. We provide customer support at all stages of our customer’s
          journey – before, during and after. We cater to all segments of travel
          like Group Tours, Corporate travel, Luxury Travel, Leisure Travel,
          Inbound holidays, Customized Holidays, MICE and also specialty tours
          like Couple’s Only Holidays, Women’s Special, Senior Citizen Packages
          and many more. We offer travel packages around the globe, which are
          tailor made as per customer preferences.
        </p>
      </div>
      <div className="rounded-2xl overflow-hidden">
        <iframe
          width="100%"
          height="330"
          src="https://www.youtube.com/embed/VmeUepgH0zE"
          title="Luxury Cruise Ship Experience | Best Cruise Holidays & Packages in India | Benchmark Holidays"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
