import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  heroes: [],
  loading: false,
  error: null
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ALL_HEROES_BEGIN:
        return state.merge({
            loading: true,
            error: null
        });

    case types.ALL_HEROES_SUCCESS:
        return state.merge({
            loading: false,
            heroes: action.payload.heroes
        });

    case types.ALL_HEROES_ERROR:
        return state.merge({
            loading: false,
            error: action.payload.error
        });

    default:
        return state;
  }
}

export function getHeroes(state) {
    return state.heroes.heroes;
}

export function getLoading(state) {
    return state.heroes.loading;
}

export function getError(state) {
    return state.heroes.error;
}