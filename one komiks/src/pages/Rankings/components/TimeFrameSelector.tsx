import React from 'react';

interface TimeFrameSelectorProps {
  timeframe: string;
  setTimeframe: (timeframe: string) => void;
}

const TimeFrameSelector: React.FC<TimeFrameSelectorProps> = ({ timeframe, setTimeframe }) => (
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
);