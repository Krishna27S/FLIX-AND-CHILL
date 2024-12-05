import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Movie } from '../types';
import { fetchMovies } from '../utils/requests';

export default function Shows() {
  const [shows, setShows] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies('/discover/tv?sort_by=popularity.desc');
        setShows(data || []);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to load shows');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center h-64">
            <div className="text-2xl text-white animate-pulse">Loading amazing shows...</div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-2xl text-red-400 text-center">{error}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text">
            Discover Shows
          </h1>
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <span className="text-teal-400">{shows.length}</span>
            <span className="text-white ml-2">Shows</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {shows?.map((show) => (
  <div 
    key={show.id}
    className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-400/20"
  >
    <div className="aspect-[2/3] relative">
      {show.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          alt={show.name || 'TV Show'}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          className="rounded-2xl object-cover"
          priority={false}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
  <h3 className="text-white font-semibold truncate mb-2">
    {show.name}
  </h3>
  <div className="flex items-center justify-between">
    <div className="text-teal-400 flex items-center gap-1">
      <span>★</span>
      {typeof show.vote_average === 'number' && (
        <span>{show.vote_average.toFixed(1)}</span>
      )}
    </div>
    {typeof show.first_air_date === 'string' && show.first_air_date && (
      <div className="text-gray-300 text-sm backdrop-blur-sm bg-black/30 px-2 py-1 rounded-full">
        {new Date(show.first_air_date).getFullYear()}
      </div>
    )}
  </div>
</div>
  </div>
))}
        </div>

        {shows.length === 0 && !isLoading && !error && (
          <div className="text-center py-20">
            <p className="text-2xl text-white/80">No shows found</p>
          </div>
        )}
      </div>
    </main>
  );
}