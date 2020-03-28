import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

export default function NavigationItem(props) {
    return (
        <li className={classes.NavigationItem}>
            <NavLink
                to={props.link}
                exact={props.exact}
                activeClassName={classes.active}>
            {props.children} </NavLink>
        </li>
    )
}
