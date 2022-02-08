import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'


const Header = () => {
    return (
        <div className='header-area'>
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="#home" className='logo'>Edu Bro.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto menu">
                            <Nav.Link href="#home" className='menu-item'>Home</Nav.Link>
                            <Nav.Link href="#find" className='menu-item'>Find Questions</Nav.Link>
                            <Nav.Link href="#forum" className='menu-item'>Forums</Nav.Link>
                            <Nav.Link href="#ask" className='menu-item'>Ask Questions</Nav.Link>
                            <Nav.Link href="#contact" className='menu-item'>Contact</Nav.Link>
                            <Nav.Link href="#login" className='menu-item'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;