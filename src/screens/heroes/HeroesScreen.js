import React, { Component } from 'react';

import './style.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as heroesActions from '../../store/heroes/actions'
import * as heroesSelectors from '../../store/heroes/reducer'

import HeroesList from '../../components/heroes/HeroesList/HeroesList';
import Page from '../../components/Page/Page';

class HeroesScreen extends Component {

    componentDidMount(){
        this.props.dispatch(heroesActions.allHeroes(0));
    }
  
    render() {
        return (
            <Page loading={this.props.loading}>
                <div className="HeroesScreen">
                    <HeroesList heroes={this.props.heroes} newPage={this.newPage} scroll={true} />
                </div>
            </Page>
        );
    }

    newPage = () => {
        if(this.props.page>0) this.props.dispatch(heroesActions.allHeroes(this.props.page));
    }
    
}

function mapStateToProps(state) {
    return {
        loading: heroesSelectors.getLoading(state),
        error: heroesSelectors.getError(state),
        heroes: heroesSelectors.getHeroes(state),
        page: heroesSelectors.getPage(state)
    };
}

export default withRouter(connect(mapStateToProps)(HeroesScreen));