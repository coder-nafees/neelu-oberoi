'use client';

import { useState } from 'react';

const collections = [
  {
    id: 1,
    title: 'Red Embroidered Lehenga',
    description: 'Intricate embroidery with traditional motifs',
    color: 'bg-gradient-to-br from-red-400 to-red-600',
    textColor: 'text-red-900'
  },
  {
    id: 2,
    title: 'Pink Draped Saree',
    description: 'Contemporary draping with elegant styling',
    color: 'bg-gradient-to-br from-pink-200 to-pink-300',
    textColor: 'text-pink-900'
  },
  {
    id: 3,
    title: 'Ivory Peplum Set',
    description: 'Modern silhouette with classic embellishments',
    color: 'bg-gradient-to-br from-amber-100 to-pink-200',
    textColor: 'text-amber-900'
  }
];

export default function CollectionGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {collections.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Card Container */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Background with gradient */}
                <div className={`absolute inset-0 ${item.color} transition-transform duration-700 ${
                  hoveredId === item.id ? 'scale-110' : 'scale-100'
                }`}></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <div className={`transform transition-all duration-500 ${
                    hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <p className="text-white/80 text-xs sm:text-sm tracking-wider uppercase mb-2 font-light">
                      {item.description}
                    </p>
                  </div>
                  
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-serif mb-4 transform transition-all duration-500">
                    {item.title}
                  </h3>
                  
                  <button className={`self-start text-white text-sm tracking-wider uppercase border border-white/40 px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform ${
                    hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    View Details
                  </button>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Navigation arrows for mobile */}
              <button 
                className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
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