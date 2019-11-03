import React, { useEffect } from "react";

import "./style.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as heroesActions from "../../store/heroes/actions";
import * as heroesSelectors from "../../store/heroes/reducer";

import HeroesList from "../../components/heroes/HeroesList/HeroesList";
import Page from "../../components/Page/Page";

const HeroesScreen = ({ dispatch, ...props }) => {
  useEffect(() => {
    dispatch(heroesActions.allHeroes(0));
  }, [dispatch]);

  return (
    <Page loading={props.loading}>
      <div className="HeroesScreen">
        <HeroesList
          heroes={props.heroes}
          newPage={() => {
            if (props.page > 0) dispatch(heroesActions.allHeroes(props.page));
          }}
          scroll={true}
        />
      </div>
    </Page>
  );
};

const mapStateToProps = state => ({
  loading: heroesSelectors.getLoading(state),
  error: heroesSelectors.getError(state),
  heroes: heroesSelectors.getHeroes(state),
  page: heroesSelectors.getPage(state)
});

export default withRouter(connect(mapStateToProps)(HeroesScreen));
