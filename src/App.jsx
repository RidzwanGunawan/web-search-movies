import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./Api.jsx";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const ListPopularMovies = () => {
    return popularMovies.map((movie, i) => {
      const releaseDate = movie.release_date;
      const year = new Date(releaseDate).getFullYear();
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-img"
            src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${
              movie.poster_path
            }`}
            alt=""
          />
          <div className="Movie-date">{year}</div>
          {/* <div className="Movie-rate">{movie.vote_average}</div> */}
        </div>
      );
    });
  };

  // console.log({ PopularMovies: popularMovies });

  return (
    <>
      <header>
        <h1>Welcome To My Web Wan Search Movie 🎬</h1>
        <input
          type="text"
          placeholder="Search Your Favorit Movie..."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <ListPopularMovies />
        </div>
      </header>
    </>
  );
}

export default App;
