import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({course, handleDetails}) => {
    const {name,id, about, author_img,img_url,author} = course;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <div className="w-full h-48">
        <img className="h-48 w-full" src={img_url} alt="Shoes" />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name.length > 20 ? name.slice(0, 20) : name}
        </h2>
        <p>{about.length > 51 ? about.slice(0, 50) : about} ... <Link>Show More</Link></p>
        <div className="flex items-center">
            <img className="w-10 border-2 border-slate-400 rounded-full" src={author_img} alt="" />
            <small className="ml-2">{author}</small>
        </div>
        <Link to={`/coursedetails/${id}`} className="btn btn-primary">Course Details</Link>
      </div>
    </div>
  );
};

export default SingleCourse;
