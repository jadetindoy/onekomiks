import React, { useState } from 'react';
import { Search, ChevronDown, Menu, User, Flame, Trophy, BookOpen } from 'lucide-react';

const TopNavigation = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white tracking-wider">
                One<span className="text-yellow-400">Komiks</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex ml-8 space-x-6">
              <a href="/" className="flex items-center space-x-2 text-white/90 hover:text-yellow-400 px-3 py-2 transition-colors duration-200">
                <Flame className="h-5 w-5" />
                <span className="font-medium">Trending</span>
              </a>
              <a href="/komiks" className="flex items-center space-x-2 text-white/90 hover:text-yellow-400 px-3 py-2 transition-colors duration-200">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">Komiks</span>
              </a>
              <a href="/genre" className="flex items-center space-x-2 text-white/90 hover:text-yellow-400 px-3 py-2 transition-colors duration-200">
                <span className="font-medium">Genre</span>
              </a>
              <a href="/ranking" className="flex items-center space-x-2 text-white/90 hover:text-yellow-400 px-3 py-2 transition-colors duration-200">
                <Trophy className="h-5 w-5" />
                <span className="font-medium">Rankings</span>
              </a>
            </div>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-lg mx-4 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border-none rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/20"
                placeholder="Search your favorite komiks..."
              />
            </div>
          </div>

          {/* Right side - BEONE Button, Login, and User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200">
              BEONE
            </button>
            
            {isLoggedIn ? (
              // Logged in state
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-white/10 rounded-full p-1 pr-3 hover:bg-white/20 transition-colors duration-200"
                >
                  <img
                    src="/api/placeholder/32/32"
                    alt="User profile"
                    className="h-8 w-8 rounded-full border-2 border-yellow-400"
                  />
                  <ChevronDown className="h-4 w-4 text-yellow-400" />
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-50">
                    <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Profile
                    </a>
                    <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Settings
                    </a>
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Logged out state
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <User className="h-5 w-5" />
                <span className="font-medium">Login</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-600/50 to-blue-600/50 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="flex items-center space-x-2 text-white hover:text-yellow-400 px-3 py-2">
              <Flame className="h-5 w-5" />
              <span>Trending</span>
            </a>
            <a href="/komiks" className="flex items-center space-x-2 text-white hover:text-yellow-400 px-3 py-2">
              <BookOpen className="h-5 w-5" />
              <span>Komiks</span>
            </a>
            <a href="/genre" className="flex items-center space-x-2 text-white hover:text-yellow-400 px-3 py-2">
              <span>Genre</span>
            </a>
            <a href="/ranking" className="flex items-center space-x-2 text-white hover:text-yellow-400 px-3 py-2">
              <Trophy className="h-5 w-5" />
              <span>Rankings</span>
            </a>
          </div>
          <div className="px-4 py-3 space-y-3">
            <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 w-full transform hover:scale-105 transition-all duration-200">
              BEONE
            </button>
            {!isLoggedIn && (
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="flex items-center justify-center space-x-2 w-full bg-white/10 px-4 py-2 rounded-full text-white hover:bg-white/20"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNavigation;