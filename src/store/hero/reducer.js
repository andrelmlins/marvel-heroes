import * as types from './actionTypes';

const initialState = {
  hero: {},
  loading: false,
  error: null,
  edit: false
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.GET_HERO_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case types.GET_HERO_SUCCESS:
            return {
                ...state,
                loading: false,
                hero: action.payload.hero,
            };

        case types.GET_HERO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case types.EDIT_HERO:
            return {
                ...state,
                edit: true
            };

        case types.EDIT_CANCEL_HERO:
            return {
                ...state,
                edit: false
            };

        case types.EDIT_HERO_SUCCESS:
            return {
                ...state,
                edit: false,
                hero: action.payload.hero
            };

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

export function getEdit(state) {
    return state.hero.edit;
}