import React, { useEffect, useState } from 'react';
import QuestionCart from './QuestionCart';

const AllQuestions = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/Test.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Desire Questions</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data?.map((data) => (
                   
                ))}
            </div>

        </div>
    );
};

export default AllQuestions;