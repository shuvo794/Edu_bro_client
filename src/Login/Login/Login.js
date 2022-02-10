import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc'


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center">
                            <h2 className='mb-5'>Login to Edu Bro</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='w-75 mb-3'  {...register("email", { required: true })} placeholder='Enter Email' /> <br />
                                <input className='w-75 mb-3' {...register("password", { required: true })} placeholder='Enter Password' /> <br />

                                <button type='submit'>Login</button>
                            </form>
                            <div className='login-meta mt-4'>
                                <p>New to Edu Bro? <Link to={'/register'}><span className='login-links'>Create a free Account</span></Link></p>
                                <span className='fs-4'>Continue with <FcGoogle className='fs-2 google' /></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;