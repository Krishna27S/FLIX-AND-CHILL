import React, { useEffect, useState } from 'react';
import type { Movie } from '../types';
import { fetchMovies, requests } from '../utils/requests';
import MovieRow from '../components/MovieRow';  // Changed from { MovieRow }
import Billboard from '../components/Billboard';  // Changed from { Billboard }

export default function Home() {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [action, setAction] = useState<Movie[]>([]);
  const [comedy, setComedy] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [trendingData, topRatedData, actionData, comedyData] = await Promise.all([
        fetchMovies(requests.getTrending),
        fetchMovies(requests.getTopRated),
        fetchMovies(requests.getActionMovies),
        fetchMovies(requests.getComedyMovies),
      ]);

      setTrending(trendingData);
      setTopRated(topRatedData);
      setAction(actionData);
      setComedy(comedyData);
    };

    fetchData();
  }, []);

  return (
    <main className="relative pb-24 lg:space-y-24">
      {trending.length > 0 && <Billboard movie={trending[0]} />}
      <section className="md:space-y-24">
        <MovieRow title="Trending Now" movies={trending} />
        <MovieRow title="Top Rated" movies={topRated} />
        <MovieRow title="Action Thrillers" movies={action} />
        <MovieRow title="Comedy Movies" movies={comedy} />
      </section>
    </main>
  );
}