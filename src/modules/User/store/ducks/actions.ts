import { action } from 'typesafe-actions';
import {
  LoginProps,
  LogoutProps,
  ProfileTypes,
  SetProfileProps,
  UserProps,
} from './types';

export const loginAction = (): LoginProps => action(ProfileTypes.LOGIN);

export const setProfileAction = (currentUser: UserProps): SetProfileProps =>
  action(ProfileTypes.SET_PROFILE, { currentUser });

export const logoutAction = (): LogoutProps => action(ProfileTypes.LOGOUT);
