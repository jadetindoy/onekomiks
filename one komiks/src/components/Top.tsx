import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Timer, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

const ComicsDashboard = () => {
  const [mostRead] = useState([
    { id: 1, title: "One Piece", genre: "Adventure", reads: "1.2M", rating: 4.8 },
    { id: 2, title: "Naruto", genre: "Action", reads: "1.1M", rating: 4.7 },
    { id: 3, title: "Death Note", genre: "Thriller", reads: "900K", rating: 4.9 },
    { id: 4, title: "Attack on Titan", genre: "Dark Fantasy", reads: "850K", rating: 4.8 },
    { id: 5, title: "My Hero Academia", genre: "Superhero", reads: "800K", rating: 4.6 }
  ]);

  const [topWeekly] = useState([
    { id: 1, title: "Jujutsu Kaisen", genre: "Supernatural", weeklyReads: "200K", rating: 4.9 },
    { id: 2, title: "Demon Slayer", genre: "Action", weeklyReads: "180K", rating: 4.8 },
    { id: 3, title: "Chainsaw Man", genre: "Dark Fantasy", weeklyReads: "150K", rating: 4.7 },
    { id: 4, title: "Black Clover", genre: "Fantasy", weeklyReads: "120K", rating: 4.5 },
    { id: 5, title: "Dr. Stone", genre: "Sci-Fi", weeklyReads: "100K", rating: 4.6 }
  ]);

  const [newest] = useState([
    { id: 1, title: "Kaiju No. 8", genre: "Action", daysAgo: 1, rating: 4.5 },
    { id: 2, title: "Solo Leveling", genre: "Fantasy", daysAgo: 2, rating: 4.8 },
    { id: 3, title: "Blue Lock", genre: "Sports", daysAgo: 3, rating: 4.6 },
    { id: 4, title: "Spy × Family", genre: "Comedy", daysAgo: 4, rating: 4.7 },
    { id: 5, title: "Tokyo Revengers", genre: "Action", daysAgo: 5, rating: 4.4 }
  ]);

  const [expandedCards, setExpandedCards] = useState({});
  const [hoveredSection, setHoveredSection] = useState(null);

  const toggleExpand = (id, section) => {
    setExpandedCards(prev => ({
      ...prev,
      [`${section}-${id}`]: !prev[`${section}-${id}`]
    }));
  };

  const ComicCard = ({ comic, section, metric, icon: Icon }) => (
    <div 
      className={`mb-3 transition-all duration-300 ${
        expandedCards[`${section}-${comic.id}`] ? 'bg-blue-50' : 'bg-white'
      }`}
    >
      <div
        className="p-4 border rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => toggleExpand(comic.id, section)}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold text-lg leading-tight">{comic.title}</h3>
            <Badge variant="secondary" className="text-xs">
              {comic.genre}
            </Badge>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-600">{metric}</span>
            </div>
            {expandedCards[`${section}-${comic.id}`] ? (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            )}
          </div>
        </div>
        
        {expandedCards[`${section}-${comic.id}`] && (
          <div className="mt-4 pt-3 border-t">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">Rating</span>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-semibold text-blue-600">{comic.rating}</span>
                  <span className="text-sm text-gray-500">/5.0</span>
                </div>
              </div>
              <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Read Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const SectionCard = ({ title, icon: Icon, iconColor, children }) => (
    <Card 
      className={`transition-all duration-300 hover:shadow-lg ${
        hoveredSection === title ? 'transform scale-[1.02]' : ''
      }`}
      onMouseEnter={() => setHoveredSection(title)}
      onMouseLeave={() => setHoveredSection(null)}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-3 text-xl">
          <Icon className={`w-6 h-6 ${iconColor}`} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        {children}
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard title="Most Read" icon={Heart} iconColor="text-red-500">
          {mostRead.map(comic => (
            <ComicCard
              key={comic.id}
              comic={comic}
              section="mostRead"
              metric={comic.reads}
              icon={Heart}
            />
          ))}
        </SectionCard>

        <SectionCard title="Top Weekly" icon={Sparkles} iconColor="text-yellow-500">
          {topWeekly.map(comic => (
            <ComicCard
              key={comic.id}
              comic={comic}
              section="topWeekly"
              metric={comic.weeklyReads}
              icon={Sparkles}
            />
          ))}
        </SectionCard>

        <SectionCard title="Newest" icon={Timer} iconColor="text-green-500">
          {newest.map(comic => (
            <ComicCard
              key={comic.id}
              comic={comic}
              section="newest"
              metric={`${comic.daysAgo} ${comic.daysAgo === 1 ? 'day' : 'days'} ago`}
              icon={Timer}
            />
          ))}
        </SectionCard>
      </div>
    </div>
  );
};

export default ComicsDashboard;