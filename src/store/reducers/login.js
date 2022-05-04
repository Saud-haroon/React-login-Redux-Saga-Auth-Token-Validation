import {
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT
} from "../types";

const INITIAL_STATE = {
    isLoading: true,
    user: null,
    error: null,
    isAuthenticated: false,
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoading: true, error: null };
        case LOGIN_FAILURE:
            return { ...state, user: null, isAuthenticated: false, isLoading: false, error: action.payload };
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, isAuthenticated: true, error: null };  
        case LOGOUT:
            return { ...state, user: null, userRights: null, userActions: null, isAuthenticated: null, isLoading: null, error: null };
        default:
            return state;
    }
}