import { LOGIN, LOGOUT } from "../types";

export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    };
}
export const logout = (payload) => {
    return {
        type: LOGOUT,
        payload
    };
}