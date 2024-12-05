const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint: string) => {
  try {
    if (!API_KEY) {
      throw new Error('API key is not configured');
    }

    const response = await fetch(
      `${BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${API_KEY}&language=en-US`
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', errorData);
      throw new Error(errorData.status_message || 'Failed to fetch data');
    }
    
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Failed to fetch data. Please try again later.');
  }
};

export const requests = {
  getTrending: '/trending/all/week',
  getTopRated: '/movie/top_rated',
  getActionMovies: '/discover/movie?with_genres=28',
  getComedyMovies: '/discover/movie?with_genres=35',
  getHorrorMovies: '/discover/movie?with_genres=27',
  getRomanceMovies: '/discover/movie?with_genres=10749',
  getDocumentaries: '/discover/movie?with_genres=99',
};