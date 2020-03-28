import * as actionTypes from './actionsTypes';
import Axios from '../../axios-orders';


export const addIngredient = (name) => {
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};


export const fetchIngredientsFailed = (ingredients) => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () =>{
    return dispatch => {
        Axios.get('https://burgerproject-a6359.firebaseio.com/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data));
            })
            .catch(err => {
                dispatch(fetchIngredientsFailed);
            })
    };
}