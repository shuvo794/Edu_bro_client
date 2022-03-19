import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSyllabusAction } from '../../ReduxManagement/Redux/actions';
import SyllabusCart from './SyllabusCart';

const AllSyllabus = () => {

    // const [syllabus, setSyllabus] = useState([]);
    // useEffect(() => {
    //     fetch('https://blooming-sierra-74368.herokuapp.com/allSyllabus')
    //         .then(res => res.json())
    //         .then(data => setSyllabus(data))
    // }, [])

    // Start data store via Redux toolkit 

    const dispatch = useDispatch()

    const allSyllabusData = useSelector( (state)=> state.questionsArchiveData.syllabusData)

    useEffect(()=>{
        dispatch(getSyllabusAction())
      },[])

    // end data store via Redux toolkit 


    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Syllabus Collection</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {allSyllabusData?.map((syllabuss) => (

                    <SyllabusCart
                        key={syllabuss.id}
                        data={syllabuss}>

                    </SyllabusCart>

                ))}
            </div>

        </div>
    );
};

export default AllSyllabus;