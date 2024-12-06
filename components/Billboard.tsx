import React from 'react';
import Image from 'next/image';
import { Play, Info } from 'lucide-react';
import type { Movie } from '../types';

interface BillboardProps {
  movie: Movie;
}

const Billboard = ({ movie }: BillboardProps) => {
  return (
    <div className="relative h-[85vh] w-full">
      <div className="relative h-full w-full">
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
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute left-8 bottom-[25%] md:left-16 space-y-6 max-w-xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          {movie?.title}
        </h1>
        
        <p className="text-lg text-white/90 line-clamp-3">
          {movie?.overview}
        </p>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-white hover:bg-white/90 text-black px-6 py-2 rounded-lg transition">
            <Play size={20} />
            Play
          </button>
          <button className="flex items-center gap-2 bg-gray-500/50 hover:bg-gray-500/70 text-white px-6 py-2 rounded-lg transition">
            <Info size={20} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;