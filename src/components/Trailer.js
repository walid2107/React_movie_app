import React from "react";
import { connect } from "react-redux";

function Trailer(props) {
  return (
    <div>
      {props.movies
        .filter(el => el.id === props.match.params.id)
        .map((el, id) => (
          <div>
            <iframe height="500px" width="100%" src={el.trailer}></iframe>
          </div>
        ))}
    </div>
  );
}

//redux
const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Trailer);
