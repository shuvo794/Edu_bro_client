import { createSlice } from "@reduxjs/toolkit";

export const questionsArchiveSlice = createSlice({
     name: 'questionsArchiveData',
     initialState: {
          syllabusData: [],
          notesData:[],
          blogsData:[],
          booksData:[],
     },
     reducers: {
          setData: (state, action) => {
               state.data = action.payload
          },
          setSyllabusData: (state, action) => {
               state.syllabusData = action.payload
          },
          setNotesData: (state, action) => {
               state.notesData = action.payload
          },
          setBlogsData: (state, action) => {
               state.blogsData = action.payload
          },
          setBooksData: (state, action) => {
               state.booksData = action.payload
          },
     }
     


}) 
