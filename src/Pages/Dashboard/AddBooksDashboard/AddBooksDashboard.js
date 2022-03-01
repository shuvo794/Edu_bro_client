import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddBooksDashboard = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch(`http://localhost:5000/postBooks`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)

                alert('Question Added Successfully')
                reset()
            });
    };
    return (
        <Container>
        <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <div className="login-form text-center">
                    <h2 className='mb-5'>Add Books</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='w-75 mb-3'  {...register("bookName", { required: true })} placeholder='Book Name' /> <br />
                        <input className='w-75 mb-3'  {...register("author", { required: true })} placeholder='Author Name' /> <br />
                        <input className='w-75 mb-3'  {...register("subject", { required: true })} placeholder='Subject Name' /> <br />
                        <input className='w-75 mb-3' {...register("edition", { required: true })} placeholder='Book Edition' /> <br />
                        <input className='w-75 mb-3' {...register("year", { required: true })} placeholder='Year' /> <br />
                        <input className='w-75 mb-3' {...register("driveLink", { required: true })} placeholder='Question Link' /> <br />
                        <button type='submit'>Submit</button>
                    </form>

                </div>
            </Col>
        </Row>
    </Container>
    );
};

export default AddBooksDashboard;