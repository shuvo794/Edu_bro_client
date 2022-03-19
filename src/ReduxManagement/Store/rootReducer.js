import { combineReducers } from "@reduxjs/toolkit";
import { questionsArchiveSlice } from "../Redux/slice";


export const rootReducer = combineReducers({
    questionsArchiveData: questionsArchiveSlice.reducer,
})