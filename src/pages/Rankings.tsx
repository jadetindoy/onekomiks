import React, { useState } from 'react';
import { Trophy, TrendingUp, Clock, Star, Eye, TrendingDown, Minus } from 'lucide-react';

const Rankings = () => {
  const [timeframe, setTimeframe] = useState('weekly');
  
  const rankings = [
    {
      rank: 1,
      title: "Solo Leveling",
      author: "Chugong",
      rating: 4.9,
      views: "1.2M",
      change: "up",
      cover: "/solo1.webp"
    },
    {
      rank: 2,
      title: "Tower of God",
      author: "SIU",
      rating: 4.8,
      views: "980K",
      change: "same",
      cover: "/rag2.webp"
    },
    // Add more rankings as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <Trophy className="inline-block mr-3 h-10 w-10 text-yellow-500" />
            Komiks Rankings
          </h1>
          <p className="text-xl text-gray-600">Discover the most popular titles</p>
        </div>

        {/* Time Frame Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {['daily', 'weekly', 'monthly', 'all-time'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                timeframe === period
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>

        {/* Rankings List */}
        <div className="space-y-4">
          {rankings.map((item) => (
            <div
              key={item.rank}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
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

                {/* Content */}
                <div className="flex-grow ml-6">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">by {item.author}</p>
                  
                  <div className="mt-4 flex items-center gap-6">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-1" />
                      <span className="text-gray-700">{item.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-5 h-5 text-blue-500 mr-1" />
                      <span className="text-gray-700">{item.views}</span>
                    </div>
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

                {/* Action Button */}
                <div className="flex-shrink-0 ml-6">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Read Now
                  </button>
                </div>
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

export default Rankings;