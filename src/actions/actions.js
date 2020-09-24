import {
  SET_TITLE_FILTER,
  SET_RATING_FILTER,
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE
} from "../actions/actionsTypes";

export const titleFilter = payload => ({
  type: SET_TITLE_FILTER,
  payload
});
export const ratingFilter = payload => ({
  type: SET_RATING_FILTER,
  payload
});
export const addMovie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};
export const deleteMovie = id => {
  return {
    type: DELETE_MOVIE,
    payload: id
  };
};
export const editMovie = movie => {
  return {
    type: EDIT_MOVIE,
    payload: movie
  };
};
