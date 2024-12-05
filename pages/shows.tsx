import React, { useEffect, useState } from 'react';
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
        setShows(data || []);  // Ensure we always have an array
      } catch (err) {
        setError('Failed to load shows');
        console.error('Error fetching shows:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main className="relative pt-16 pb-24">
        <div className="px-4 md:px-16">
          <h1 className="text-3xl font-bold text-white mb-8">Loading...</h1>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="relative pt-16 pb-24">
        <div className="px-4 md:px-16">
          <h1 className="text-3xl font-bold text-red-500 mb-8">{error}</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="relative pt-16 pb-24">
      <section className="px-4 md:px-16">
        <h1 className="text-3xl font-bold text-white mb-8">TV Shows</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {shows?.map((show) => (
            <div 
              key={show.id}
              className="relative aspect-[2/3]"
            >
              {show.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name || 'TV Show'}
                  className="rounded-md object-cover w-full h-full"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
        {shows.length === 0 && !isLoading && !error && (
          <p className="text-white text-xl">No shows found</p>
        )}
      </section>
    </main>
  );
}