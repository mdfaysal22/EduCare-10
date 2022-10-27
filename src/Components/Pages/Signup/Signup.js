
import React from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authUser } from "../../../Contexts/AuthContexts";

const Signup = () => {
    const {emailSignup,updateUser, googleSignUp, githubSignUp, user} = useContext(authUser)
    const handleEmailSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        emailSignup(email, password) 
        .then(result  => {
            const currentUser = result.user;
            updateUser(name)
        .then(()=>{})
        .catch(() => {})
        })
        .catch(err => {
            const errMessage = err.message;
        })
        form.reset();
    }

    const handleGoogleSignIn = () => {
        googleSignUp()
        .then(result => {
            const currentUser = result.user;
        })
        .catch(err => {
            const errMessage = err.message;
        })
    }
    const handleGitthubSignIn = () => {
        githubSignUp()
        .then(result => {
            const currentUser = result.user;
        })
        .catch(err => {
            const errMessage = err.message;
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">


        <form onSubmit={handleEmailSignUp} className="shadow-2xl border-2 border-blue-500  rounded-lg bg-base-100">
        <div className="text-center mt-4">
          <h1 className="text-5xl font-bold">Sign Up</h1>
        </div>
          <div className="flex p-10 flex-row justify-center items-center">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
              </div>
            </div>
            <div className="ml-6 text-center flex flex-col">
              <small className="text-center">Sign Up Using </small>
              <div className="flex my-4 justify-center gap-6">
                <div className="form-control">
                  <button onClick={handleGoogleSignIn} className="btn btn-outline btn-circle">
                    <FaGoogle></FaGoogle>
                  </button>
                </div>
                <div className="form-control">
                  <button onClick={handleGitthubSignIn} className="btn btn-outline btn-circle">
                    <FaGithub></FaGithub>
                  </button>
                </div>
              </div>
              <div className="text-center hover:text-blue-600 mb-1">
              <Link to={"/login"}>Have a Account ?</Link>
            </div>
            </div>

            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
