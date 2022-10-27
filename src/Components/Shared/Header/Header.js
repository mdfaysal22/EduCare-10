import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaMoon } from 'react-icons/fa';
import { useContext } from 'react';
import { authUser } from '../../../Contexts/AuthContexts';
import userImg from './../../../Assets/user.png';

const Header = () => {
  const {user, signOutSystem} = useContext(authUser);
  console.log(user);

  const handleSignOut = () => {
    signOutSystem()
    .then(() => {})
    .catch(() => {})
  }
    return (
        <div className="navbar bg-slate-500">
  <div className="flex-1">
    <Link to={'/'} className="btn btn-ghost normal-case text-xl">EduCare</Link>
  </div>
        
        <div className='hidden md:block mr-6'>
            <ul className='flex items-center gap-3'>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/courses'}>Courses</Link></li>
                <li><Link to={'/faq'}>FAQ</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
        </div>
  <div className="flex-none">
    <div className='md:hidden'>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <FaBars></FaBars>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
        <ul className='flex flex-col justify-center items-center'>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/courses'}>Courses</Link></li>
                <li><Link to={'/faq'}>FAQ</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
        </div>
      </div>
    </div>
    </div>
    {
      user?.uid ? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL ? user.photoURL : userImg }/>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link to={'/profile'} className="justify-between">
            Profile
          </Link>
        </li>
        <li onClick={handleSignOut} ><a>Logout</a></li>
      </ul>
    </div>
    :
    <div>
      <Link to={'/signup'} className="btn btn-sm">Sign-Up</Link>
    </div>
    }
    
    
      <div className='divider divider-horizontal'></div>
    <div className='mr-4'>
      <button className='btn btn-circle'><FaMoon></FaMoon></button>
    </div>
  </div>
</div>
    );
};

export default Header;