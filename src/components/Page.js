import React, { Component } from 'react';
import {Navbar,NavItem} from 'react-materialize';

const propTypes = {
    
};

const defaultProps = {
    
};

class Page extends Component {
    render() {
        return (
            <div>
                <Navbar brand='logo' left>
                    <NavItem href='get-started.html'>Getting started</NavItem>
                    <NavItem href='components.html'>Components</NavItem>
                </Navbar>

                {this.props.children}
            </div>
        )
    }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;