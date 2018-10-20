import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Card} from 'react-materialize';
import { Link } from "react-router-dom";

const propTypes = {
    heroes: PropTypes.array
};

const defaultProps = {
    heroes: []
};

class HeroesList extends Component {
    render() {
        return (
            <Row>
                {
                    this.props.heroes.map((item,index) => {
                        return (
                            <Col s={6} m={4} l={3}  key={index}>
                                <Card 
                                    header={
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <img 
                                                alt={item.name}
                                                src={item.thumbnail.path+"/portrait_xlarge."+item.thumbnail.extension}
                                                onError={(e)=>{e.target.onerror = null; e.target.src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg"}}/>
                                        </div>
                                    }
                                    title={item.name}>
                                    <p><Link to={"/heroes/"+item.id}>Saiba mais...</Link></p>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        )
    }
}

HeroesList.propTypes = propTypes;
HeroesList.defaultProps = defaultProps;

export default HeroesList;