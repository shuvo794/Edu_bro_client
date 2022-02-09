import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer-area pt-5 pb-3 mt-5'>
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="footer-box">
                                <h4>Get In Touch</h4>
                                <div className="links mt-4">
                                    <ul>
                                        <li> <FaArrowRight className='link-icon' />contact admin</li>
                                        <li> <FaArrowRight className='link-icon' />our moderators </li>
                                        <li> <FaArrowRight className='link-icon' />location map</li>
                                        <li> <FaArrowRight className='link-icon' />newsletter update</li>
                                        <li> <FaArrowRight className='link-icon' />report on security issues</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-box">
                                <h4>Useful Category</h4>
                                <div className="links mt-4">
                                    <ul>
                                        <li> <FaArrowRight className='link-icon' />CSE Guideline</li>
                                        <li> <FaArrowRight className='link-icon' />EEE Guideline</li>
                                        <li> <FaArrowRight className='link-icon' />BSC Guideline</li>
                                        <li> <FaArrowRight className='link-icon' />BBA Guideline</li>
                                        <li> <FaArrowRight className='link-icon' />BCS Guideline</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-box">
                                <h4>Important Links</h4>
                                <div className="links mt-4">
                                    <ul>
                                        <li> <FaArrowRight className='link-icon' />Forums</li>
                                        <li> <FaArrowRight className='link-icon' />FAQ </li>
                                        <li> <FaArrowRight className='link-icon' />Portal</li>
                                        <li> <FaArrowRight className='link-icon' />Privacy & Policy</li>
                                        <li> <FaArrowRight className='link-icon' />Terms & Conditions</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-box">
                                <h4>Subscribe Newsletter</h4>
                                <div className="subscribe-form mt-4">
                                    <input type="email" required placeholder='Enter Email' />
                                    <button type='submit'>Subscribe <FaArrowRight className='link-icon' /></button>
                                </div>
                                <div className="footer-social mt-3">
                                    <h5>Share Social Media</h5>
                                    <FaFacebook className='social-icon' />
                                    <FaInstagram className='social-icon' />
                                    <FaTwitter className='social-icon' />
                                    <FaYoutube className='social-icon' />
                                    <FaTwitter className='social-icon' />
                                    <FaLinkedin className='social-icon' />
                                    <FaPinterest className='social-icon' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr className='horizontal-line' />
            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col>
                            <p className="copyright-text text-center mt-2">
                                All right reserved &copy; Edu Bro. 2022
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;