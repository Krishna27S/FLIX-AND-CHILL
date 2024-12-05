import React from 'react';
import { Movie } from '@/types';

interface BillboardProps {
  movie: Movie;
}

const Billboard = ({ movie }: BillboardProps) => {
  return (
    <div className="relative h-[56.25vw]">
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={movie?.title}
        className="w-full h-full object-cover brightness-[60%]"
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white">
          {movie?.title || movie?.name}
        </h1>
        <p className="text-white text-sm md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%]">
          {movie?.overview}
        </p>
      </div>
    </div>
  );
};

export default Billboard;