import React from 'react';
import Saikat from '../../../Assets/Images/TeamMember/Saikat.png'
import Yeasin from '../../../Assets/Images/TeamMember/Yeasin.png'
import Hafiz from '../../../Assets/Images/TeamMember/jrHafiz.png'
import Shuvo from '../../../Assets/Images/TeamMember/Shuvo.png'
                                    
import './TeamMember.css'
const TeamMember = () => {
    return (
        <div className='container py-5'>
            <div class="d-flex my-5 justify-content-center"><h1>Our Team Mate</h1></div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={Yeasin} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Yeasin Rahaman</h5>
                            <p class="card-text">Developer</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={Saikat} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">EDWARD DUGHLAS</h5>
                            <p class="card-text">Tour Planer</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={Hafiz} class="card-img-top img-fluid img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Okshi Hafiz</h5>
                            <p class="card-text">front end developer</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={Shuvo} class="card-img-top img-fluid img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Shoukat Bhowhaya Shovo</h5>
                            <p class="card-text">front end developer</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
};

export default TeamMember;