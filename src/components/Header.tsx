"use client";

import Link from "next/link";
import { useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-[#D4C5A9]/30 shadow-lg">
      <div className="h-8 w-full bg-[#E4D9C5]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link  href="/">
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl font-serif tracking-wide text-[#8B6F47]">
                NEELU OBEROI
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <Link
              href="/brand"
              className="text-sm tracking-widest text-[#6B5842] hover:text-[#8B6F47] transition-colors duration-300 font-light uppercase"
            >
              The Brand
            </Link>
            <Link
              href="/couture"
              className="text-sm tracking-widest text-[#6B5842] hover:text-[#8B6F47] transition-colors duration-300 font-light uppercase"
            >
              Couture
            </Link>
            <Link
              href="/shop"
              className="text-sm tracking-widest text-[#6B5842] hover:text-[#8B6F47] transition-colors duration-300 font-light uppercase"
            >
              Ready To Shop
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              className="text-[#6B5842] hover:text-[#8B6F47] transition-colors duration-300"
              aria-label="Search"
            >
              <BiSearch className="w-5 h-5" />
            </button>
            <button
              className="text-[#6B5842] hover:text-[#8B6F47] transition-colors duration-300"
              aria-label="Account"
            >
              <BiUser className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col space-y-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[#6B5842] transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#6B5842] transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#6B5842] transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-4 border-t border-[#D4C5A9]/30">
            <Link
              href="/brand"
              className="block text-sm tracking-widest text-[#6B5842] hover:text-[#8B6F47] transition-colors duration-300 font-light uppercase"
            >
              The Brand
            </Link>
            <Link
              href="/couture"
              className="block text-sm tracking-widest text-[#6B5842] hover:text-[#8B6F47] transition-colors duration-300 font-light uppercase"
            >
              Couture
            </Link>
            <Link
              href="/shop"
              className="block text-sm tracking-widest text-[#6B5842] hover:text-[#8B6F47] transition-colors duration-300 font-light uppercase"
            >
              Ready to Shop
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
