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

            {data?.map((data) => (
                <QuestionCart
                    key={data.id}
                    data={data}>

                </QuestionCart>
            ))}
        </div>

        </div >
    );
};

export default AllQuestions;