import { questionsSlice } from "./slice";
const { actions: slice } = questionsSlice;


export const getDataAction = () => (dispatch) => {
  // dispatch()
  fetch('https://blooming-sierra-74368.herokuapp.com/allQuestions')
    .then(response => response.json())
    .then((josn) => dispatch(slice.setData(josn)))
};

export const getSyllabusAction = () => (dispatch) => {
  // dispatch()
  fetch('https://blooming-sierra-74368.herokuapp.com/allSyllabus')
    .then(response => response.json())
    .then((josn) => dispatch(slice.setSyllabusData(josn)))
}
export const getNotesAction = () => (dispatch) => {
  // dispatch()
  fetch('https://blooming-sierra-74368.herokuapp.com/allnotes')
    .then(response => response.json())
    .then((josn) => dispatch(slice.setNotesData(josn)))
}