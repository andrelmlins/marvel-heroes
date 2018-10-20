export const GET_HERO_BEGIN   = 'hero.GET_BEGIN';
export const GET_HERO_SUCCESS   = 'hero.GET_SUCCESS';
export const GET_HERO_ERROR   = 'hero.GET_ERROR';

export const getHeroBegin = () => ({
    type: GET_HERO_BEGIN
  });
  
export const getHeroSuccess = hero => ({
    type: GET_HERO_SUCCESS,
    payload: { hero }
});

export const getHeroError = error => ({
    type: GET_HERO_ERROR,
    payload: { error }
});