// types/index.ts
export interface Movie {
    first_air_date: unknown;
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    media_type: 'movie' | 'tv';
    name?: string;  // for TV shows
  }