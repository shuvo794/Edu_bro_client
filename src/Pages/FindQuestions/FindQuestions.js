import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './FindQuestions.css';

const FindQuestions = () => {
    return (
        <div className='find-questions-area py-5'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="search-questions text-center">
                            <h2>Search Questions</h2>
                            <div className="search-form">
                                <input type="text" placeholder='Search Questions' />
                                <button className='search-btn'>Search</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FindQuestions;