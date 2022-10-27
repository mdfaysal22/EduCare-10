import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Aside from './Aside/Aside';
import SingleCourse from './SingleCourse/SingleCourse';

const Courses = () => {
    const data = useLoaderData();
    return (
        <div>
            
            <div className='w-100 flex'>
                <div className='w-4/5 mx-10 my-5'>
                <h1 className='text-4xl font-semibold p-4'>Welcome to EduCare.</h1>
                    <div className='grid grid-cols-3 gap-3'>
                    {
                        data.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                    }
                    </div>
                </div>
                <div className='w-1/5 text-center bg-slate-400'>
                    <h1 className='text-2xl my-5'>Important Link</h1>
                    {
                        data.map(course => <Aside course={course} key={course.id}></Aside>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;