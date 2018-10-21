import * as types from './actionTypes';

const initialState = {
  heroes: [],
  loading: false,
  error: null
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ALL_HEROES_BEGIN:
        return {
            ...state,
            loading: true,
            error: null
        };

    case types.ALL_HEROES_SUCCESS:
        return {
            ...state,
            loading: false,
            heroes: action.payload.heroes
        };

    case types.ALL_HEROES_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload.error
        };

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