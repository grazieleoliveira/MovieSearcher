import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import {
  getPopularMovies,
  searchMovieById,
  searchMovie,
  searchMoviesByGenre,
} from '~/modules/Movies/services/movies';

import {
  MoviesTypes,
  GetPopularMoviesProps,
  SearchMoviesProps,
  SearchByGenreProps,
  GetMovieByIdProps,
} from './types';

import {
  getPopularMoviesSuccessAction,
  getPopularMoviesErrorAction,
  searchMoviesSuccessAction,
  searchMoviesErrorAction,
  searchByGenreSuccessAction,
  searchByGenreErrorAction,
  getMovieByIdSuccessAction,
  getMovieByIdErrorAction,
} from './actions';
import { ApplicationState } from '~/shared/store';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}
function* getPopularMoviesSagas(action: GetPopularMoviesProps) {
  try {
    const response: ResponseGenerator = yield call(
      getPopularMovies,
      action.payload.page,
    );

    if (response.status >= 200 && response.status < 300) {
      const { listMovies } = yield select(
        (state: ApplicationState) => state.movies,
      );
      let moreMovies = [];

      if (action.payload.page === '1') {
        moreMovies = response.data.results;
      } else {
        moreMovies = [...listMovies, ...response.data.results];
      }
      yield put(getPopularMoviesSuccessAction(moreMovies));
    } else {
      yield put(getPopularMoviesErrorAction());
    }
  } catch {
    yield put(getPopularMoviesErrorAction());
  }
}

function* searchMoviesSagas(action: SearchMoviesProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchMovie,
      action.payload.text,
      action.payload.page,
    );

    if (response.status >= 200 && response.status < 300) {
      const { searchMovies } = yield select(
        (state: ApplicationState) => state.movies,
      );
      let moreMovies = [];

      if (action.payload.page === '1') {
        moreMovies = response.data.results;
      } else {
        moreMovies = [...searchMovies, ...response.data.results];
      }
      yield put(searchMoviesSuccessAction(moreMovies));
    } else {
      yield put(searchMoviesErrorAction());
    }
  } catch {
    yield put(searchMoviesErrorAction());
  }
}

function* searchByGenreSagas(action: SearchByGenreProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchMoviesByGenre,
      action.payload.id,
      action.payload.page,
    );

    if (response.status >= 200 && response.status < 300) {
      const { searchMovies } = yield select(
        (state: ApplicationState) => state.movies,
      );
      let moreMovies = [];

      if (action.payload.page === '1') {
        moreMovies = response.data.results;
      } else {
        moreMovies = [...searchMovies, ...response.data.results];
      }
      yield put(searchByGenreSuccessAction(moreMovies));
    } else {
      yield put(searchByGenreErrorAction());
    }
  } catch {
    yield put(searchByGenreErrorAction());
  }
}

function* getMovieByIdSagas(action: GetMovieByIdProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchMovieById,
      action.payload.id,
    );

    if (response.status >= 200 && response.status < 300) {
      // const {listBooks} = yield select((state: ApplicationState) => state.books);
      // const moreBooks = [...listBooks, ...response.data.items];
      yield put(getMovieByIdSuccessAction(response.data));
    } else {
      yield put(getMovieByIdErrorAction());
    }
  } catch {
    yield put(getMovieByIdErrorAction());
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(MoviesTypes.GET_POPULAR_MOVIES, getPopularMoviesSagas),
    takeLatest(MoviesTypes.SEARCH_MOVIES, searchMoviesSagas),
    takeLatest(MoviesTypes.SEARCH_BY_GENRE, searchByGenreSagas),
    takeLatest(MoviesTypes.GET_MOVIE_BY_ID, getMovieByIdSagas),
  ]);
}

// function* getBookInfoSagas(action: GetBookInfoProps) {
//   try {
//     const response: ResponseGenerator = yield call(getBook, action.payload.id);

//     if (response.status >= 200 && response.status < 300) {
//       yield put(getBookInfoSuccessAction(response.data));
//     } else {
//       yield put(getBookInfoErrorAction());
//     }
//   } catch {
//     yield put(getBookInfoErrorAction());
//   }
// }
