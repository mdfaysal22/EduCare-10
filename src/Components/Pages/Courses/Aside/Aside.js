import React from 'react';
import { Link } from 'react-router-dom';

const Aside = ({course}) => {
    
    return (
        <Link className='btn m-2 p-2'>
           {course.name.slice(0, 20)}
        </Link>
    );
};

export default Aside;