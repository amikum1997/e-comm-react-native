import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";


export default combineReducers({userReducer})