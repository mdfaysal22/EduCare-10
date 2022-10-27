import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  FaGithub,  FaGoogle } from 'react-icons/fa'
import { useContext } from "react";
import { authUser } from "../../../Contexts/AuthContexts";
import swal from 'sweetalert';
import { useState } from "react";


const Login = () => {
  const {emailSignIn,googleSignUp,passwordReset, githubSignUp} = useContext(authUser)
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const errorHandler = (err) => {
    swal({
      title: "Your Email Or Password is Wrong",
      text: err,
      icon: "error",
      button: "Reset Password",
    });
  }
  const SendPasswordResetHandler = (email) =>{
    passwordReset(email)
    .then(() => {
      swal({
        title: "Check Email",
        icon: "success",
        button: "Ok",
      });
    })
    .catch(() => {

    })
  }
  
  const handleEmailSignIn = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    emailSignIn(email, password)
    .then(result => {
      const signedUser = result.user;
      navigate(from, {replace:true})
    })
    .catch(err => {
      const errMessage = err.message;
      errorHandler(errMessage)
    })
    
    form.reset()
  }
  const handleSetEmail = (e) => {
    const email = e.target.value;
    setEmail(email)
  }
  const handleGoogleSignIn = () => {
    googleSignUp()
    .then(result => {
        const currentUser = result.user;
        navigate(from, {replace:true})
    })
    .catch(err => {
        const errMessage = err.message;
    })
}
const handleGitthubSignIn = () => {
    githubSignUp()
    .then(result => {
        const currentUser = result.user;
        navigate(from, {replace:true})
    })
    .catch(err => {
        const errMessage = err.message;
    })
}
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleEmailSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              onBlur={handleSetEmail}
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
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <button onClick={() => {SendPasswordResetHandler(email)}} href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
            <small className="text-center">Sign in Using </small>
            <div className="flex justify-center gap-6">
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
          <Link to={'/signup'}>Create an Account</Link>
          </div>
          </form>

          
          
        </div>
      </div>
    </div>
  );
};

export default Login;
