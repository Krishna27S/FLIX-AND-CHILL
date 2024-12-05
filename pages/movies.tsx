import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Movie } from '../types';
import { fetchMovies } from '../utils/requests';

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const genres = [
    { id: 'all', name: 'All Movies' },
    { id: '28', name: 'Action' },
    { id: '35', name: 'Comedy' },
    { id: '27', name: 'Horror' },
    { id: '10749', name: 'Romance' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const endpoint = selectedGenre === 'all' 
          ? '/movie/top_rated'
          : `/discover/movie?with_genres=${selectedGenre}`;
        const data = await fetchMovies(endpoint);
        setMovies(data || []);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to load movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedGenre]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center h-64">
            <div className="text-2xl text-white animate-pulse">Loading amazing movies...</div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text mb-6 md:mb-0">
            Explore Movies
          </h1>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="text-teal-400">{movies.length}</span>
              <span className="text-white ml-2">Movies</span>
            </div>
          </div>
        </div>

        {/* Genre Filter */}
        <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide mb-8">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => setSelectedGenre(genre.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedGenre === genre.id
                  ? 'bg-teal-400 text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {genre.name}
            </button>
          ))}
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies?.map((movie) => (
            <div 
              key={movie.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-400/20"
            >
              <div className="aspect-[2/3] relative">
                {movie.poster_path && (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    className="rounded-2xl object-cover"
                    priority={false}
                  />
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold truncate mb-2">
                  {movie.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-teal-400 flex items-center gap-1">
                    <span>★</span>
                    <span>{movie.vote_average?.toFixed(1)}</span>
                  </span>
                  {movie.release_date && (
                    <span className="text-gray-300 text-sm backdrop-blur-sm bg-black/30 px-2 py-1 rounded-full">
                      {new Date(movie.release_date).getFullYear()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {movies.length === 0 && !isLoading && (
          <div className="text-center py-20">
            <p className="text-2xl text-white/80">
              {error || 'No movies found'}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}