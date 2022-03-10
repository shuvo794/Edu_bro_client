import { combineReducers } from "@reduxjs/toolkit";
import { questionsSlice } from "../Redux/slice";


export const rootReducer = combineReducers({
    questionsData: questionsSlice.reducer
})