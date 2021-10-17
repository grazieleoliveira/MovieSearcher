import { Action } from 'redux';
import { MovieInfoProps, MovieProps } from '~/modules/Movies/dtos';

export enum MoviesTypes {
  GET_MOVIES = '@movies/GET_MOVIES',
  GET_MOVIES_SUCCESS = '@movies/GET_MOVIES_SUCCESS',
  GET_MOVIES_ERROR = '@movies/GET_MOVIES_ERROR',
  GET_POPULAR_MOVIES = '@movies/GET_POPULAR_MOVIES',
  GET_POPULAR_MOVIES_SUCCESS = '@movies/GET_POPULAR_MOVIES_SUCCESS',
  GET_POPULAR_MOVIES_ERROR = '@movies/GET_POPULAR_MOVIES_ERROR',
  GET_MOVIES_INFO = '@movies/GET_MOVIES_INFO',
  GET_MOVIE_INFO_SUCCESS = '@movies/GET_MOVIE_INFO_SUCCESS',
  GET_MOVIE_INFO_ERROR = '@movies/GET_MOVIE_INFO_ERROR',
  SEARCH_MOVIES = '@movies/SEARCH_MOVIES',
  SEARCH_MOVIES_SUCCESS = '@movies/SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_ERROR = '@movies/SEARCH_MOVIES_ERROR',
  SEARCH_BY_GENRE = '@movies/SEARCH_BY_GENRE',
  SEARCH_BY_GENRE_SUCCESS = '@movies/SEARCH_BY_GENRE_SUCCESS',
  SEARCH_BY_GENRE_ERROR = '@movies/SEARCH_BY_GENRE_ERROR',
  GET_MOVIE_BY_ID = '@movies/GET_MOVIE_BY_ID',
  GET_MOVIE_BY_ID_SUCCESS = '@movies/GET_MOVIE_BY_ID_SUCCESS',
  GET_MOVIE_BY_ID_ERROR = '@movies/GET_MOVIE_BY_ID_ERROR',
}

export interface MoviesState {
  listMovies: MovieInfoProps[];
  searchMovies: MovieInfoProps[];
  loading: boolean;
  movie: MovieProps | undefined;
}

export interface GetPopularMoviesProps extends Action {
  type: MoviesTypes.GET_POPULAR_MOVIES;
  payload: { page: string };
}

export interface GetPopularMoviesSuccessProps extends Action {
  type: MoviesTypes.GET_POPULAR_MOVIES_SUCCESS;
  payload: { listMovies: MovieInfoProps };
}

export interface GetPopularMoviesErrorProps extends Action {
  type: MoviesTypes.GET_POPULAR_MOVIES_ERROR;
}

export interface SearchMoviesProps extends Action {
  type: MoviesTypes.SEARCH_MOVIES;
  payload: { text: string };
}

export interface SearchMoviesSuccessProps extends Action {
  type: MoviesTypes.SEARCH_MOVIES_SUCCESS;
  payload: { searchMovies: MovieInfoProps };
}

export interface SearchMoviesErrorProps extends Action {
  type: MoviesTypes.SEARCH_MOVIES_ERROR;
}

export interface SearchByGenreProps extends Action {
  type: MoviesTypes.SEARCH_BY_GENRE;
  payload: { id: string };
}

export interface SearchByGenreSuccessProps extends Action {
  type: MoviesTypes.SEARCH_BY_GENRE_SUCCESS;
  payload: { searchMovies: MovieInfoProps };
}

export interface SearchByGenreErrorProps extends Action {
  type: MoviesTypes.SEARCH_BY_GENRE_ERROR;
}

export interface GetMovieByIdProps extends Action {
  type: MoviesTypes.GET_MOVIE_BY_ID;
  payload: { id: string };
}

export interface GetMovieByIdSuccessProps extends Action {
  type: MoviesTypes.GET_MOVIE_BY_ID_SUCCESS;
  payload: { movie: MovieProps };
}

export interface GetMovieByIdErrorProps extends Action {
  type: MoviesTypes.GET_MOVIE_BY_ID_ERROR;
}

// export interface GetBookInfoProps extends Action {
//   type: BooksTypes.GET_BOOK_INFO;
//   payload: { id: string };
// }

// export interface GetBookInfoSuccessProps extends Action {
//   type: BooksTypes.GET_BOOK_INFO_SUCCESS;
//   payload: { book: BookInfo };
// }

// export interface GetBookInfoErrorProps extends Action {
//   type: BooksTypes.GET_BOOK_INFO_ERROR;
// }
