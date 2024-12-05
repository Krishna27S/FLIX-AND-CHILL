const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint: string) => {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data.results;
};

export const requests = {
  getTrending: `/trending/all/week`,
  getTopRated: `/movie/top_rated`,
  getActionMovies: `/discover/movie?with_genres=28`,
  getComedyMovies: `/discover/movie?with_genres=35`,
  getHorrorMovies: `/discover/movie?with_genres=27`,
  getRomanceMovies: `/discover/movie?with_genres=10749`,
  getDocumentaries: `/discover/movie?with_genres=99`,
};