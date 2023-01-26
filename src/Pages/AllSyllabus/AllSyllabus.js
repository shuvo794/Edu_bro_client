import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSyllabusAction } from '../../ReduxManagement/Redux/actions';
import SyllabusCart from './SyllabusCart';

const AllSyllabus = () => {
  const dispatch = useDispatch();

  const allSyllabusData = useSelector(
    (state) => state.questionsArchiveData.syllabusData
  );

  useEffect(() => {
    dispatch(getSyllabusAction());
  }, []);

  // end data store via Redux toolkit

  return (
    <div className="container text-black mt-5 mb-5">
      <div className="d-flex my-5 justify-content-center">
        <h1 className="user-desire-question">Syllabus Collection</h1>
      </div>
      {allSyllabusData.length === 0 ? (
        <div className="text-center">
          <div class="spinner-border m-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {allSyllabusData?.map((syllabuss) => (
            <SyllabusCart key={syllabuss.id} data={syllabuss}></SyllabusCart>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSyllabus;