import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Timer, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

const ComicsDashboard = () => {
  // Sample data - in real app this would come from an API
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
      className={`mb-2 transition-all duration-300 ${
        expandedCards[`${section}-${comic.id}`] ? 'bg-blue-50' : 'bg-white'
      }`}
    >
      <div
        className="p-3 border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => toggleExpand(comic.id, section)}
      >
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{comic.title}</h3>
            <Badge variant="secondary" className="mt-1">
              {comic.genre}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">{metric}</span>
            {expandedCards[`${section}-${comic.id}`] ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </div>
        
        {expandedCards[`${section}-${comic.id}`] && (
          <div className="mt-3 pt-3 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Rating: {comic.rating}/5.0</span>
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                Read Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <Card 
        className={`transition-transform duration-300 ${
          hoveredSection === 'mostRead' ? 'scale-102' : ''
        }`}
        onMouseEnter={() => setHoveredSection('mostRead')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="text-red-500" />
            Most Read
          </CardTitle>
        </CardHeader>
        <CardContent>
          {mostRead.map(comic => (
            <ComicCard
              key={comic.id}
              comic={comic}
              section="mostRead"
              metric={comic.reads}
              icon={Heart}
            />
          ))}
        </CardContent>
      </Card>

      <Card
        className={`transition-transform duration-300 ${
          hoveredSection === 'topWeekly' ? 'scale-102' : ''
        }`}
        onMouseEnter={() => setHoveredSection('topWeekly')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="text-yellow-500" />
            Top Weekly
          </CardTitle>
        </CardHeader>
        <CardContent>
          {topWeekly.map(comic => (
            <ComicCard
              key={comic.id}
              comic={comic}
              section="topWeekly"
              metric={comic.weeklyReads}
              icon={Sparkles}
            />
          ))}
        </CardContent>
      </Card>

      <Card
        className={`transition-transform duration-300 ${
          hoveredSection === 'newest' ? 'scale-102' : ''
        }`}
        onMouseEnter={() => setHoveredSection('newest')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Timer className="text-green-500" />
            Newest
          </CardTitle>
        </CardHeader>
        <CardContent>
          {newest.map(comic => (
            <ComicCard
              key={comic.id}
              comic={comic}
              section="newest"
              metric={`${comic.daysAgo} ${comic.daysAgo === 1 ? 'day' : 'days'} ago`}
              icon={Timer}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ComicsDashboard;