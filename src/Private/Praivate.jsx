import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const Private = ({children}) => { 
    const {user,loadding}=useContext(AuthContext); 
    const location=useLocation()
    console.log(user); 
    if(loadding)
    {
        return  <div className='d-flex justify-content-center'>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>{' '}
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
  
    }
    if(user)
    {
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>;
};

export default Private;