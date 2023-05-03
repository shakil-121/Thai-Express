import React from "react";

const SingleRecipeCard = ({ singleRecipe }) => {
  const {recipeName} = singleRecipe;
  return (
    <div>
      <div class="card" style={{width:"18rem"}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{recipeName}</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
    </div>
  );
};

export default SingleRecipeCard;
