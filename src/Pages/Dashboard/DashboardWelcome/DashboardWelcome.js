import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const DashboardWelcome = () => {
    const { user } = useFirebase()
    return (
        <div>
            <h3>Hello, {user.displayName}</h3>
            <p className='font-lg'>Wel come to Edu Bro.</p>
        </div>
    );
};

export default DashboardWelcome;