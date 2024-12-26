import React, { useRef } from 'react';
import { BookOpen, Bookmark, Star, ChevronRight, ChevronLeft } from 'lucide-react';

interface Webtoon {
  id: number;
  title: string;
  readers: number;
  image: string;
  rating?: number;
  genre?: string[];
  latestChapter?: number;
  status?: 'NEW' | 'HOT' | 'UPDATED';
}

const NewRelease = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const webtoons: Webtoon[] = [
    {
      id: 1,
      title: "Solo Levelling",
      readers: 245632,
      image: "/solo1.webp",
      rating: 4.8,
      genre: ["Action", "Fantasy"],
      latestChapter: 234,
      status: "HOT"
    },
    {
      id: 2,
      title: "Solo Levelling Ragnarok",
      readers: 18500,
      image: "/rag2.webp",
      rating: 4.8,
      genre: ["Action", "Fantasy"],
      latestChapter: 234,
      status: "NEW"
    },
    {
      id: 3,
      title: "Solo Levelling Ragnarok",
      readers: 18500,
      image: "/rag2.webp",
      rating: 4.8,
      genre: ["Action", "Fantasy"],
      latestChapter: 234,
      status: "NEW"
    },
    {
      id: 4,
      title: "Solo Levelling Ragnarok",
      readers: 18500,
      image: "/rag2.webp",
      rating: 4.8,
      genre: ["Action", "Fantasy"],
      latestChapter: 234,
      status: "NEW"
    },
    {
      id: 5,
      title: "Solo Levelling Ragnarok",
      readers: 18500,
      image: "/rag2.webp",
      rating: 4.8,
      genre: ["Action", "Fantasy"],
      latestChapter: 234,
      status: "NEW"
    },
    {
      id: 6,
      title: "Solo Levelling Ragnarok",
      readers: 18500,
      image: "/rag2.webp",
      rating: 4.8,
      genre: ["Action", "Fantasy"],
      latestChapter: 234,
      status: "NEW"
    },
    {
      id: 7,
      title: "Solo Levelling Ragnarok",
      readers: 18500,
      image: "/rag2.webp",
      rating: 4.8,
      genre: ["Action", "Fantasy"],
      latestChapter: 234,
      status: "NEW"
    },
    {
      id: 8,
      title: "Solo Levelling Ragnarok",
      readers: 18500,
      image: "/rag2.webp",
      rating: 4.8,
      genre: ["Action", "Fantasy"],
      latestChapter: 234,
      status: "NEW"
    },
    // ...other webtoons
  ];

  const formatReaders = (count: number): string => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400; // Adjust scroll amount as needed
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">New Releases</h2>
            <p className="text-gray-600 mt-1">Latest updates from your favorite series</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {webtoons.map((webtoon) => (
              <div 
                key={webtoon.id} 
                className="flex-none w-[280px] snap-start group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4]">
                  <img
                    src={webtoon.image}
                    alt={webtoon.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {webtoon.status && (
                    <span className="absolute top-2 left-2 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                      {webtoon.status}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 truncate">{webtoon.title}</h3>
                  
                  <div className="flex gap-2 mt-2">
                    {webtoon.genre?.map((g) => (
                      <span key={g} className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                        {g}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-600">
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span className="text-sm">{formatReaders(webtoon.readers)}</span>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span className="text-sm">{webtoon.rating}</span>
                      </div>
                    </div>
                    
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <Bookmark className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Chapter {webtoon.latestChapter}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewRelease;