import axios from 'axios';

import endpoints from './endpoints.config';

const instance = axios.create({
  baseURL: endpoints.base(),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default instance;