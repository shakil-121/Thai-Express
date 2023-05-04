import React from 'react';
import Recipe from '../Pages/Recipe/Recipe';
import Nav from '../Shared/Nav';
import Footer from '../Shared/Footer';

const RecipeLayout = () => {
    return (
        <div>
         <Nav></Nav>
         <Recipe></Recipe> 
         <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;