import React, { useEffect, useState } from 'react';
import type { Movie } from '../types';
import { fetchMovies, requests } from '../utils/requests';
// Removed unused MovieRow import

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(requests.getTopRated);
      setMovies(data);
    };

    fetchData();
  }, []);

  return (
    <main className="relative pt-16 pb-24">
      <section className="px-4 md:px-16">
        <h1 className="text-3xl font-bold text-white mb-8">Movies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div 
              key={movie.id}
              className="relative aspect-[2/3]"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}