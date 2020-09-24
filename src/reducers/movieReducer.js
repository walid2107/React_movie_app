import {
  SET_TITLE_FILTER,
  SET_RATING_FILTER,
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE
} from "../actions/actionsTypes";
import { moviesData } from "../components/data";

const initialState = {
  movies: moviesData,
  title: "",
  rating: "0"
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };

    case EDIT_MOVIE:
      console.log("action.payload", action.payload);
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === action.payload.id ? { ...action.payload } : el
        )
      };
    case SET_TITLE_FILTER:
      return {
        ...state,
        title: action.payload
      };
    case SET_RATING_FILTER:
      return {
        ...state,
        rating: action.payload
      };
    default:
      return state;
  }
};
export default movieReducer;
