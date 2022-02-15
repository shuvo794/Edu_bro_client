import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Dashboard.css'

const Dashboard = () => {
    const { admin } = useFirebase()
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="dashboard-menu shadow px-3 py-4">
                            <div className="logo text-center mb-3">
                                <h4>Edu Bro.</h4>
                            </div>
                            <ul>
                                <li>
                                    <NavLink to={`welcome`} style={({ isActive }) => ({
                                        color: isActive ? "red" : "black",
                                    })}>Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`my-questions`} style={({ isActive }) => ({
                                        color: isActive ? "red" : "black",
                                    })}>My Questions</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`pending-questions`} style={({ isActive }) => ({
                                        color: isActive ? "red" : "black",
                                    })}>Pending Questions</NavLink>
                                </li>
                                {admin && <div>
                                    <li>
                                        <NavLink to={`manage-questions`} style={({ isActive }) => ({
                                            color: isActive ? "red" : "black",
                                        })}>Manage Questions</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`make-admin`} style={({ isActive }) => ({
                                            color: isActive ? "red" : "black",
                                        })}>Make Admin</NavLink>
                                    </li>
                                </div>}
                            </ul>
                        </div>
                    </Col>
                    <Col md={9} className='px-5'>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;