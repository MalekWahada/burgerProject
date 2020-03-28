import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'Salad' },
    { label: 'Bacon', type: 'Bacon' },
    { label: 'Cheese', type: 'Cheese' },
    { label: 'Meat', type: 'Meat' },
]


export default function BuildControls(props) {

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong> {props.price.toFixed(2)} </strong></p>
            {controls.map(ctrl => {
                return <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientsAdded(ctrl.type)}
                    removed={() => props.ingredientsremoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            })}

            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>
            {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
        </div>
    )
}
