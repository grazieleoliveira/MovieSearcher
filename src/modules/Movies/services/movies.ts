import {
  GENRES_PATH,
  KEY,
  MOVIE_PATH,
  POPULAR_PATH,
  SEARCH_PATH,
} from '../constants';
import request from './request';

export const getPopularMovies = async (page: string) => {
  try {
    const response = await request.get(POPULAR_PATH, `page=${page}`);
    return response;
  } catch {
    return null;
  }
};

export const searchMovie = async (text: string, page: string) => {
  try {
    const response = await request.get(
      SEARCH_PATH,
      `query=${text}&page=${page}`,
    );
    return response;
  } catch {
    return null;
  }
};

export const searchMoviesByGenre = async (id: string, page: string) => {
  try {
    const response = await request.get(
      GENRES_PATH,
      `with_genres=${id}&page=${page}`,
    );
    return response;
  } catch {
    return null;
  }
};

export const searchMovieById = async (id: string) => {
  try {
    const response = await request.get(`${MOVIE_PATH}${id}?api_key=${KEY}`);
    return response;
  } catch {
    return null;
  }
};
