import {userReducer} from "./user/reducer";
import {combineReducers} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  userReducer: userReducer.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;