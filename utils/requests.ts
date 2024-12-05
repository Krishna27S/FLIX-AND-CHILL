const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint: string) => {
  try {
    if (!API_KEY) {
      console.error('API key is missing in environment variables');
      throw new Error('API configuration error');
    }

    const url = `${BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${API_KEY}&language=en-US`;
    console.log('Fetching from URL:', url.replace(API_KEY, 'HIDDEN')); // For debugging, hide the actual API key

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    if (!data.results) {
      throw new Error('Invalid response format');
    }

    return data.results;
  } catch (error) {
    console.error('Error details:', error);
    throw new Error('Failed to fetch data. Please ensure API key is configured correctly.');
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