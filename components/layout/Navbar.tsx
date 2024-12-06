'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="text-[28px] font-bold text-teal-400 hover:text-teal-300 transition-colors"
          >
            FLIX & CHILL
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/"
              className="text-gray-200 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/movies"
              className="text-gray-200 hover:text-white transition-colors"
            >
              Movies
            </Link>
            <Link 
              href="/shows"
              className="text-gray-200 hover:text-white transition-colors"
            >
              TV Shows
            </Link>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-white hidden md:inline">
                {session.user?.name}
              </span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              href="/auth/signin"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;