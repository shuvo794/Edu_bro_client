import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Dashboard.css';
import { FaThLarge, FaBookmark, FaCommentDots, FaSignOutAlt, FaTasks, FaUserShield, FaSchool } from 'react-icons/fa'

const Dashboard = () => {
    const { admin } = useFirebase()
    return (
        <div className='dashboard'>
            <Row>
                <Col md={2}>
                    <div className="dashboard-menu shadow px-3 py-4">
                        <div className="logo mb-4">
                            <h4>Edu Bro.</h4>
                        </div>
                        <ul>
                            <li>
                                <NavLink to={`welcome`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaThLarge className='me-1' /> Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaBookmark className='me-1' /> My Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`pending-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaCommentDots className='me-1' /> Pending Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`add-depertment`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaSchool className='me-1' /> Add Depertment</NavLink>
                            </li>

                            {/* {admin && <div> */}
                            <li>
                                <NavLink to={`manage-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaTasks className='me-1' /> Manage Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`make-admin`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaUserShield /> Make Admin</NavLink>
                            </li>
                            {/* </div>} */}

                            <li className='dashboard-logOut'>
                                <FaSignOutAlt className='me-1' /> Log Out
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={10} className='px-5 py-5'>
                    <Outlet />
                </Col>
            </Row>
        </div >
    );
};

export default Dashboard;