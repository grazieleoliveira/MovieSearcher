import { applyMiddleware, compose, createStore } from 'redux';
import { getStoredState, persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { reactotron } from '~/config/ReactotronConfig';

import reducers from './ducks';
import sagas from './sagas';

import { FontState } from '~/shared/store/ducks/font/types';
import { ThemeState } from '~/shared/store/ducks/theme/types';
import { ProfileState } from '~/modules/User/store/ducks/types';
// import { ProfileState } from './ducks/profile/types';
// import { BooksState } from './ducks/books/types';

export interface ApplicationState {
  font: FontState;
  theme: ThemeState;
  profile: ProfileState;
  // movies: MoviesState;
}

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debounce: 0.1,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMonitor = __DEV__ ? reactotron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = [thunkMiddleware];

let composed = applyMiddleware(...middleware);

if (process.env.NODE_ENV !== 'production' || __DEV__) {
  composed = compose(
    applyMiddleware(...middleware, sagaMiddleware),

    reactotron.createEnhancer(),
  );
}

export const store = createStore(persistedReducer, composed);
// sagaMiddleware.run(sagas);
export const persistor = persistStore(store, null, () => {});

export function startStore() {
  getStoredState(persistConfig, (err, state) => {
    persistor.rehydrate(state);

    persistor.resume();
  });
}

export default store;
