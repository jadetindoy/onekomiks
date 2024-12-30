import React, { useRef } from 'react';
import { Eye, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const WebtoonCharacters = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const characters = [
    {
        name: "Luna Shadow",
        description: "The mysterious moonlight warrior",
        comics: 45,
        views: "1.2M",
        image: "../../public/cald.png"
      },
      {
        name: "Sung Jinwoo",
        description: "Solo Levelling",
        comics: 38,
        views: "956K",
        image: "../../public/soloc.png"
      },
      {
        name: "Elena Frost",
        description: "Ice queen of the north",
        comics: 52,
        views: "2.1M",
        image: "../../public/cald.png"
      },
      {
        name: "Rex Steel",
        description: "Unbreakable hero",
        comics: 41,
        views: "887K",
        image: "../../public/cald.png"
      },
      {
        name: "Aria Storm",
        description: "Master of the winds",
        comics: 33,
        views: "743K",
        image: "../../public/cald.png"
      }  ];

  const formatReaders = (views: string): string => {
    return views; // Keep original format from data
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Characters</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {characters.map((character, index) => (
            <div 
              key={index}
              className="min-w-[280px] snap-start rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-character.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {character.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {character.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-medium">{character.comics} Comics</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Eye className="w-5 h-5" />
                    <span className="font-medium">{formatReaders(character.views)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebtoonCharacters;