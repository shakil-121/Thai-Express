import React from "react";
import { BiLike } from "react-icons/bi"; 
import './ChefCard.css'
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { ChefPicture, ChefName,Yearsofexperience,Numbersofrecipes,TotalLikes,id} = chef;
  return (
    <div className="col-lg-4 px-auto my-3 rounded">
      <div className="card border border-4 rounded" style={{width:'18rem',backgroundColor:'#ECF9FF'}}>
        <img  src={ChefPicture} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ChefName}</h5>
          <div className="d-flex justify-content-between">
            <p>Experience: {Yearsofexperience}</p>
            <p>Total Recipe: {Numbersofrecipes}</p>
          </div>
        </div>
        <div className="card-body border-top bg-dark d-flex justify-content-between">
          <div className="d-flex align-items-center">
             <p className="mb-0 text-light">{TotalLikes}</p>
             <BiLike className="text-primary"></BiLike>
          </div>
          <div>
          <Link to={`/chef/${id}`}><button type="button" class="btn btn-primary">View Recipe</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
