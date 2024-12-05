import React from 'react';
import Image from 'next/image';
import type { Movie } from '../types';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow = ({ title, movies = [] }: MovieRowProps) => {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-white pl-4 mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide p-4 md:px-16">
        {movies?.map((movie) => (
          <div key={movie.id} className="min-w-[180px] md:min-w-[260px] relative group">
            <div className="aspect-[2/3] relative">
              {movie.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  sizes="(max-width: 768px) 180px, 260px"
                  className="rounded-md object-cover transition duration-300 group-hover:scale-105"
                />
              )}
            </div>
            <div className="mt-2">
              <h3 className="text-white text-sm truncate">{movie.title}</h3>
              <p className="text-gray-400 text-xs">
                {movie.release_date?.split('-')[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;