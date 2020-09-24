import React from "react";
import { Modal } from "react-bootstrap";
import { addMovie, editMovie } from "../actions/actions";
import { connect } from "react-redux";

class MovieModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ubRiXyQyGnzxobusDb0NVXzxrEcCyqUC2UfL7FJLf8FQjGmT&s",
      rating: ""
    };
  }
  componentDidMount() {
    if (this.props.movie)
      this.setState({
        id: this.props.movie.id,
        title: this.props.movie.title,
        year: this.props.movie.year,
        image: this.props.movie.image,
        rating: this.props.movie.rating
      });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, year, rating, image } = this.state;
    if (this.props.movie) {
      this.props.editMovie(this.state);
    } else {
      this.props.addMovie({
        id: Date.now(),
        title,
        year,
        rating,
        image
      });
    }
  };

  render() {
    console.log("this.props", this.props.movie);
    return (
      <div>
        <Modal
          show={this.props.modalIsOpen}
          onSubmit={this.props.toggleModal}
          onHide={this.props.toggleModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <label>Title:</label>
              <input
                placeholder="Put the title of the movie"
                onChange={this.handleChange}
                defaultValue={this.state.title}
                name="title"
              />
              <label>Year:</label>
              <input
                placeholder="Put the year of the movie"
                onChange={this.handleChange}
                defaultValue={this.state.year}
                name="year"
              />
              <label>Rating:</label>
              <input
                placeholder="put the rating of the movie"
                onChange={this.handleChange}
                defaultValue={this.state.rating}
                name="rating"
              />
              <label>image:</label>
              <input
                placeholder="put the URL image"
                onChange={this.handleChange}
                defaultValue={this.state.image}
                name="image"
              />
              <button>Submit</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

//redux
const mapDispatchToProps = dispatch => ({
  addMovie: movie => dispatch(addMovie(movie)),
  editMovie: movie => dispatch(editMovie(movie))
});
export default connect(
  null,
  mapDispatchToProps
)(MovieModal);
