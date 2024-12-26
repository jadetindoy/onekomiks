import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Hero from '../Hero';
import NewRelease from '../NewRelease'; // Ensure the file exists at this path
import TopChacters from '../TopCharacter';
import Top from '../Top';

export default function Layout() {
  return (
    <div className="layout-container flex flex-col">
      <Navbar />
      <Hero title="Get in  Trouble" backgroundImage="/one komiks/public/Solo_Leveling_Arise_Website_Feature-1-1.webp" />
      <NewRelease />
      <TopChacters />
      <Top />
    </div>
  );
}