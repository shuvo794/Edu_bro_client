import { questionsSlice } from "./slice";
const {actions: slice} = questionsSlice;

export const getDataAction = () => (dispatch) =>{
     // dispatch()
     fetch('http://localhost:5000/allQuestions')
  .then(response => response.json())
  .then((josn) => dispatch(slice.setData(josn)))
}