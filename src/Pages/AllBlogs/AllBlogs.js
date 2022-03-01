import React, { useEffect, useState } from 'react';
import BlogsCart from './BlogsCart';

const AllBlogs = () => {
 
        const [blogs, setBlogs] = useState([]);
        useEffect(() => {
            fetch('http://localhost:5000/allBlogs')
                .then(res => res.json())
                .then(data => setBlogs(data))
        }, [])
        console.log(blogs)
    return (
        <div className="container text-black mt-5 mb-5" >
        <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">User Blogs</h1></div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {blogs?.map((blog) => (
               
         <BlogsCart
         
         key={blog.id}
         data={blog}>
         </BlogsCart>

            

            ))}
        </div>

    </div>
    );
};

export default AllBlogs;