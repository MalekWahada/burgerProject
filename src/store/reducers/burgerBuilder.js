import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../../shared/utility';

const INGREDIENTS_PRICES = {
    Salad: 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7
}

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const addIngredient = (state, action) => {
    const updatedIngrds = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updateIngrds = updateObject(state.ingredients, updatedIngrds);
    const updatedState1 = {
        ingredients: updateIngrds,
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState1);
}

const removeIngredient = (state, action) => {
    const updatedIngs = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updateIngs = updateObject(state.ingredients, updatedIngs);
    const updatedState = {
        ingredients: updateIngs,
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
}


const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            Salad: action.ingredients.Salad,
            Bacon: action.ingredients.Bacon,
            Cheese: action.ingredients.Cheese,
            Meat: action.ingredients.Meat,
        },
        totalPrice: 4,
        error: false,
        building: false
    });
}

const fetchIngredients = (state, action) => {
    return updateObject(state, { error: true });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredient(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredients(state, action);
        default: return state;
    }


};

export default reducer;