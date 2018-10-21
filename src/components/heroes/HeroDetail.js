import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Card, CardTitle, Button, Input, Row } from 'react-materialize';
import HeroDetailTab from './HeroDetailTab';

const propTypes = {
    hero: PropTypes.object,
    clickEdit: PropTypes.func,
    clickCancelEdit: PropTypes.func,
    submitEdition: PropTypes.func
};

const defaultProps = {
    hero: {}
};

class HeroDetail extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            superpower: props.hero.details ? props.hero.details.superpower : "",
            group: props.hero.details ? props.hero.details.group : "",
            biography: props.hero.details ? props.hero.details.biography : "",
            description: props.hero.details ? (props.hero.details.description==="" ? props.hero.description : props.hero.details.description) : ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = ( event ) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
          [name]: value
        });
    }

    clickEdit(){
        this.props.clickEdit();
    }

    clickCancel(){
        this.props.clickCancelEdit();
    }

    submitEdition(){
        this.props.submitEdition(this.state);
    }

    render() {
        return (
            <div>
                {
                    this.props.hero.thumbnail && (
                        <Card horizontal header={<CardTitle image={this.props.hero.thumbnail.path+"/portrait_xlarge."+this.props.hero.thumbnail.extension}></CardTitle>}>
                            <h4><strong>{this.props.hero.name}</strong></h4>
                            <br />
                            <Button className='blue m-r-10' onClick={() => this.clickEdit()}>Edit Hero</Button>
                            {
                                this.props.hero.urls && this.props.hero.urls.map((item,index) => {
                                    return <a href={item.url} target="_blank" rel="noopener noreferrer" key={index}><Button className='red m-r-10' >{item.type}</Button></a>
                                })
                            }
                        </Card>
                    )
                }
                <div  style={{display: !this.props.edit ? "block" : "none" }}>
                    <Tabs className='tab-demo z-depth-1'>
                        <Tab title="Details" active>
                            <Card>
                                <p><strong>Super Power:</strong> {this.props.hero.details ? this.props.hero.details.superpower : ""}</p>
                                <p><strong>Group:</strong> {this.props.hero.details ? this.props.hero.details.group : ""}</p>
                                <p><strong>Biography:</strong> {this.props.hero.details ? this.props.hero.details.biography : ""}</p>
                                <p><strong>Description:</strong> {this.props.hero.details ? this.state.description : ""}</p>
                            </Card>
                        </Tab>
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
                <Card style={{display: this.props.edit ? "block" : "none" }}>
                    <h4>Edit Hero "{this.props.hero.name}"</h4>
                    <Row>
                        <Input s={6}
                            label="Super Power"
                            name="superpower"
                            defaultValue={this.state.superpower}
                            onChange={this.handleInputChange}  />
                        <Input s={6}
                            label="Group"
                            name="group"
                            defaultValue={this.state.group}
                            onChange={this.handleInputChange}  />
                        <Input s={12}
                            type='textarea'
                            name="biography"
                            label="Biography"
                            defaultValue={this.state.biography}
                            onChange={this.handleInputChange}  />
                        <Input s={12}
                            type='textarea'
                            name="description"
                            label="Description"
                            defaultValue={this.state.description}
                            onChange={this.handleInputChange}  />
                    </Row>
                    <div className="right">
                        <Button className='grey' onClick={() => this.clickCancel()}>Cancel</Button>&emsp;
                        <Button className='red' onClick={() => this.submitEdition()}>Submit Edition</Button>
                    </div>
                    <br /><br />
                </Card>
            </div>
        )
    }
}

HeroDetail.propTypes = propTypes;
HeroDetail.defaultProps = defaultProps;

export default HeroDetail;