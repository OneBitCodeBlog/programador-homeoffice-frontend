import axios from 'axios';

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

const url = axios.create({ baseURL: apiUrl });

export default {
  jobSearch: () => url.get(''),

  LatestJobs: () => url.get(''),

  CreateAlarm: () => url.post(''),
};
