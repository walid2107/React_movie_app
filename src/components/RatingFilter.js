import React from "react";
import Rating from "./Rating";
import { ratingFilter } from "../actions/actions";
import { connect } from "react-redux";

const RatingFilter = ({ ratingFilter, minRating }) => (
  <div className="rating-filter">
    <span className="rating-filter-text">Minimum Rating</span>
    <Rating rating={minRating} onchangeRating={ratingFilter} />
  </div>
);
const mapStateToProps = state => ({
  minRating: state.rating
});

//redux
export default connect(
  mapStateToProps,
  {
    ratingFilter
  }
)(RatingFilter);
