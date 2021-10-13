import { combineReducers } from 'redux';

import font from './font';
import theme from './theme';
import profile from '~/modules/User/store/ducks/';

export default combineReducers({ font, theme, profile });
