import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import img1 from '../../../../Assets/intro.png';
import img2 from '../../../../Assets/datastructures.png';
import img3 from '../../../../Assets/databases.png';
const Cources = () => {
    const courses = [
        {
            name: "Introduction to computer science",
            intro: "We will be discussing the important subjects within the scope of computer science.",
            lesson: "Lesson 5",
            time: "4 Hours",
            img: img1,
        },
        {
            name: "Data Structures and Algorithms",
            intro: "We will cover fundamental concepts pertaining to memory, complexity analysis, and more.",
            lesson: "Lesson 6",
            time: "6 Hours",
            img: img2
        },
        {
            name: "Sql and NoSql Databases",
            intro: "n this video we will learn the difference between SQL, and NoSQL, and how to deal with both of them.",
            lesson: "Lesson 10",
            time: "12 Hours",
            img: img3
        }
    ]
    return (
        <div className='w-5/6 mx-auto'>
            <div className='text-center mb-5'>
                <h1 className='text-4xl font-medium'>Get started with our computer science course</h1>
                <p>IO academy is a leading provider of high-quality, affordable Computer Science education. <span><Link className='text-blue-600  hover:text-blue-400' to="/courses">Browse lessons <HiOutlineArrowNarrowRight className='inline'/></Link></span></p>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        courses.map((item, i) => {
                            return <div className='my-5' key={i}>
                                <img className='rounded-xl' src={item.img} alt="" />
                                <div>
                                    <div className='flex font-bold justify-between items-center text-blue-700'>
                                        <small>{item.lesson}</small>
                                        <small>{item.time}</small>
                                    </div>
                                    <h1 className='text-2xl font-bold'>{item.name}</h1>
                                    <p className='font-light'>{item.intro}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Cources;