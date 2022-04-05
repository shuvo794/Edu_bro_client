import { questionsArchiveSlice } from "./slice";
const { actions: slice } = questionsArchiveSlice;


export const getDataAction = () => (dispatch) => {
  // dispatch()
  fetch('http://localhost:5000/allQuestions')
    .then(response => response.json())
    .then((josn) => dispatch(slice.setData(josn)))
};

export const getSyllabusAction = () => (dispatch) => {
  // dispatch()
  fetch('http://localhost:5000/allSyllabus')
    .then(response => response.json())
    .then((josn) => dispatch(slice.setSyllabusData(josn)))
}
export const getNotesAction = () => (dispatch) => {
  // dispatch()
  fetch('http://localhost:5000/allnotes')
    .then(response => response.json())
    .then((josn) => dispatch(slice.setNotesData(josn)))
}
export const getBlogsAction = () => (dispatch) => {
  // dispatch()
  fetch('http://localhost:5000/allBlogs')
    .then(response => response.json())
    .then((josn) => dispatch(slice.setBlogsData(josn)))
}
export const getBooksAction = () => (dispatch) => {
  // dispatch()
  fetch('http://localhost:5000/allBooks')
    .then(response => response.json())
    .then((josn) => dispatch(slice.setBooksData(josn)))
}