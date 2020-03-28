import React, {Component} from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux1/Aux1';
import Backdrop from '../Backdrop/Backdrop';


export default class Modal extends Component{
    //   could be functional component 
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    

    render(){
    return (
        <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div
            className={classes.Modal}
            style={{
                transform: this.props.show ? 'transformY(0)' : 'transformY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}
            >
                {this.props.children}
        </div>
        </Aux>
    )
}
}
