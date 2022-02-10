import React from 'react';
import Saikat from '../../../Assets/Images/TeamMember/Saikat.png'
import Yeasin from '../../../Assets/Images/TeamMember/Yeasin.png'
import Hafiz from '../../../Assets/Images/TeamMember/jrHafiz.png'
import './TeamMember.css'
const TeamMember = () => {
    return (
        <div className='container py-5'>
            <div className="d-flex my-5 justify-content-center"><h1>Our Team Mate</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={Yeasin} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Yeasin Rahaman</h5>
                            <p className="card-text">Developer</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={Saikat} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">EDWARD DUGHLAS</h5>
                            <p className="card-text">Tour Planer</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={Hafiz} className="card-img-top img-fluid img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Okshi Hafiz</h5>
                            <p className="card-text">Tour Expert</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
};

export default TeamMember;