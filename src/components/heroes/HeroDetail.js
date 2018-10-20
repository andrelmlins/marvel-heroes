import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab, Card, CardTitle, Button} from 'react-materialize';
import HeroDetailTab from './HeroDetailTab';

const propTypes = {
    hero: PropTypes.object
};

const defaultProps = {
    hero: {}
};

class HeroDetail extends Component {
    render() {
        return (
            <div>
                {
                    this.props.hero.thumbnail && (
                        <Card horizontal header={<CardTitle image={this.props.hero.thumbnail.path+"/portrait_xlarge."+this.props.hero.thumbnail.extension}></CardTitle>}>
                            <h4><strong>{this.props.hero.name}</strong></h4>
                            <p>
                                <strong>Description</strong>: {this.props.hero.description}
                            </p>
                            <br />
                            {
                                this.props.hero.urls && this.props.hero.urls.map((item,index) => {
                                    return <a href={item.url} target="_blank" key={index}><Button className='red m-r-10' >{item.type}</Button></a>
                                })
                            }
                        </Card>
                    )
                }
                <Tabs className='tab-demo z-depth-1'>
                    <Tab title="Series" active>
                        <HeroDetailTab list={this.props.hero.series} />
                    </Tab>
                    <Tab title="Comics">
                        <HeroDetailTab list={this.props.hero.comics} />
                    </Tab>
                    <Tab title="Stories">
                        <HeroDetailTab list={this.props.hero.stories} />
                    </Tab>
                    <Tab title="Events">
                        <HeroDetailTab list={this.props.hero.events} />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

HeroDetail.propTypes = propTypes;
HeroDetail.defaultProps = defaultProps;

export default HeroDetail;