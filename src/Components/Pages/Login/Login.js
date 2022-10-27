import React from "react";
import { Link } from "react-router-dom";
import { FaGitAlt, FaGithub, FaGithubAlt, FaGoogle } from 'react-icons/fa'
import { useContext } from "react";
import { authUser } from "../../../Contexts/AuthContexts";

const Login = () => {
  const {emailSignIn,googleSignUp, githubSignUp} = useContext(authUser)

  const handleEmailSignIn = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    emailSignIn(email, password)
    .then(result => {
      const signedUser = result.user;
      console.log(signedUser);
    })
    .catch(err => {
      const errMessage = err.message;
      console.log(errMessage)
    })
    form.reset()
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
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
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
