import React from 'react';
import burgerLogo from '../../assets/burger-logo.png';
import classes from './Logo.module.css';


export default function Logo(props) {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="MyBurger"/>
        </div>
    )
}
