import { Action } from 'redux';

export enum ProfileTypes {
  SET_PROFILE = '@profile/SET_PROFILE',
  LOGIN = '@profile/LOGIN',
  LOGOUT = '@profile/LOGOUT',
}

export interface UserProps {
  fullName: string;
  age: string;
  favBook: string;
  currentlyReading: string;
  image: string;
}

export interface ProfileState {
  isLoggedIn: boolean;
  currentUser: UserProps;
}

export interface LoginProps extends Action {
  type: ProfileTypes.LOGIN;
}

export interface SetProfileProps extends Action {
  type: ProfileTypes.SET_PROFILE;
  payload: { currentUser: UserProps };
}

export interface LogoutProps extends Action {
  type: ProfileTypes.LOGOUT;
}
