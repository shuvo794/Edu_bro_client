import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotesAction, getSyllabusAction } from '../../ReduxManagement/Redux/actions';
import AllNotesCart from './AllNotesCart';

const AllNotes = () => {
  // const [notes, setNotes] = useState([]);
  // useEffect(() => {
  //     fetch('https://edu-bro-server-site-4dv298qzu-shuvo794.vercel.app/allnotes')
  //         .then(res => res.json())
  //         .then(data => setNotes(data))
  // }, [])

  // Start data store via Redux toolkit

  const dispatch = useDispatch();

  const allNotesData = useSelector(
    (state) => state.questionsArchiveData.notesData
  );

  useEffect(() => {
    dispatch(getNotesAction());
  }, []);

  // end data store via Redux toolkit

  return (
    <div className="container text-black mt-5 mb-5">
      <div className="d-flex my-5 justify-content-center">
        <h1 className="user-desire-question">Important Notes</h1>
      </div>
      {allNotesData.length === 0 ? (
        <div className="text-center">
          <div class="spinner-border m-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {allNotesData?.map((note) => (
            <AllNotesCart key={note.id} data={note}></AllNotesCart>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNotes;