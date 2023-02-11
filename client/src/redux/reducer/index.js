import {
  GET_ALL_GAMES,
  SEARCH_BY_NAME,
  GET_DETAIL,
  GET_GENRES,
  ORDER_BY,
  FILTER_BY,
  GET_SEARCHED_GAMES,
  CLEAR_DETAIL,
  CLEAR_GAMES,
  CLEAR_FILTERS,
  SET_PAGE,
} from "../actions";

const initialState = {
  Games: [],
  Detail: {},
  Genres: [],
  Filters: [],
  Page: [],
};

export default function rootReducer(state = initialState, action) {
  if (action.type === CLEAR_DETAIL) {
    return {
      ...state,
      Detail: {},
    };
  }
  if (action.type === CLEAR_GAMES) {
    return {
      ...state,
      Games: [],
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      Filters: [],
    };
  }
  if (action.type === GET_ALL_GAMES) {
    return {
      ...state,
      Games: action.payload,
    };
  }
  if (action.type === GET_SEARCHED_GAMES) {
    const allGames = state.Filters;
    const searched = allGames.filter((game) =>
      game.name.toLowerCase().includes(action.payload.toLowerCase())
    );
    return {
      ...state,
      Filters: searched,
    };
  }
  if (action.type === GET_DETAIL) {
    return {
      ...state,
      Detail: action.payload,
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
  if (action.type === FILTER_BY) {
    if (action.order === "genres") {
      const allGames = state.Games;
      const gamesAPI = allGames.filter((game) =>
        game.genres.includes(action.payload)
      );

      return {
        ...state,
        Filters: gamesAPI,
      };
    }
    if (action.order === "origin") {
      if (action.payload === "db") {
        const result = state.Games.filter((game) => game.id > 100000)
        console.log(result);
        return {
          ...state,
          Filters: state.Games.filter((game) => game.id > 1000000),
        };
      }
      if (action.payload === "api") {
        return {
          ...state,
          Filters: state.Games.filter((game) => game.id < 10000),
        };
      }
    }
  }
  if (action.type === ORDER_BY) {
    if (action.order === "aphabeticaly") {
      const select = state.Filters.length ? state.Filters : state.Games;
      if (action.payload === "AZ") {
        return {
          ...state,
          Filters: [...select].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        };
      }

      if (action.payload === "ZA") {
        return {
          ...state,
          Filters: [...select].sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }),
        };
      }
    }
    if (action.order === "rating") {
      const select = state.Filters.length ? state.Filters : state.Games;
      if (action.payload === "highest") {
        return {
          ...state,
          Filters: [...select].sort((prev, next) => next.rating - prev.rating),
        };
      }
      if (action.payload === "lowest") {
        return {
          ...state,
          Filters: [...select].sort((prev, next) => prev.rating - next.rating),
        };
      }
    }
  }
  if (action.type === SET_PAGE) {
    return {
      ...state,
      Page: action.payload,
    };
  }
  return { ...state };
}
