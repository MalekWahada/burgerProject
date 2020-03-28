import React, { Component } from 'react';

import Aux from '../Aux1/Aux1';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class layout extends Component {

    state = {
        showSideDrower: false
    }

    sideDrowerClosedHandler = () => {
        this.setState({ showSideDrower: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrower: !prevState.showSideDrower };
        });
    }
    render() {
        return (
            <Aux>
                {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    isAuth={this.props.isAuthenticated}
                />
                <SideDrawer
                    open={this.state.showSideDrower}
                    closed={this.sideDrowerClosedHandler}
                    isAuth={this.props.isAuthenticated}
                />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};


export default connect(mapStateToProps)(layout);