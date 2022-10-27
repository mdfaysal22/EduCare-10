import React from 'react';
import { FaArrowRight, FaCheck, FaStar } from 'react-icons/fa'; 
import { BsDownload } from 'react-icons/bs'; 
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const data = useLoaderData()
    const {name,id, about, img_url, students, ratings, features, details, hours, quiz, price, author, author_img} = data;
    return (
            <div className='w-4/5 mx-auto'>
            <h2 className='text-3xl font-semibold my-2'>{name}</h2>
            <div className='w-full h-auto'>
            <figure>
                <img src={img_url} alt="" />
            </figure>
            </div>
            <div>
            <h1 className='font-semibold text-lg'>About :</h1>
            <p>{about}</p>
            <p>{details}</p>
            </div>
            <h2 className='text-xl'>Features: </h2>
            {
                features.map(f => <li className='list-none flex items-center gap-2'> <FaCheck className='text-xs'></FaCheck> {f}</li>)
            }

            <div className='my-2'>
                <h2 className='text-2xl font-semibold'>Students: {students}</h2>
                <h3 className='text-xl font-semibold flex items-center gap-2'>Ratings : {ratings} <FaStar className='text-yellow-600'></FaStar><FaStar className='text-yellow-600'></FaStar><FaStar className='text-yellow-600'></FaStar></h3>
            </div>

            <div className='my-2'>
                <h2 className='text-2xl font-semibold'>Total Video Hours: {hours}</h2>
                <h2 className='text-2xl font-semibold'>Total Quiz : {quiz}</h2>
                <h1 className='text-3xl'>Price: ${price}</h1>
            </div>

            <div className='flex my-3 flex-row items-center'>
                <img className='w-16 rounded-full' src={author_img} alt="" />
                <h2 className='text-xl font-semibold ml-3'>{author}</h2>
                
            </div>

            <div className='gap-4 flex my-4'>
                <button className='btn '>Download <BsDownload className='ml-2'></BsDownload></button>
                <Link to={`/checkout/${id}`} className='btn btn-outline'>Checkout <FaArrowRight className='ml-2'></FaArrowRight></Link>
            </div>
            
        </div>
    );
};

export default CourseDetails;