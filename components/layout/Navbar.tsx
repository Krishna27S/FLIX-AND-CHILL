const Navbar = () => {
    return (
      <nav className="fixed top-0 z-50 w-full bg-black bg-opacity-50">
        <div className="px-4 py-6 flex items-center">
          <a href="/" className="text-red-600 text-3xl font-bold">
            FLIX & CHILL
          </a>
          <div className="flex items-center ml-8 gap-7">
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="/movies" className="text-white hover:text-gray-300">
              Movies
            </a>
            <a href="/shows" className="text-white hover:text-gray-300">
              TV Shows
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;  // Default export