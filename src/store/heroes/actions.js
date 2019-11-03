import * as types from "./actionTypes";
import marvel from "../../services/marvel";

export function allHeroes(page) {
  return async dispatch => {
    try {
      if (page === 0) dispatch(types.allHeroesBegin());

      const heroes = await marvel.allHeroes(page);

      dispatch(types.allHeroesSuccess(heroes));
    } catch (error) {
      dispatch(types.allHeroesError(error));
    }
  };
}

export function searchHeroes(search) {
  return async dispatch => {
    try {
      dispatch(types.allHeroesBegin());

      const heroes = await marvel.searchHeroes(search);

      dispatch(types.allHeroesSearchSuccess(heroes));
    } catch (error) {
      dispatch(types.allHeroesError(error));
    }
  };
}
