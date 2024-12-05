import React from 'react';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieCard = ({ movie }: { movie: Movie }) => (
  <div className="min-w-[180px] md:min-w-[260px] hover:scale-105 transition">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      className="rounded-sm object-cover w-full h-full"
      loading="lazy"
    />
    <div className="mt-2">
      <h3 className="text-white text-sm truncate">{movie.title}</h3>
      <p className="text-gray-400 text-xs">
        {movie.release_date?.split('-')[0]} • {movie.vote_average.toFixed(1)}★
      </p>
    </div>
  </div>
);

const MovieRow = ({ title, movies = [] }: MovieRowProps) => {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-white pl-4 mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide p-4 md:px-16">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;