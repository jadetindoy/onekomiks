import React from 'react';
import Hero from '../components/Hero';
import NewRelease from '../components/NewRelease';
import TopCharacters from '../components/TopCharacter';
import Top from '../components/Top';

const Trending = () => {
  return (
    <div>
      <Hero 
        title="Get in Trouble" 
        subtitle="Discover the best Filipino comics and stories"
        backgroundImage="/one komiks/public/Solo_Leveling_Arise_Website_Feature-1-1.webp" 
      />
      <NewRelease />
      <TopCharacters />
      <Top />
    </div>
  );
};

export default Trending;