import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <div className="mx-10 my-5">
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          01. About Our Site.
        </div>
        <div className="collapse-content">
          <p>We are the Online Educational Website. We are Provide Some Tach Related Course.</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          02. How to Work Us ?
        </div>
        <div className="collapse-content">
          <p>First of all, You can create a Account in our Website, Then Choose a Course. And Get Premium Access and Paid Course Price in a Bank account.</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          03.About Our All Course
        </div>
        <div className="collapse-content">
          <p>Please Visit Our Course Page <Link className="text-blue-600" to={'/courses'}>Our Courses Page Link Here.</Link></p>
        </div>
      </div>
        <div className="divider"></div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          04.How to Create account?
        </div>
        <div className="collapse-content">
          <p>Visit our <Link className="text-blue-600" to={'/signup'}>Signup Page.</Link> And Provide Some Personal Information.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
