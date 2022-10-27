import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authUser } from '../Contexts/AuthContexts';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(authUser);
    const location = useLocation();
    if (loader) {
        return ( 
            <div className='hero h-screen'>
                <h1 className='text-center text-2xl'>Loading...</h1>
            </div>
        );
      }

    if(user && user?.email){
        return children
    }
    return <Navigate to={"/login" } state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;