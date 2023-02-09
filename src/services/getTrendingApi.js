import axios from 'axios';

const config = {
  url: '/trending/movie/week',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '69096c6df3db45b0788fb44bda629200',
  },
};

export const getTrendingApi = async () => {
  const response = await axios(config);
  return response.data.results;
};