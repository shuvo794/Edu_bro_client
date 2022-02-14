import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={3}>

                    </Col>
                    <Col md={9}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;