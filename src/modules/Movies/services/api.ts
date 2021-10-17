import axios from 'axios';

import { BASE_PATH } from '~/modules/Movies/constants';

const api = axios.create({
  baseURL: BASE_PATH,
});

export default api;
