import React from 'react';

const Genre = () => {
  const genres = [
    {
      name: 'Action',
      description: 'Epic battles and thrilling adventures',
      color: 'from-red-500 to-orange-500',
      count: 245
    },
    {
      name: 'Romance',
      description: 'Love stories that touch the heart',
      color: 'from-pink-500 to-purple-500',
      count: 189
    },
    {
      name: 'Comedy',
      description: 'Laugh-out-loud moments and humor',
      color: 'from-yellow-500 to-green-500',
      count: 156
    },
    {
      name: 'Drama',
      description: 'Emotional stories and character development',
      color: 'from-blue-500 to-indigo-500',
      count: 203
    },
    {
      name: 'Fantasy',
      description: 'Magical worlds and mythical creatures',
      color: 'from-purple-500 to-pink-500',
      count: 178
    },
    {
      name: 'Horror',
      description: 'Spine-chilling tales and suspense',
      color: 'from-gray-800 to-gray-900',
      count: 92
    },
    {
      name: 'Sci-Fi',
      description: 'Futuristic adventures and technology',
      color: 'from-cyan-500 to-blue-500',
      count: 134
    },
    {
      name: 'Slice of Life',
      description: 'Everyday stories and relatable moments',
      color: 'from-green-500 to-teal-500',
      count: 167
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse by Genre</h1>
          <p className="text-xl text-gray-600">Discover stories that match your interests</p>
        </div>

        {/* Genre Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {genres.map((genre) => (
            <div
              key={genre.name}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative p-6 flex flex-col h-full min-h-[200px] justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{genre.name}</h3>
                  <p className="text-white/90">{genre.description}</p>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-white/90 text-sm">{genre.count} titles</span>
                  <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition-colors">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genre;