import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='text-center py-10'>
                <h2 className='text-4xl font-semibold'>Page Not Found</h2>
                <h1 className='text-4xl lg:text-6xl my-4 font-semibold'>4<span className='text-red-400'>0</span>4</h1>
                <Link to={'/'} className='btn'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;