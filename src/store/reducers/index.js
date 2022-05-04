import { combineReducers } from "redux";
import {AuthReducer} from './login'

const appReducer = combineReducers({
    login: AuthReducer,
   
});

export default appReducer;