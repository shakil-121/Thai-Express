import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => { 
    const {user}=useContext(AuthContext);
    console.log(user);
    if(user)
    {
        return children;
    }
    return <Navigate to='/login' replace></Navigate>;
};

export default Private;