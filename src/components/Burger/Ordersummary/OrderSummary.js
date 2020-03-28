import React, { Component } from 'react';
import Aux from '../../../hoc/Aux1/Aux1';
import Button from '../../UI/Button/Button';


export default class OrderSummary extends Component {



    componentWillUpdate(){

    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}: {this.props.ingredients[igKey]}
                    </span>
                </li>
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicous burger wuth follw ingredents </p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong> Total Price: {this.props.price} </strong></p>
                <p>Continue To Checkout !!</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }

}
