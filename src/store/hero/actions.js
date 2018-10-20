import * as types from './actionTypes';
import marvel from '../../services/marvel';

export function getHero(heroId) {
    return async(dispatch) => {
        try {
            dispatch(types.getHeroBegin());

            const hero = await marvel.getHero(heroId);
            
            dispatch(types.getHeroSuccess(hero));
        } catch (error) {
            dispatch(types.getHeroError(error))
        }
    };
}