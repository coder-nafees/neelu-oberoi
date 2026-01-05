"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import hero1 from "../../public/hero_image.png";
import hero2 from "../../public/hero_image.png";
import hero3 from "../../public/hero_image.png";
import hero4 from "../../public/hero_image.png";

// Import your images from public folder
// Make sure these images exist in your public folder
const carouselImages = [hero1, hero2, hero3, hero4];

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);

    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle dot click
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Pause auto-play temporarily when user manually changes slide
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  return (
    <section className="relative mt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Carousel */}
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
          {/* Carousel Images */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={100}
                />
              </div>
            ))}
          </div>

          {/* Slide Indicators (Dots) - Bottom Right */}
          <div className="absolute bottom-6 right-6 flex items-center space-x-2 z-20">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-2.5 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Book Appointment Button */}
        <div className="flex justify-center mt-12">
          <button className="group relative px-8 py-4 bg-[#E4D9C5] hover:bg-[#B8985E] text-[#885730] rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
            <span className="flex items-center gap-3 font-medium tracking-wide">
              Book an Appointment
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
