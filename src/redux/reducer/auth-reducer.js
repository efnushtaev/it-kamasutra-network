import {headerAPI} from "../../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
            default:
                return state;
    };
}

export const setAuthUsersData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const getAuthUsersData = () => (dispatch) => {
    return headerAPI.me().then(response => {
        if (response.resultCode === 0) {
            let {
                id,
                email,
                login
            } = response.data;
            dispatch(setAuthUsersData(id, email, login, true));
        }
    });
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await headerAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUsersData());
    } else {
        let message = response.messages.length > 0 ? response.messages : 'Other error'
        dispatch(stopSubmit('login', {
            _error: message
        }))
    }
}
export const logout = () => async (dispatch) => {
    let response = await headerAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUsersData(null, null, null, false));
    }
}

export default authReducer;