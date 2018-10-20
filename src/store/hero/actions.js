import * as types from './actionTypes';
import marvel from '../../services/marvel';

export function getHero(heroId) {
    return async(dispatch) => {
        try {
            dispatch(types.getHeroBegin());

            let hero = await marvel.getHero(heroId);
            hero.series = await marvel.getSeries(heroId);
            hero.comics = await marvel.getComics(heroId);
            hero.events = await marvel.getEvents(heroId);
            hero.stories = await marvel.getStories(heroId);
            
            dispatch(types.getHeroSuccess(hero));
        } catch (error) {
            dispatch(types.getHeroError(error))
        }
    };
}