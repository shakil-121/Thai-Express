import React from 'react';
import Nav from '../Shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import useTitle from '../hooks/useTitle';

const Main = () => { 
    useTitle('Home');
    return (
        <div>
            <Nav></Nav> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;