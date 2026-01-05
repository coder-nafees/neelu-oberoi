import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import girlImage from "../../../public/NEELU OBEROI2298.png";
import videoImage from "../../../public/video_image.png";
import BookingDialog from "@/components/BookingDialog";
import Link from "next/link";

export default function CoutureComponent() {
  return (
    <div className="container mx-auto">
      <div className=" bg-white flex items-center justify-center p-8 mt-32">
        <div className="w-full bg-gray-50 rounded-lg shadow-sm p-12 flex items-center gap-16">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-80 rounded-3xl overflow-hidden border-4 border-blue-500">
                <Image
                  src={girlImage}
                  alt="Smiling woman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl font-serif text-amber-900 mb-6">
              The Design Process
            </h1>

            <p className="text-gray-600 text-sm leading-relaxed mb-8 uppercase tracking-wide">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>

            {/* Book Appointment Button */}
            <div className="flex justify-center mt-2">
             <BookingDialog />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <Link href="/shop" className="group relative px-8 py-4 bg-[#E4D9C5] hover:bg-[#B8985E] text-[#885730] rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
          <span className="flex items-center gap-3 font-medium tracking-wide">
            Exclusive
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
        </Link>
      </div>
      <Image
        src={videoImage}
        alt="Smiling woman"
        className="w-full h-full mt-8 object-cover"
      />
    </div>
  );
}
