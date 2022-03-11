import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../../ReduxManagement/Redux/actions';
import QuestionCart from './QuestionCart';
import YearPicker from "react-year-picker";

const AllQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const [department, setDepartment] = useState("")
    const [year, setYear] = useState("")

    console.log(department);
    // checkbox er value true or false return kore
    console.log(year)

    useEffect(() => {
        fetch('http://localhost:5000/allQuestions')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])






    // const department = ''
    // const year = ''
    // const status = 'approve'
    // useEffect(() => {
    //     fetch(`http://localhost:5000/allQuestions?department=${department}&&year=${year}&&status=${status}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setQuestions(data)

    //             // setQuestions(data.blogs)
    //             // const count = data.count;
    //             // const pageNumber = Math.ceil(count / size)
    //             // setPageCount(pageNumber)
    //         })
    // }, [])





    // Start data store via Redux toolkit 

    // const dispatch = useDispatch()

    // const allQuestionsData = useSelector( (state)=> state.questionsData.data)

    // useEffect(()=>{
    //     dispatch(getDataAction())
    //   },[])

    // end data store via Redux toolkit 

    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Find All Questions</h1></div>
            {questions.length ? <div className="row g-4">
                <div className="col-12 col-md-2">
                    <div className="question-sidebar">
                        <div className="filter-selection">
                            <h5 className='mb-3'>Filter Department</h5>
                            <div className="form-check align-items-center">
                                <input onChange={(e) => setDepartment(e.target.checked)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    CSE
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input onChange={(e) => setDepartment(e.target.checked)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    EEE
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input onChange={(e) => setDepartment(e.target.checked)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    Accounting
                                </label>
                            </div>
                        </div>
                        <div className="filter-with-year mt-4">
                            <h5>Filter Year</h5>
                            <YearPicker onChange={e => setYear(e)} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-10">
                    <div className="row">
                        {questions?.slice(0, 4).map((question) => (
                            <QuestionCart
                                key={question.id}
                                data={question}>
                            </QuestionCart>
                        ))}
                    </div>
                </div>
            </div> : <div><h5>Loading...</h5></div>}

        </div>
    );
};

export default AllQuestions;