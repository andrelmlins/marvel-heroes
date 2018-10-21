import React, { Component } from 'react';
import { Card, Button, Input, Row, Col } from 'react-materialize';

import './style.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as heroesActions from '../../store/heroes/actions'
import * as heroesSelectors from '../../store/heroes/reducer'

import HeroesList from '../../components/heroes/HeroesList';
import Page from '../../components/Page';

class HeroesSearchScreen extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            search: ""
        }
    }

    render() {
        return (
            <Page loading={this.props.loading}>
                <div className="HeroesSearchScreen">
                    <Card>
                        <Row>
                            <Input name="search" l={10} s={12} label="Search Hero..." onChange={(event) => this.setState({search:event.target.value})} />
                            <Col l={2} s={12}>
                            <Button className="red" waves='light' onClick={this.search}>Search</Button>
                            </Col>
                        </Row>
                    </Card>
                    <HeroesList heroes={this.props.heroes} onClick="" scroll={false} />
                    {
                        this.props.heroes.length==0 && this.props.search && (
                            <Card className="center">
                                <p>
                                    <strong>No Results</strong>
                                </p>
                            </Card>
                        )
                    }
                </div>
            </Page>
        );
    }

    search = () => {
        this.props.dispatch(heroesActions.searchHeroes(this.state.search));
    }
    
}

function mapStateToProps(state) {
    return {
        loading: heroesSelectors.getLoading(state),
        error: heroesSelectors.getError(state),
        heroes: heroesSelectors.getHeroes(state),
        search: heroesSelectors.getSearch(state)
    };
}

export default withRouter(connect(mapStateToProps)(HeroesSearchScreen));