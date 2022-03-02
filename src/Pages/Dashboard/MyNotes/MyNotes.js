import React from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyNotes = () => {
    return (
        <div className='my-questions'>
        <div className='d-flex justify-content-between align-items-center my-question-header'>
            <h2>My Books</h2>
            <Link to={'/dashboard/add-notes'}>
                <button className='add-btn'>Add Notes</button>
            </Link>
        </div>
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Questions</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>CSE 3rd semister Object Oriented Programming problem</td>
                    <td><button className='details-btn'>See Answer</button> <FaTrashAlt className='btn-delete' /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Accounting bba 1st year question 2018</td>
                    <td><button className='details-btn'>See Answer</button><FaTrashAlt className='btn-delete' /></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td >c++ problem solving question 2021 DU</td>
                    <td><button className='details-btn'>See Answer</button><FaTrashAlt className='btn-delete' /></td>
                </tr>
            </tbody>
        </Table>
    </div>
    );
};

export default MyNotes;