import { Container } from 'react-bootstrap';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';


const onSubmit = data => {

    fetch(`http://localhost:5000/postQuestion`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result)

            alert('Question Added')
        });
};


const AskQuestions = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center">
                            <h2 className='mb-5'>Add Your Question</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='w-75 mb-3'  {...register("department", { required: true })} placeholder='Enter the Department' /> <br />
                                <input className='w-75 mb-3'  {...register("subject", { required: true })} placeholder='Enter Course Title' /> <br />
                                <input className='w-75 mb-3'  {...register("code", { required: true })} placeholder='Enter Course Code' /> <br />
                                <input className='w-75 mb-3' {...register("semester", { required: true })} placeholder='Enter Semester' /> <br />
                                <input className='w-75 mb-3' {...register("year", { required: true })} placeholder='Question Year' /> <br />

                                <input className='w-75 mb-3' {...register("driveLink", { required: true })} placeholder='Question Link' /> <br />

                                <button type='submit'>Submit</button>
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AskQuestions;