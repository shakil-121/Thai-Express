import React, { useEffect, useState } from "react";
import SingleRecipeCard from "./SingleRecipeCard";
import { BiLike } from "react-icons/bi"; 
import { useLoaderData, useParams } from "react-router-dom";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [chefs, setChefs] = useState([]);
  const daynamic = useParams();
  const routerId = daynamic.id;
  // console.log(routerId,recipe);

  useEffect(() => {
    fetch("https://thai-express-server-shakil-121.vercel.app/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  useEffect(() => {
    fetch("https://thai-express-server-shakil-121.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  const chef = chefs.find((chf) => chf.id == routerId);
  console.log(chef);

  const recipe = recipes.filter((rcp) => rcp.chef_id == routerId);
  console.log(recipe);
  return (
    <div>
      <div style={{height:'200px'}} className="m-4 d-flex w-50 border border-4 rounded-2">
        <img src={chef?.ChefPicture} alt="" />
        <div className="p-4">
          <h4>Name:{chef?.ChefName}</h4>
          <p>
            <span className="fw-bold">Bio: </span>
            {chef?.ChefBio}
          </p>
        <div className="ms-0 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <p className="mb-0">{chef?.TotalLikes}</p>
            <BiLike className="text-primary"></BiLike>
          </div> 
          <p className="mb-0">Experience:{chef?.Yearsofexperience} Years</p>
        </div>
        </div>

      </div>
      <div className="d-flex my-5 mx-4">
        {recipe.map((data) => (
          <SingleRecipeCard key={data.id} recipe={data}></SingleRecipeCard>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
