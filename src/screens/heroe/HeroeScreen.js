import React, { Component } from 'react';

import './HeroeScreen.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as heroActions from '../../store/hero/actions'
import * as heroSelectors from '../../store/hero/reducer'

import Page from '../../components/Page';

class HeroeScreen extends Component {

    componentDidMount(){
        this.props.dispatch(heroActions.getHero(this.props.match.params.heroId));
    }

    render() {
        return (
            <div className="PostsScreen">
                <Page loading={this.props.loading}>
                    teste
                </Page>
            </div>
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

export default withRouter(connect(mapStateToProps)(HeroeScreen));