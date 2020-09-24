import React from "react";
import Rating from "./Rating";
import { connect } from "react-redux";
import { deleteMovie, editMovie } from "../actions/actions";
import MovieModal from "./MovieModal";
import { Link } from "react-router-dom";

class MovieCard extends React.Component {
  state = {
    modalIsOpen: false
  };

  toggleModal = () => this.setState({ modalIsOpen: !this.state.modalIsOpen });

  render() {
    const movie = this.props.movie;
    return (
      <div className="movie-card">
        <div className="movie-rating">
          <Rating rating={movie.rating} />
        </div>
        <div
          className="movie-image"
          style={{
            backgroundImage: `url(${movie.image})`
          }}
        />
        <div className="movie-description">
          {movie.title} - {movie.year}
        </div>
        <div className="movie-btns">
          <button
            className="editBtn"
            onClick={() => {
              this.toggleModal();
            }}
          >
            Edit
          </button>
          {this.state.modalIsOpen && (
            <MovieModal
              modalIsOpen={this.state.modalIsOpen}
              toggleModal={this.toggleModal}
              movie={movie}
            />
          )}
          <button
            className="removeBtn"
            onClick={() => this.props.deleteMovie(movie.id)}
          >
            Delete
          </button>
        </div>
        <Link to={`/trailer/${movie.id}`}>
          <button className="trailerBtn">Watch trailer</button>
        </Link>
      </div>
    );
  }
}

//redux
const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: id => dispatch(deleteMovie(id)),
    editMovie: id => dispatch(editMovie(id))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(MovieCard);
