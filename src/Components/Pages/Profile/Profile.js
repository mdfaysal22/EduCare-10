import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authUser } from "../../../Contexts/AuthContexts";
import userImg from './../../../Assets/user.png'

const Profile = () => {
  const { user } = useContext(authUser);
  return (
    <div>
      <div className="card my-10 w-96 mx-auto glass">
        <figure className="relative mb-10">
          <img src="https://placeimg.com/400/225/arch" alt="car!" />
        </figure>
        <div className="absolute left-5 top-[160px]">
            <img className="rounded-full w-24 border-4 border-slate-600" src={user?.photoURL ? user.photoURL : userImg} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{user?.name === null ? user.name : "User Name"}</h2>
          <p>{user?.email}</p>
          <div className="card-actions justify-center">
            <Link to={'/'} className="btn btn-primary">Go To Home Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
