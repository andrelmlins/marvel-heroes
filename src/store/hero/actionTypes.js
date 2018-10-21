export const GET_HERO_BEGIN   = 'hero.GET_BEGIN';
export const GET_HERO_SUCCESS   = 'hero.GET_SUCCESS';
export const GET_HERO_ERROR   = 'hero.GET_ERROR';
export const EDIT_HERO   = 'hero.EDIT';
export const EDIT_CANCEL_HERO   = 'hero.EDIT_CANCEL';
export const EDIT_HERO_SUCCESS   = 'hero.EDIT_SUCCESS';

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

export const editHero = () => ({
    type: EDIT_HERO
});

export const editCancelHero = () => ({
    type: EDIT_CANCEL_HERO
});

export const editHeroSuccess = hero => ({
    type: EDIT_HERO_SUCCESS,
    payload: { hero }
});