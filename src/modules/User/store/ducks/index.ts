import { Reducer } from 'redux';
import { ProfileState, ProfileTypes } from './types';

const INITIAL_STATE: ProfileState = {
  isLoggedIn: false,
  currentUser: {
    fullName: '',
    age: '',
    favBook: '',
    currentlyReading: '',
    image: '',
  },
};

const reducer: Reducer<ProfileState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case ProfileTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case ProfileTypes.SET_PROFILE:
      return {
        ...state,
        currentUser: payload.currentUser,
      };
    case ProfileTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default reducer;
