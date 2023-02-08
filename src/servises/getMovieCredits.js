import axios from "axios";

export const getMovieCredits = async movieId => {
  const config = {
    url: `/movie/${movieId}/credits`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '69096c6df3db45b0788fb44bda629200',
    },
  };

  const response = await axios(config);
  return response.data.cast;
};