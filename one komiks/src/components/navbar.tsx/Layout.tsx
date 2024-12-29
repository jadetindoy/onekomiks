import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="layout-container flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}