// components/MovieCard.tsx
import React from 'react';
import { Movie } from '@/types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="group relative h-[12vw] min-h-[170px] min-w-[200px] hover:scale-110 transition duration-200">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
        className="rounded-sm object-cover w-full h-full"
      />
      <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute bottom-0 p-4 bg-gradient-to-t from-black w-full">
        <p className="text-white text-sm truncate font-bold">
          {movie.title || movie.name}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span>•</span>
          <span>{movie.vote_average.toFixed(1)} ⭐</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;