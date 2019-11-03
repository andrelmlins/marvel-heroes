import React, { useState } from "react";
import { Card, Button, TextInput, Row, Col } from "react-materialize";

import "./style.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as heroesActions from "../../store/heroes/actions";
import * as heroesSelectors from "../../store/heroes/reducer";

import HeroesList from "../../components/heroes/HeroesList/HeroesList";
import Page from "../../components/Page/Page";

const HeroesSearchScreen = props => {
  const [search, setSearch] = useState("");

  return (
    <Page loading={props.loading}>
      <div className="HeroesSearchScreen">
        <Card>
          <Row>
            <TextInput
              l={10}
              s={12}
              name="search"
              label="Search Hero..."
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
            <Col l={2} s={12}>
              <Button
                className="red"
                waves="light"
                onClick={() => {
                  props.dispatch(heroesActions.searchHeroes(search));
                }}
              >
                Search
              </Button>
            </Col>
          </Row>
        </Card>
        <HeroesList heroes={props.heroes} onClick="" scroll={false} />
        {props.heroes.length === 0 && props.search && (
          <Card className="center">
            <p>
              <strong>No Results</strong>
            </p>
          </Card>
        )}
      </div>
    </Page>
  );
};

const mapStateToProps = state => ({
  loading: heroesSelectors.getLoading(state),
  error: heroesSelectors.getError(state),
  heroes: heroesSelectors.getHeroes(state),
  search: heroesSelectors.getSearch(state)
});

export default withRouter(connect(mapStateToProps)(HeroesSearchScreen));
