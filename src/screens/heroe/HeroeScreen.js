import React, { Component } from 'react';

import './HeroeScreen.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HeroeScreen extends Component {
    render() {
        return (
            <div className="PostsScreen">
                teste
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
}

export default withRouter(connect(mapStateToProps)(HeroeScreen));