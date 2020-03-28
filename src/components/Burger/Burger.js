import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

export default function Burger(props) {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);





    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding some ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="BreadTop" />
            {transformedIngredients}
            <BurgerIngredient type="BreadBottom" />
        </div>
    )
}
