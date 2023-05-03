import React, { useEffect, useState } from 'react';
import SingleRecipeCard from './SingleRecipeCard';
import { useLoaderData } from 'react-router-dom';


const Recipe = () => { 
    // const recipes=useLoaderData()
    const [recipes,setRecipes]=useState([]) 
    useEffect(()=>{
        fetch('https://thai-express-server-shakil-121.vercel.app/recipe')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
    return (
        <div>
            {
             recipes.map(singleRecipe=><SingleRecipeCard
             key={singleRecipe.id} 
             singleRecipe={singleRecipe}
             >
              
             </SingleRecipeCard>)   
            }
        </div>
    );
};

export default Recipe;