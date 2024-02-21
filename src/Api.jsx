import axios from "axios";

const baseurl = import.meta.env.VITE_REACT_APP_BASEURL;
const apikey = import.meta.env.VITE_REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseurl}/movie/popular?page=1&api_key=${apikey}`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseurl}/search/movie?query=${q}&page=1&api_key=${apikey}`
  );
  return search.data;
};
