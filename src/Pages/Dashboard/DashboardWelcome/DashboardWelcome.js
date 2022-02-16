import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const DashboardWelcome = () => {
    const { user } = useFirebase()
    return (
        <div className='dashboard-welcome'>
            <h3>Hello, <span>{user.displayName}</span></h3>
            <p className='font-lg'>Welcome to Edu Bro.</p>
        </div>
    );
};

export default DashboardWelcome;