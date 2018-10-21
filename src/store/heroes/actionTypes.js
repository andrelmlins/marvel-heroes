export const ALL_HEROES_BEGIN   = 'heroes.ALL_BEGIN';
export const ALL_HEROES_SUCCESS   = 'heroes.ALL_SUCCESS';
export const ALL_SEARCH_HEROES_SUCCESS   = 'heroes.ALL_SEARCH_SUCCESS';
export const ALL_HEROES_ERROR   = 'heroes.ALL_ERROR';

export const allHeroesBegin = () => ({
    type: ALL_HEROES_BEGIN
});
  
export const allHeroesSuccess = heroes => ({
    type: ALL_HEROES_SUCCESS,
    payload: { heroes }
});  

export const allHeroesSearchSuccess = heroes => ({
    type: ALL_SEARCH_HEROES_SUCCESS,
    payload: { heroes }
});

export const allHeroesError = error => ({
    type: ALL_HEROES_ERROR,
    payload: { error }
});