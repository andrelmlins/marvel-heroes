import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Navbar,NavItem} from 'react-materialize';
import GridLoader from 'react-spinners/GridLoader';

const propTypes = {
    loading: PropTypes.bool
};

const defaultProps = {
    loading: false
};

class Page extends Component {
    render() {
        return (
            <div>
                <Navbar color='black' right brand={<img alt="Marvel" width="160px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png" />}>
                    <NavItem href='get-started.html'>Getting started</NavItem>
                    <NavItem href='components.html'>Components</NavItem>
                </Navbar>
                {
                    this.props.loading && (
                        <div className='view-loading'>
                            <div className='sweet-loading'>
                                <GridLoader
                                    loaderStyle={{textAlign: 'center',
                                        margin:'auto',
                                        marginTop:'20%',
                                        overflow: 'hidden'}}
                                    className="loading"
                                    sizeUnit={"px"}
                                    size={50}
                                    color={'rgb(230,0,25)'}
                                    loading={this.props.loading}
                                    />
                            </div>
                        </div>
                    )
                }
                {this.props.children}
            </div>
        )
    }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;