import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './UserProfile.css'

const UserProfile = () => {
    const { user } = useFirebase()
    return (
        <div className='user-profile shadow-lg'>
            <div className="profile-title d-flex justify-content-between align-items-center">
                <h3>My Profile</h3>
                <Link to={'/dashboard/edit-profile'}><span> <FaEdit className='edit-icon' /> Edit </span></Link>
            </div>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="user-verify py-4">
                            <img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="" />
                            <p>{user.department ? "Profile Completed (100%)" : "Profile Completed (40%)"}</p>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="profile-information py-4">
                            <div className="single-box">
                                <h6>Full Name</h6>
                                <p className='text-capitalize'>{user.displayName}</p>
                            </div>
                            <div className="single-box">
                                <h6>Email</h6>
                                <p>{user.email}</p>
                            </div>
                            <div className="single-box">
                                <h6>DepartMent</h6>
                                <p className='text-capitalize'>{user.department ? user.department : "null"}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserProfile;