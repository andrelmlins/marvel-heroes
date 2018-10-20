import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  hero: {},
  loading: false,
  error: null
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_HERO_BEGIN:
        return state.merge({
            loading: true,
            error: null
        });

    case types.GET_HERO_SUCCESS:
        return state.merge({
            loading: false,
            heroes: action.payload.heroes
        });

    case types.GET_HERO_ERROR:
        return state.merge({
            loading: false,
            error: action.payload.error
        });

    default:
        return state;
  }
}

export function getHero(state) {
    return state.hero.hero;
}

export function getLoading(state) {
    return state.hero.loading;
}

export function getError(state) {
    return state.hero.error;
}