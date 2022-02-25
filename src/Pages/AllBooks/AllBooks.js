import React, { useEffect, useState } from 'react';
import BookCart from './BookCart';

const AllBooks = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allBooks')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Desire Books</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data?.map((data) => (
                    <BookCart
                        key={data._id}
                        data={data}>

                    </BookCart>
                ))}
            </div>

        </div>
    );
};

export default AllBooks;