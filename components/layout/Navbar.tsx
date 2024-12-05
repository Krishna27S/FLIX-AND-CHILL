import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="px-4 py-6 flex items-center">
        <Link href="/" className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text">
          FLIX & CHILL
        </Link>
        
        <div className="flex items-center ml-8 gap-7">
          <Link 
            href="/" 
            className="text-white hover:text-teal-400 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/movies" 
            className="text-white hover:text-teal-400 transition-colors"
          >
            Movies
          </Link>
          <Link 
            href="/shows" 
            className="text-white hover:text-teal-400 transition-colors"
          >
            TV Shows
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;