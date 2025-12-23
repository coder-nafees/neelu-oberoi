"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-16 sm:pt-20 pb-8 sm:pb-12 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Image */}
        <div
          className={`relative rounded-lg overflow-hidden shadow-2xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #E8DCC4 0%, #D4C5A9 50%, #C4B5A0 100%)",
            minHeight: "400px",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          {/* Hero Content - Image Placeholder */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="text-center text-white">
              {/* This would be your actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-[#B8A88F] via-[#9D8B78] to-[#7A6A5A] opacity-60"></div>
              </div>

              {/* Model silhouette effect */}
              <div className="relative z-10">
                <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-96 mx-auto bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 right-6 flex items-center space-x-2 z-20">
            <button className="w-2 h-2 rounded-full bg-white/60 hover:bg-white transition-colors duration-300"></button>
            <button className="w-2 h-2 rounded-full bg-white hover:bg-white transition-colors duration-300"></button>
            <button className="w-2 h-2 rounded-full bg-white/60 hover:bg-white transition-colors duration-300"></button>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`mt-8 text-center transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="group relative inline-flex items-center px-8 py-3 sm:px-10 sm:py-4 bg-transparent border-2 border-[#8B6F47] text-[#8B6F47] rounded-full overflow-hidden transition-all duration-500 hover:scale-105">
            <span className="absolute inset-0 bg-[#8B6F47] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="relative text-sm sm:text-base tracking-widest uppercase font-light group-hover:text-white transition-colors duration-500">
              Book an Appointment
            </span>
            <svg
              className="relative ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
