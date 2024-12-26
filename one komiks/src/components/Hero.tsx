import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full space-y-8 max-w-2xl">
          {/* Text Content */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-200">
                {subtitle}
              </p>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl animate-slide-up">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 rounded-xl bg-white/10 backdrop-blur-sm 
                         text-white placeholder-white/60 border border-white/20
                         focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Search your favorite komiks..."
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up">
            <button className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-bold 
                             hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200">
              Start Reading
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-full font-bold 
                             hover:bg-white/20 backdrop-blur-sm transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;