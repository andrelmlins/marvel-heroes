import React, { Component } from 'react';

import './HeroesScreen.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as heroesActions from '../../store/heroes/actions'
import * as heroesSelectors from '../../store/heroes/reducer'

import HeroesList from '../../components/heroes/HeroesList';
import Page from '../../components/Page';

class HeroesScreen extends Component {

    componentDidMount(){
        this.props.dispatch(heroesActions.allHeroes());
    }
  
    render() {
        return (
            <Page loading={this.props.loading}>
                <div className="HeroesScreen">
                    <HeroesList heroes={this.props.heroes} />
                </div>
            </Page>
        );
    }
    
}

function mapStateToProps(state) {
    return {
        loading: heroesSelectors.getLoading(state),
        error: heroesSelectors.getError(state),
        heroes: heroesSelectors.getHeroes(state),
    };
}

export default withRouter(connect(mapStateToProps)(HeroesScreen));