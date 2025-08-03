import React from "react";
import ServiceCard from "../Components/Card/ServiceCard";

const Service = () => {
  return (
    <section id="Service" className="w-full min-h-screen bg-pattern">
      <div className="relative z-10 w-full">
        <header className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-8 sm:pt-12 md:pt-16 lg:pt-20 font-bold text-center font-button text-white">
            Service
          </h1>
        </header>

        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
