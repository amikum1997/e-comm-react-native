import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";



export async function createReduxStore() {
  const combinedReducer = combineReducers({
    user: userReducer
  });
  
  const rootReducer = (state, action) => {
    return combinedReducer(state, action);
  };

  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}