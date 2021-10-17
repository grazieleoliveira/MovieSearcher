import { Reducer } from 'redux';

import { MoviesTypes, MoviesState } from './types';

const INITIAL_STATE: MoviesState = {
  listMovies: [],
  searchMovies: [],
  loading: false,
  movie: undefined,
};

const reducer: Reducer<MoviesState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case MoviesTypes.GET_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        listMovies: payload.listMovies,
      };
    case MoviesTypes.GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        listMovies: [],
      };
    case MoviesTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        listMovies: payload.listMovies,
      };
    case MoviesTypes.GET_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        listMovies: [],
      };
    case MoviesTypes.SEARCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        searchMovies: payload.searchMovies,
      };
    case MoviesTypes.SEARCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        searchMovies: [],
      };
    case MoviesTypes.SEARCH_BY_GENRE:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.SEARCH_BY_GENRE_SUCCESS:
      return {
        ...state,
        loading: false,
        searchMovies: payload.searchMovies,
      };
    case MoviesTypes.SEARCH_BY_GENRE_ERROR:
      return {
        ...state,
        loading: false,
        searchMovies: [],
      };
    case MoviesTypes.GET_MOVIE_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.GET_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: payload.movie,
      };
    case MoviesTypes.GET_MOVIE_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        movie: payload.movie,
      };
    default:
      return state;
  }
};

export default reducer;
