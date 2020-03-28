import React from 'react';
import classes from './Button.module.css';


export default function Button(props) {
    return (
        <button
            disabled={props.disabled}
            className={[classes.button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    )
}
