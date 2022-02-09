import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-box mx-auto">
                            <h2 className='text-center'>Login</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='w-75' {...register("email", { required: true })} placeholder='Enter Email' /> <br />
                                <input className='w-75' {...register("password", { required: true })} placeholder='Enter Password' /> <br />
                                <input type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;