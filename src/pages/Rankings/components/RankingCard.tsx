import React from 'react';
import { Star, TrendingUp, TrendingDown, Minus, Eye } from 'lucide-react'; // Consolidated imports
import { RankingItem } from '../types';

interface RankingCardProps {
  item: RankingItem;
}

const RankingCard: React.FC<RankingCardProps> = ({ item }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
    <div className="flex items-center p-4">
      {/* Rank */}
      <div className="flex-shrink-0 w-16 text-center">
        <span className="text-3xl font-bold text-gray-900">#{item.rank}</span>
      </div>

      {/* Cover Image */}
      <div className="flex-shrink-0 w-24 h-32 ml-4">
        <img
          src={item.cover}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Title, Author, and Stats */}
      <div className="flex-grow ml-6">
        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
        <p className="text-gray-600">by {item.author}</p>

        {/* Stats Section */}
        <div className="mt-4 flex items-center gap-6">
          {/* Rating */}
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-500 mr-1" />
            <span className="text-gray-700">{item.rating}</span>
          </div>

          {/* Views */}
          <div className="flex items-center">
            <Eye className="w-5 h-5 text-blue-500 mr-1" />
            <span className="text-gray-700">{item.views}</span>
          </div>

          {/* Trend */}
          <div className="flex items-center">
            {item.change === 'up' ? (
              <TrendingUp className="w-5 h-5 text-green-500" />
            ) : item.change === 'down' ? (
              <TrendingDown className="w-5 h-5 text-red-500" />
            ) : (
              <Minus className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>
      </div>

      {/* Read Now Button */}
      <div className="flex-shrink-0 ml-6">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Read Now
        </button>
      </div>
    </div>
  </div>
);

export default RankingCard;
