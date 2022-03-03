import React from 'react';
import { Link } from 'react-router-dom';
import './BlogsCart.css';

const BlogsCart = ({ data }) => {

    const { topic, blog, userName, email, _id } = data
    return (
        <div className="col-md-4">
            <div className="single-blog shadow">
                <div className="blog-bg">
                    <img className='w-100' src="https://image.freepik.com/free-photo/sunrise_74190-169.jpg" alt="blog-bg" />
                </div>
                <div className="blog-text px-2 py-3">
                    <div className="blog-meta mb-2 d-flex justify-content-between">
                        <span>Sea beach</span>
                        <span>12/04/2022</span>
                    </div>
                    <Link to={`/blog-details/${_id}`}><h4>World's largest sea beach Cox's Bazar</h4></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogsCart;