import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';


class Lougout extends Component {

componentDidMount(){
    this.props.onLogout();
}

    render() {
        return (
            <Redirect to="" />
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
};

export default connect(null, mapDispatchToProps)(Lougout);