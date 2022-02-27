import React from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const PendingQuestions = () => {
    return (
        <div className='pending-questions'>
            <h2>Pending Questions</h2>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Questions</th>
                        <th>Approval Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>political science degree question 2019</td>
                        <td><button className='details-btn'>pending</button> <FaTrashAlt className='btn-delete' /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default PendingQuestions;