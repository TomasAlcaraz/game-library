import axios from "axios";
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const ORDER_BY = "ORDER_BY";
export const FILTER_BY = "FILTER_BY";
export const GET_SEARCHED_GAMES = "GET_SEARCHED_GAMES";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const CLEAR_GAMES = "CLEAR_GAMES";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

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

// export function searchByName(payload) {
//   return function (dispatch) {
//     dispatch({type: SEARCH_BY_NAME, payload});
//   }
// }

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

export function filterBy(order, payload) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY, order, payload });
  };
}

export function orderBy(order, payload) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY, order, payload });
  };
}

export function addGame(payload) {
  return async function () {
    return await axios
    .post(`http://localhost:3001/videogames`, payload)
    .then((res) => console.log(res))
    .catch((e) => e.message);
  };
}

export function clearDetail(payload) {
  return function (dispatch) {
    dispatch({ type: CLEAR_DETAIL, payload });
  };
}

export function clearGames(payload) {
  return function (dispatch) {
    dispatch({ type: CLEAR_GAMES, payload });
  };
}

export function clearFilters(payload) {
  return function (dispatch) {
    dispatch({ type: CLEAR_FILTERS, payload });
  };
}

export function getSearchedGames(payload) {
  return function (dispatch) {
    dispatch({type: GET_SEARCHED_GAMES, payload});
  }
}
// export function postNewGame (payload) {
  //   return async function(dispatch) {
//       var json = await axios.post(`http://localhost:3001/videogame`, payload)
//       console.log(json)
//       return json
//   }
// }
