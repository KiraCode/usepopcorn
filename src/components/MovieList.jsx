import React from "react";
import Movie from "./ui/Movie";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
