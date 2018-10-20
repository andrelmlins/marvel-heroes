import React, { Component } from 'react';

import './HeroScreen.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as heroActions from '../../store/hero/actions'
import * as heroSelectors from '../../store/hero/reducer'

import Page from '../../components/Page';
import HeroDetail from '../../components/heroes/HeroDetail';

class HeroScreen extends Component {

    async componentDidMount(){
        await this.props.dispatch(heroActions.getHero(this.props.match.params.heroId));
    }

    render() {
        return (
            <Page loading={this.props.loading}>
                <div>
                    <HeroDetail hero={this.props.hero}></HeroDetail>
                    
                </div>
            </Page>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: heroSelectors.getLoading(state),
        error: heroSelectors.getError(state),
        hero: heroSelectors.getHero(state),
    };
}

export default withRouter(connect(mapStateToProps)(HeroScreen));