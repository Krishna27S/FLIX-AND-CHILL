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
          <div 
            key={movie.id} 
            className="group flex-none min-w-[180px] md:min-w-[260px]"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden">
              {movie.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  sizes="(max-width: 768px) 180px, 260px"
                  className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-2">
              <h3 className="text-white text-sm truncate">{movie.title}</h3>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{movie.release_date?.split('-')[0]}</span>
                {typeof movie.vote_average === 'number' && (
                  <span className="flex items-center gap-1">
                    ★ {movie.vote_average.toFixed(1)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;