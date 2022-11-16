import {
  GET_ALL_GAMES,
  SEARCH_BY_NAME,
  GET_DETAIL,
  GET_GENRES,
  ORDER_BY,
  FILTER_BY,
} from "../actions";

const initialState = {
  Games: [],
  Detail: {},
  Genres: [],
};

export default function rootReducer(state = initialState, action) {
  if (action.type === GET_ALL_GAMES) {
    return {
      ...state,
      Games: action.payload,
    };
  }
  if (action.type === SEARCH_BY_NAME) {
    return {
      ...state,
      Games: action.payload,
    };
  }
  if (action.type === GET_GENRES) {
    return {
      ...state,
      Genres: action.payload,
    };
  }
  if (action.type === GET_DETAIL) {
    return {
      ...state,
      Detail: action.payload,
    };
  }
  return { ...state };
}
