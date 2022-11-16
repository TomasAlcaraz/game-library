import axios from "axios";
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_DETAIL = "GET_VIDEOGAME_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const ORDER_BY = "ORDER_BY";
export const FILTER_BY = "FILTER_BY";

export function getAllGames() {
  return async function (dispatch) {
    return await axios
      .get("http://localhost:3001/videogames")
      .then((res) => {
        dispatch({ type: GET_ALL_GAMES, payload: res.data });
      })
      .catch((e) => e.message);
  };
}

export function searchByName(name) {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/videogames?name=${name}`)
      .then((res) => dispatch({ type: SEARCH_BY_NAME, payload: res.data }))
      .catch((e) => e.message);
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/videogames/${id}`)
      .then((res) => dispatch({ type: GET_DETAIL, payload: res.data }))
      .catch((e) => e.message);
  };
}

export function getGenres() {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/genres`)
      .then((res) => dispatch({ type: GET_GENRES, payload: res.data }))
      .catch((e) => e.message);
  };
}
