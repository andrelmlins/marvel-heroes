
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Collection, CollectionItem} from 'react-materialize';

const propTypes = {
    list: PropTypes.array
};

const defaultProps = {
    list: []
};

class HeroDetailTab extends Component {
    render() {
        return (
            <div>
                {
                    this.props.list && this.props.list.length<=0 && (
                        <Collection>
                            <CollectionItem className="center-display center">
                                <p>
                                    <strong>No Results</strong>
                                </p>
                            </CollectionItem>
                        </Collection>
                    )
                }  
                {
                    this.props.list && this.props.list.length>0 && (
                        <Collection>
                            {
                                this.props.list.map((item,index) => {
                                    return ( 
                                        <CollectionItem key={index} className="center-display">
                                            {
                                                item.thumbnail && (
                                                    <img 
                                                        alt={item.title}
                                                        className="thumb-list"
                                                        src={item.thumbnail.path+"/portrait_xlarge."+item.thumbnail.extension} height="70px" />
                                                )
                                            }
                                            <p>
                                                <strong>{item.title}</strong>
                                                {
                                                    item.description!="" &&  (
                                                    <span><br />{item.description}</span>
                                                    )
                                                }
                                            </p>
                                        </CollectionItem>
                                    )
                                })
                            }
                        </Collection>
                    )
                }
            </div>
        )
    }
}

HeroDetailTab.propTypes = propTypes;
HeroDetailTab.defaultProps = defaultProps;

export default HeroDetailTab;