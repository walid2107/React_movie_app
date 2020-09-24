import React, { Component } from "react";
import TitleFilter from "./TitleFilter";
import MovieList from "./MovieList";
import RatingFilter from "./RatingFilter";
import { connect } from "react-redux";
import { addMovie } from "../actions/actions";
import MovieModal from "./MovieModal";

class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    return (
      <div className="App">
        <div className="movie-app">
          <header className="movie-app-header">
            <TitleFilter />
            <RatingFilter />
          </header>
          <main className="movie-app-main">
            <MovieList />
            <div className="new-movie-card">
              <span style={{ cursor: "pointer" }} onClick={this.toggleModal}>
                +
              </span>
            </div>
            <MovieModal
              modalIsOpen={this.state.modalIsOpen}
              toggleModal={this.toggleModal}
            />
          </main>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(addMovie(movie))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieApp);
