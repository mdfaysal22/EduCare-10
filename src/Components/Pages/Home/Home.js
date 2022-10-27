import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-6 my-6">
      <h1 className="text-6xl my-4 font-semibold">Welcome To EduCare</h1>
      <h3 className="text-4xl font-semibold">Learn Without Limit.</h3>
      <p className="w-1/2 mx-auto">
        Start, switch, or advance your career with more than 5,200 courses,
        Professional Certificates, and degrees from world-class universities and
        companies.
      </p>

      <Link to={'/signup'} className="btn btn-xl my-6">Join for Free</Link>
    </div>
  );
};

export default Home;
