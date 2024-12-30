import React from 'react';
import { Search, Filter } from 'lucide-react';

const Komiks = () => {
  const genres = ['Action', 'Romance', 'Comedy', 'Drama', 'Fantasy', 'Horror'];
  const sortOptions = ['Latest', 'Most Popular', 'Top Rated', 'A-Z'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Browse Komiks</h1>
          <p className="text-gray-600 mt-2">Discover amazing Filipino comics</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search komiks..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Genre Filter */}
            <div className="flex-shrink-0">
              <select className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Genres</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre.toLowerCase()}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex-shrink-0">
              <select className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                {sortOptions.map((option) => (
                  <option key={option} value={option.toLowerCase()}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {genres.slice(0, 5).map((genre) => (
            <button
              key={genre}
              className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Grid placeholder - Replace with actual komiks grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Komiks;