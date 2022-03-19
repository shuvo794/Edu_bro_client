import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from '../../ReduxManagement/Redux/actions';
import BooksCart from './BooksCart';

const AllBooks = () => {

    // const [books, setBooks] = useState([]);
    // useEffect(() => {
    //     fetch('https://blooming-sierra-74368.herokuapp.com/allBooks')
    //         .then(res => res.json())
    //         .then(data => setBooks(data))
    // }, [])
    // console.log(books)



// Start data store via Redux toolkit 

const dispatch = useDispatch()

const allBooksData = useSelector( (state)=> state.questionsArchiveData.booksData)

useEffect(()=>{
    dispatch(getBooksAction())
  },[])

// end data store via Redux toolkit 


    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Books Collection</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {allBooksData?.map((book) => (

                    <BooksCart
                        key={book.id}
                        data={book}>

                    </BooksCart>

                ))}
            </div>

        </div>
    );
};

export default AllBooks;