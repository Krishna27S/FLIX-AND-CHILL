import React from 'react';
import Image from 'next/image';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105">
      <div className="aspect-[2/3] relative">
        {movie.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            className="object-cover rounded-2xl"
            priority={false}
            quality={75}
          />
        )}
      </div>
      {/* Rest of your component */}
    </div>
  );
};

export default MovieCard;