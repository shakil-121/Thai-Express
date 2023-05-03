import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav';

const LogLayout = () => {
    return (
        <div> 
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default LogLayout;