import * as types from './actionTypes';
import marvel from '../../services/marvel';

export function getHero() {
    return async(dispatch) => {
        try {
            dispatch(types.getHeroBegin());

            const hero = await marvel.getHero();
            
            dispatch(types.getHeroSuccess(hero));
        } catch (error) {
            dispatch(types.getHeroError(error))
        }
    };
}