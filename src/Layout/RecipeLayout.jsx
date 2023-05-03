import React from 'react';
import Recipe from '../Pages/Recipe/Recipe';
import Nav from '../Shared/Nav';

const RecipeLayout = () => {
    return (
        <div>
         <Nav></Nav>
         <Recipe></Recipe>
        </div>
    );
};

export default RecipeLayout;