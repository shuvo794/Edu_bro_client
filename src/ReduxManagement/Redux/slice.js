import { createSlice } from "@reduxjs/toolkit";

export const questionsSlice = createSlice({
     name: 'questionsData',
     initialState: {
          data: [],
          allData: [],
          notesData:[]
     },
     reducers: {
          setData: (state, action) => {
               state.data = action.payload
          },
          setSyllabusData: (state, action) => {
               state.allData = action.payload
          },
          setNotesData: (state, action) => {
               state.notesData = action.payload
          },
     }
     


}) 
