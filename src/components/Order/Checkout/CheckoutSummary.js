import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

export default function CheckoutSummary(props) {
    
    return (
        <div className={classes.CheckoutSummary}>
            <h1>testttt   checkout summ</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button
                btnType="success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}
