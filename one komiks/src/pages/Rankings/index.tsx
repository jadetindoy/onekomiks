import React, { useState } from 'react';
import { Trophy, Eye, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import RankingCard from './components/RankingCard';
import TimeFrameSelector from './components/TimeFrameSelector';
import type { RankingItem } from './types';

const Rankings = () => {
  const [timeframe, setTimeframe] = useState('weekly');
  
  const rankings: RankingItem[] = [
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
    {
      rank: 3,
      title: "The Beginning After The End",
      author: "TurtleMe",
      rating: 4.7,
      views: "850K",
      change: "up",
      cover: "/rag2.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <Trophy className="inline-block mr-3 h-10 w-10 text-yellow-500" />
            Komiks Rankings
          </h1>
          <p className="text-xl text-gray-600">Discover the most popular titles</p>
        </div>

        <TimeFrameSelector timeframe={timeframe} setTimeframe={setTimeframe} />

        <div className="space-y-4">
          {rankings.map((item) => (
            <RankingCard key={item.rank} item={item} />
          ))}
        </div>

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