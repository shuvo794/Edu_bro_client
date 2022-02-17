import React from 'react';
import Saikat from '../../../Assets/Images/TeamMember/Saikat.png'
import Yeasin from '../../../Assets/Images/TeamMember/Yeasin.png'
import Hafiz from '../../../Assets/Images/TeamMember/jrHafiz.png'
import Shuvo from '../../../Assets/Images/TeamMember/Shuvo.png'
import Monib from '../../../Assets/Images/TeamMember/Monib.png'
import Hasnat from '../../../Assets/Images/TeamMember/Hasnat.png'
                                    
import './TeamMember.css'
const TeamMember = () => {
    return (
        <div className='container py-5'>
            <div className="d-flex my-5 justify-content-center"><h1 className="Team">Our Team Mate</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                    <div className="card h-100 hover">
                        <img src={Yeasin} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title ">Yeasin Rahaman</h3>
                            <p className="card-text">MERN Stack Developer</p>
                        </div>

                    </div>
                </div>  
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={Saikat} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title">Mehedi hasan Saikat</h3>
                            <p className="card-text">MERN Stack Developer</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={Hafiz} className="card-img-top img-fluid img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title">Okshi Hafiz</h3>
                            <p className="card-text">Frontend Developer</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={Shuvo} className="card-img-top img-fluid img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title">Shoukat Bhowhaya Shovo</h3>
                            <p className="card-text">Frontend Developer</p>
                        </div>

                    </div>
                </div>              
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={Monib} className="card-img-top img-fluid img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title">Monib Bormon </h3>
                            <p className="card-text">Frontend Developer</p>
                        </div>

                    </div>
                </div>              
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={Hasnat} className="card-img-top img-fluid img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h3 className="card-title">Hasnatul Alam </h3>
                            <p className="card-text">BackEnd Developer</p>
                        </div>

                    </div>
                </div>              

            </div>

        </div>
    )
};

export default TeamMember;