import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'

const BlogDetails = () => {
    const { id } = useParams()
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="blog-image">
                            <img className='w-100' src="https://image.freepik.com/free-photo/sunrise_74190-169.jpg" alt="blog-bg" />
                        </div>
                        <div className="blog-text px-2 py-3">
                            <div className="blog-meta mb-1 d-flex justify-content-between">
                                <span>Sea beach</span>
                                <span>12/04/2022</span>
                            </div>
                            <div className='py-2 d-flex justify-content-between'>
                                <span>Author: Alex Akash</span>
                                <span>Rating: <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                            </div>
                            <h4>World's largest sea beach Cox's Bazar</h4>
                            <p>Cox's Bazar is the largest sea beach in the world and the beauty and sea shore of the Cox's Bazar really enjoyable. I was really surprised going there. This is my first visit to cox's bazar. But after reaching there I fell this is the place what I am looking for. you are already feeling the tense atmosphere of the video playing in the background, and the more you read through easily-digestible paragraphs, the more you want to see how it all went down. The Travel Episodes blog takes travel blogging into the realm of short stories like no other travel blogs I have seen.Its focus on world-changing photography accompanying the travel stories written by on this list.The moment you arrive on that page, you will see a full-screen video of drones flying around Wales together with many full-page photos of mountains and castles of Wales. If that doesn't create the best first impression for a travel website, I do not know what is.Another Escape's design shines the best when you are viewing travel stories like where the article follows a couple who traded their city lives to live lives on the road. Its white space and simple design of the website make ways for the engaging travel story and photography to surface and shine on its own.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;