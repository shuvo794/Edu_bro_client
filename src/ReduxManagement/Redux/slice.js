import { createSlice } from "@reduxjs/toolkit";

export const questionsSlice = createSlice({
     name:'questionsData',
     initialState:{
          data:[]
     },
     reducers:{
          setData: (state, action) =>{
               state.data  = action.payload
          }
     }

    
}) 