'use client';

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "../../public/NEELU OBEROI2118.png";
import image2 from "../../public/NEELU OBEROI2236.png";
import image3 from "../../public/NEELU OBEROI2288.png";

const collections = [
  {
    id: 1,
    title: 'Red Embroidered Lehenga',
    description: 'Intricate embroidery with traditional motifs',
    image: image1,
  },
  {
    id: 2,
    title: 'Pink Draped Saree',
    description: 'Contemporary draping with elegant styling',
    image: image2,
  },
  {
    id: 3,
    title: 'Ivory Peplum Set',
    description: 'Modern silhouette with classic embellishments',
    image: image3,
  }
];

export default function CollectionGrid() {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Carousel - visible on small screens */}
        <div className="block lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {collections.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="p-1">
                    <Card className="border-0 shadow-lg overflow-hidden rounded-2xl bg-[#E8DCC4]">
                      <CardContent className="p-0">
                        <div className="relative aspect-[3/4] w-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 h-10 w-10 bg-white/80 backdrop-blur-sm hover:bg-white border-0 shadow-md" />
            <CarouselNext className="right-3 h-10 w-10 bg-white/80 backdrop-blur-sm hover:bg-white border-0 shadow-md" />
          </Carousel>
        </div>

        {/* Desktop Grid - visible on large screens */}
        <div className="hidden lg:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {collections.map((item, index) => (
                <CarouselItem key={item.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div
                    className="group relative"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                    }}
                  >
                   
                        <div className="relative aspect-[3/4] w-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            priority={index === 0}
                          />
                        </div>
                     
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 h-10 w-10 bg-white/80 backdrop-blur-sm hover:bg-white border-0 shadow-md" />
            <CarouselNext className="right-3 h-10 w-10 bg-white/80 backdrop-blur-sm hover:bg-white border-0 shadow-md" />
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}