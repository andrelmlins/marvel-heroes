import React, { useEffect } from "react";

import "./style.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as heroActions from "../../store/hero/actions";
import * as heroSelectors from "../../store/hero/reducer";

import Page from "../../components/Page/Page";
import HeroDetail from "../../components/heroes/HeroDetail/HeroDetail";

const HeroScreen = ({ dispatch, match, ...props }) => {
  useEffect(() => {
    dispatch(heroActions.getHero(match.params.heroId));
  }, [dispatch, match]);

  return (
    <Page loading={props.loading}>
      <div>
        <HeroDetail
          hero={props.hero}
          edit={props.edit}
          clickEdit={() => dispatch(heroActions.editHero())}
          clickCancelEdit={() => dispatch(heroActions.editCancelHero())}
          submitEdition={details =>
            dispatch(heroActions.sendEditHero(props.hero, details))
          }
        />
      </div>
    </Page>
  );
};

const mapStateToProps = state => ({
  loading: heroSelectors.getLoading(state),
  error: heroSelectors.getError(state),
  hero: heroSelectors.getHero(state),
  edit: heroSelectors.getEdit(state)
});

export default withRouter(connect(mapStateToProps)(HeroScreen));
