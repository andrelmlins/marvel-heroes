import * as types from './actionTypes';
import marvel from '../../services/marvel';

export function allHeroes() {
    return async(dispatch) => {
        try {
            dispatch(types.allHeroesBegin());

            const heroes = await marvel.allHeroes();
            
            dispatch(types.allHeroesSuccess(heroes));
        } catch (error) {
            dispatch(types.allHeroesError(error))
        }
    };
}