import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css'


const Header = () => {

    const {userLogOut , user} = useFirebase()

    return (
        <div className='header-area'>
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="#home" className='logo'>Edu Bro.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto menu">
                            <Nav.Link href="#home" as={NavLink} to="/home"  className='menu-item'>Home</Nav.Link>
                            <Nav.Link href="#find" className='menu-item'>Find Questions</Nav.Link>
                            <Nav.Link href="#forum" className='menu-item'>Forums</Nav.Link>
                            <Nav.Link href="#ask" className='menu-item'>Ask Questions</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact"  className='menu-item'>Contact</Nav.Link>
                            <p className="text-white me-3 ms-2 text-center mt-2">{user.displayName}</p>
                            { !user.email ?<Nav.Link    as={NavLink} to="/login" className='menu-item'>
                            Login
                            </Nav.Link>
                            :
                            <button onClick={userLogOut}  type="button" className="btn btn-light">Log Out</button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;