import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title, rating }) => {
  return (
    <div className="movie-list">
      {movies
        .filter(
          el =>
            el.rating >= rating &&
            el.title.toLowerCase().includes(title.toLowerCase().trim())
        )
        .map((movie, i) => (
          <div>
            <MovieCard movie={movie} key={i} />
          </div>
        ))}
    </div>
  );
};

//redux
const mapStateToProps = state => {
  return {
    movies: state.movies,
    title: state.title,
    rating: state.rating
  };
};

export default connect(mapStateToProps)(MovieList);
