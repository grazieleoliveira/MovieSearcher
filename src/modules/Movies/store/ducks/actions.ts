import { action } from 'typesafe-actions';
import { MovieInfoProps, MovieProps } from '~/modules/Movies/dtos';
import {
  MoviesTypes,
  SearchMoviesProps,
  SearchMoviesErrorProps,
  SearchMoviesSuccessProps,
  GetPopularMoviesSuccessProps,
  GetPopularMoviesProps,
  GetPopularMoviesErrorProps,
  SearchByGenreErrorProps,
  SearchByGenreProps,
  SearchByGenreSuccessProps,
  GetMovieByIdProps,
  GetMovieByIdSuccessProps,
  GetMovieByIdErrorProps,
} from './types';

export const getPopularMoviesAction = (page: string): GetPopularMoviesProps =>
  action(MoviesTypes.GET_POPULAR_MOVIES, { page });

export const getPopularMoviesSuccessAction = (
  listMovies: MovieInfoProps,
): GetPopularMoviesSuccessProps =>
  action(MoviesTypes.GET_POPULAR_MOVIES_SUCCESS, { listMovies });

export const getPopularMoviesErrorAction = (): GetPopularMoviesErrorProps =>
  action(MoviesTypes.GET_POPULAR_MOVIES_ERROR);

export const searchMoviesAction = (text: string): SearchMoviesProps =>
  action(MoviesTypes.SEARCH_MOVIES, { text });

export const searchMoviesSuccessAction = (
  searchMovies: MovieInfoProps,
): SearchMoviesSuccessProps =>
  action(MoviesTypes.SEARCH_MOVIES_SUCCESS, { searchMovies });

export const searchMoviesErrorAction = (): SearchMoviesErrorProps =>
  action(MoviesTypes.SEARCH_MOVIES_ERROR);

export const searchByGenreAction = (id: string): SearchByGenreProps =>
  action(MoviesTypes.SEARCH_BY_GENRE, { id });

export const searchByGenreSuccessAction = (
  searchMovies: MovieInfoProps,
): SearchByGenreSuccessProps =>
  action(MoviesTypes.SEARCH_BY_GENRE_SUCCESS, { searchMovies });

export const searchByGenreErrorAction = (): SearchByGenreErrorProps =>
  action(MoviesTypes.SEARCH_BY_GENRE_ERROR);

export const getMovieByIdAction = (id: string): GetMovieByIdProps =>
  action(MoviesTypes.GET_MOVIE_BY_ID, { id });

export const getMovieByIdSuccessAction = (
  movie: MovieProps,
): GetMovieByIdSuccessProps =>
  action(MoviesTypes.GET_MOVIE_BY_ID_SUCCESS, { movie });

export const getMovieByIdErrorAction = (): GetMovieByIdErrorProps =>
  action(MoviesTypes.GET_MOVIE_BY_ID_ERROR);
// export const getBookInfoAction = (id: string): GetBookInfoProps =>
//   action(BooksTypes.GET_BOOK_INFO, { id });

// export const getBookInfoSuccessAction = (
//   book: BookInfo,
// ): GetBookInfoSuccessProps =>
//   action(BooksTypes.GET_BOOK_INFO_SUCCESS, { book });

// export const getBookInfoErrorAction = (): GetBookInfoErrorProps =>
//   action(BooksTypes.GET_BOOK_INFO_ERROR);
