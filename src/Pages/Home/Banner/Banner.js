import React from 'react';

import Typewriter from 'typewriter-effect';
import './Banner.css';

const Banner = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div>
                            <div id="home" style={{ height: '700px' }} className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                                <div className=" text-center my-5 py-5 ">
                                    <h1 className="text-light  display-1">
                                        <Typewriter
                                            options={{
                                                strings: ["Learn creat explore"],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>test</h2>
        </section>
    );
};

export default Banner;