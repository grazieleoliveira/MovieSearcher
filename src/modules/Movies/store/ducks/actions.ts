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

export const searchMoviesAction = (
  text: string,
  page: string,
): SearchMoviesProps => action(MoviesTypes.SEARCH_MOVIES, { text, page });

export const searchMoviesSuccessAction = (
  searchMovies: MovieInfoProps,
): SearchMoviesSuccessProps =>
  action(MoviesTypes.SEARCH_MOVIES_SUCCESS, { searchMovies });

export const searchMoviesErrorAction = (): SearchMoviesErrorProps =>
  action(MoviesTypes.SEARCH_MOVIES_ERROR);

export const searchByGenreAction = (
  id: string,
  page: string,
): SearchByGenreProps => action(MoviesTypes.SEARCH_BY_GENRE, { id, page });

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
