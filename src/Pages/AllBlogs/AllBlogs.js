import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogsAction } from '../../ReduxManagement/Redux/actions';
import BlogDetails from './BlogDetails';
import BlogsCart from './BlogsCart';

const AllBlogs = () => {

    // const [blogs, setBlogs] = useState([]);
    // useEffect(() => {
    //     fetch('https://peaceful-sands-08700.herokuapp.com/allBlogs')
    //         .then(res => res.json())
    //         .then(data => setBlogs(data))
    // }, [])
    // console.log(blogs)

// Start data store via Redux toolkit 

const dispatch = useDispatch()

const allBlogsData = useSelector( (state)=> state.questionsArchiveData.blogsData)

useEffect(()=>{
    dispatch(getBlogsAction())
  },[])

// end data store via Redux toolkit 



    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">All Blogs</h1></div>
            <div className="row g-4 d-flex my-5 ">
                {allBlogsData?.map((blog) => (

                    <BlogDetails
                        key={blog.id}
                        data={blog}>

                    </BlogDetails>



                ))}
            </div>

        </div>
    );
};

export default AllBlogs;