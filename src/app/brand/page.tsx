import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import girlImage from "../../../public/brand_girl.png";
import BookingDialog from "@/components/BookingDialog";

export default function BrandComponent() {
  return (
    <div className=" bg-white flex items-center justify-center p-8 mt-32">
      <div className="container w-full bg-gray-50 rounded-lg shadow-sm p-12 flex items-center gap-16">
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
          <h1 className="text-4xl font-serif text-amber-900 mb-6">The Brand</h1>

          <p className="text-gray-600 text-sm leading-relaxed mb-8 uppercase tracking-wide">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque.
          </p>

          {/* CTA Button */}
          <div className="flex justify-start mt-2">
            <BookingDialog />
          </div>
        </div>
      </div>
    </div>
  );
}
