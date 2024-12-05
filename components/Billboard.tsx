import React from 'react';
import Image from 'next/image';
import type { Movie } from '../types';

interface BillboardProps {
  movie: Movie;
}

const Billboard = ({ movie }: BillboardProps) => {
  return (
    <div className="relative h-[56.25vw]">
      {movie?.backdrop_path && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title || ''}
          fill
          priority
          className="object-cover brightness-[60%]"
          sizes="100vw"
        />
      )}
      <div className="absolute top-[40%] ml-4 md:ml-16">
        <h1 className="text-5xl font-bold text-white mb-4">
          {movie?.title}
        </h1>
        <p className="text-white text-lg mt-4 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%]">
          {movie?.overview}
        </p>
      </div>
    </div>
  );
};

export default Billboard;