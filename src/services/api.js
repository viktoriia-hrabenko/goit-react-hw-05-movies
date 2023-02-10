import axios from 'axios';

axios.default.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '69096c6df3db45b0788fb44bda629200';

export const getTrendingApi = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );

  return response.data.results;
};

export const getMovieSearch = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
  );

  return response.data.results;
};

export const getMovieDetailsById = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );

  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );

  return response.data.results;
};