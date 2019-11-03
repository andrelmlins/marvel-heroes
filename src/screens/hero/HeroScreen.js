import React, { Component } from "react";

import "./style.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as heroActions from "../../store/hero/actions";
import * as heroSelectors from "../../store/hero/reducer";

import Page from "../../components/Page/Page";
import HeroDetail from "../../components/heroes/HeroDetail/HeroDetail";

class HeroScreen extends Component {
  async componentDidMount() {
    await this.props.dispatch(
      heroActions.getHero(this.props.match.params.heroId)
    );
  }

  render() {
    return (
      <Page loading={this.props.loading}>
        <div>
          <HeroDetail
            hero={this.props.hero}
            edit={this.props.edit}
            clickEdit={this.clickEdit}
            clickCancelEdit={this.clickCancelEdit}
            submitEdition={this.submitEdition}
          />
        </div>
      </Page>
    );
  }

  clickEdit = () => {
    this.props.dispatch(heroActions.editHero());
  };

  clickCancelEdit = () => {
    this.props.dispatch(heroActions.editCancelHero());
  };

  submitEdition = details => {
    this.props.dispatch(heroActions.sendEditHero(this.props.hero, details));
  };
}

function mapStateToProps(state) {
  return {
    loading: heroSelectors.getLoading(state),
    error: heroSelectors.getError(state),
    hero: heroSelectors.getHero(state),
    edit: heroSelectors.getEdit(state)
  };
}

export default withRouter(connect(mapStateToProps)(HeroScreen));
