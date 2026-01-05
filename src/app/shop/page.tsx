"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menImage from "../../../public/men.png"
import womenImage from "../../../public/women.png"

const ShopPage = () => {
  return (
    <div className="bg-gradient-to-br mt-28 from-neutral-50 via-stone-50 to-amber-50/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Men Section */}
          <Link href="/shop/men" className="group relative block overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="aspect-[4/5] w-full">
              <Image
                src={menImage}
                alt="Men's Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-6xl font-light text-white tracking-wide">Men</h2>
              </div>
            </div>
          </Link>

          {/* Women Section */}
          <Link href="/shop/women" className="group relative block overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="aspect-[4/5] w-full">
              <Image
                src={womenImage}
                alt="Women's Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-6xl font-light text-white tracking-wide">Women</h2>
              </div>
            </div>
          </Link>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;