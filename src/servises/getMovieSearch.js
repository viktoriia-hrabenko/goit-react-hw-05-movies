import axios from 'axios';

export const getMovieSearch = async params => {
  const config = {
    url: `/search/movie`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '69096c6df3db45b0788fb44bda629200',
      query: params,
    },
  };

  const response = await axios(config);
  return response.data.results;
};