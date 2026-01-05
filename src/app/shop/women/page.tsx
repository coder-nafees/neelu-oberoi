"use client";
import React from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string; // You can import and use your images
}

const WomenPage = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "RED EMBRACE LEHENGA...",
      price: 90000,
      image: "/womenOne.png",
    },
    {
      id: "2",
      name: "RED EMBRACE LEHENGA...",
      price: 90000,
      image: "/womenTwo.png", // Replace with your image path
    },
    {
      id: "3",
      name: "RED EMBRACE LEHENGA...",
      price: 90000,
      image: "/womenThree.png", // Replace with your image path
    },
  ];

  return (
    <div className="bg-white container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mt-40">
        <div className="mx-auto">
          <h1
            className="text-4xl sm:text-5xl font-light text-center tracking-wider text-neutral-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            WOMEN
          </h1>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-sm tracking-wide text-neutral-700 hover:text-neutral-900 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              SHOW FILTERS
            </button>
            <button className="flex items-center gap-2 text-sm tracking-wide text-neutral-700 hover:text-neutral-900 transition-colors">
              SHORT BY
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Product Card */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-100 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Gradient Overlay with Info */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                  <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
                    {/* Product Name */}
                    <h3 className="text-white text-base font-medium tracking-wide mb-1 uppercase">
                      {product.name}
                    </h3>
                    
                    {/* Price */}
                    <p className="text-white/90 text-sm mb-4">
                      (INR) ₹{product.price.toLocaleString()}
                    </p>

                    {/* Buy Now Button */}
                    <button className="w-full bg-[#C4A57B] hover:bg-[#B8985E] text-white py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default WomenPage;