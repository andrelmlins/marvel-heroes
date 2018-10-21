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

            let details = localStorage.getItem("hero-"+heroId);
            hero.details = details ? JSON.parse(details) : {
                superpower:"",
                group:"",
                biography:"",
                description:"",
            };
            
            dispatch(types.getHeroSuccess(hero));
        } catch (error) {
            dispatch(types.getHeroError(error))
        }
    };
}

export function sendEditHero(hero,details) {
    return async(dispatch) => {
        localStorage.setItem("hero-"+hero.id, JSON.stringify(details));
        hero.details = details;
        dispatch(types.editHeroSuccess(hero));
    };
}

export function editHero() {
    return async(dispatch) => {
        dispatch(types.editHero());
    };
}

export function editCancelHero() {
    return async(dispatch) => {
        dispatch(types.editCancelHero());
    };
}