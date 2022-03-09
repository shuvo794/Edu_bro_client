import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../../ReduxManagement/Redux/actions';
import QuestionCart from './QuestionCart';

const AllQuestions = () => {
    const [questions, setQuestions] = useState([]);



    // useEffect(() => {
    //     fetch('http://localhost:5000/allQuestions')
    //         .then(res => res.json())
    //         .then(data => setQuestions(data))
    // }, [])





    const department = ''
    const year = ''
    const status = 'approve'
    useEffect(() => {
        fetch(`http://localhost:5000/allQuestions?department=${department}&&year=${year}&&status=${status}`)
            .then(res => res.json())
            .then(data => {
                setQuestions(data)

                // setQuestions(data.blogs)
                // const count = data.count;
                // const pageNumber = Math.ceil(count / size)
                // setPageCount(pageNumber)
            })
    }, [])





    // Start data store via Redux toolkit 

    // const dispatch = useDispatch()

    // const allQuestionsData = useSelector( (state)=> state.questionsData.data)

    // useEffect(()=>{
    //     dispatch(getDataAction())
    //   },[])

    // end data store via Redux toolkit 

    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Desire Questions</h1></div>
            {questions.length ? <div className="row row-cols-1 row-cols-md-3 g-4">
                {questions?.map((question) => (
                    <QuestionCart
                        key={question.id}
                        data={question}>
                    </QuestionCart>
                ))}
            </div> : <div><h5>Loading...</h5></div>}

        </div>
    );
};

export default AllQuestions;