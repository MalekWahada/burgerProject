import * as actiontypes from './actionsTypes';
import axios from '../../axios-orders';

// .env sigin and signup urls
const SIGN_IN_URL = process.env.REACT_FIREBASE_SIGN_IN_URL;
const SIGN_UP_URL = process.env.REACT_FIREBASE_SIGN_UP_URL;


export const authStart = () => {
    return {
        type: actiontypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actiontypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actiontypes.AUTH_FAIL,
        error: error
    };
};


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId')
    return {
        type: actiontypes.AUTH_LOGOUT
    };
};



export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        //  a link for Sign UP and the other for Sign IN 
        let url = SIGN_UP_URL;
        if (!isSignUp) {
            url = SIGN_IN_URL;
        }
        axios.post(url, authData)
            .then(res => {
                const expirationDate = new Date().getTime() + res.data.expiresIn * 1000;

                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', new Date(expirationDate));
                localStorage.setItem('userId', res.data.localId);

                dispatch(authSuccess(res.data.idToken, res.data.localId));
                dispatch(checkAuthTimeout(res.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));

            })
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actiontypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            // loaded as string from localstorage and convert it to a date
            const expirationDate = new Date(localStorage.getItem('expirationDate'));

            if (expirationDate <= new Date()) {

                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}